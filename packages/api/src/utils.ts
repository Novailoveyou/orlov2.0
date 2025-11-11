export const toCapitalCase = <Str extends string>(str: Str): Capitalize<Str> =>
  /** @ts-expect-error @TODO fox this */
  str.charAt(0).toUpperCase() + str.slice(1)
