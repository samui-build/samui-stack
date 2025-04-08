export function appMeta(title?: string, description?: string) {
  return [
    { title: `${title ? title + ' - ' : ''}Placeholder` },
    {
      name: 'description',
      content: description ? description : 'Default Placeholder description',
    },
  ]
}
