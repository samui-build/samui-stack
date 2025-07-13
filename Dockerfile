FROM node:24-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@latest-10 --activate
COPY . /workspace
WORKDIR /workspace

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build && pnpm prisma generate

FROM base
COPY --from=prod-deps /workspace/node_modules /workspace/node_modules
COPY --from=build /workspace/build /workspace/build
EXPOSE 8000
CMD [ "pnpm", "start" ]
