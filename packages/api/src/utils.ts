export const getEntity = <Key extends string>(key: Key) => {
  const chunks = key.split('/').map(toCapitalCase)

  return chunks.join('')
}

export const toCapitalCase = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)
