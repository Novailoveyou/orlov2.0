// import { capitalCase } from 'change-case'

// TODO: make sure this works as expected and fast
export const toCapitalCase = <Str extends string>(str: Str) =>
  (String(str).charAt(0).toUpperCase() +
    String(str).slice(1)) as Capitalize<Str>

export const makeHelpingVerb = <Data>(data: Data) =>
  Array.isArray(data) ? 'are' : 'is'

// const test = <T, Key extends PropertyKey>(
//   key: Key,
// ): { [_Key in Key]: { [__Key in _Key]: true } }[Key] => ({ [key]: true }) as any

// function kv<T, K extends PropertyKey, V>(
//   k: K,
//   v: V,
// ): { [P in K]: { [Q in P]: V } }[K] {
//   return { [k]: v } as any
// }

// const hello = kv('a', 1)

// const hello1 = test('products')
