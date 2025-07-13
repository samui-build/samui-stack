export function appMeta(title?: string, description?: string) {
  return [
    { title: `${title ? title + ' | ' : ''}Scaffold` },
    {
      name: 'description',
      content: description ? description : 'Default Scaffold description',
    },
  ]
}
