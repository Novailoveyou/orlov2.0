import axios, { CreateAxiosDefaults } from 'axios'

const DEFAULT_ERROR_MESSAGES = {
  slowNetwork: 'Slow network... Please wait',
  unknownError: 'Unknown error',
  accessDenied: 'Access denies',
  tooManyRequests: 'Too many requests',
  clientError: 'Client error',
}

const DEFAULT_AXIOS_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  baseURL: '',
  maxRedirects: 10,
  timeout: 15000,
  timeoutErrorMessage: DEFAULT_ERROR_MESSAGES.slowNetwork,
} as const satisfies CreateAxiosDefaults

type CreateFetcherProps = {
  axiosConfig: CreateAxiosDefaults
  errorMessages: typeof DEFAULT_ERROR_MESSAGES
}

export const createFetcher = (
  {
    axiosConfig: {
      headers = DEFAULT_AXIOS_CONFIG.headers,
      baseURL = DEFAULT_AXIOS_CONFIG.baseURL,
      maxRedirects = DEFAULT_AXIOS_CONFIG.maxRedirects,
      timeout = DEFAULT_AXIOS_CONFIG.timeout,
      timeoutErrorMessage = DEFAULT_AXIOS_CONFIG.timeoutErrorMessage,
      ...restAxiosConfig
    },
    errorMessages: errorMessagesProp = DEFAULT_ERROR_MESSAGES,
  }: CreateFetcherProps = {
    axiosConfig: DEFAULT_AXIOS_CONFIG,
    errorMessages: DEFAULT_ERROR_MESSAGES,
  },
) => {
  const errorMessages = { ...DEFAULT_ERROR_MESSAGES, ...errorMessagesProp }

  const handleAPIError = (error: unknown) => {
    const newError =
      error instanceof Error
        ? error
        : typeof error === 'string'
          ? new Error(error)
          : new Error(errorMessages.unknownError)

    throw newError
  }

  const api = axios.create({
    headers: {
      ...DEFAULT_AXIOS_CONFIG.headers,
      ...headers,
    },
    baseURL,
    maxRedirects,
    timeout,
    timeoutErrorMessage,
    ...restAxiosConfig,
  })

  // api.interceptors.request.use((value) => {
  //   return value.
  // }, () => {})

  api.interceptors.response.use(response => {
    switch (response.status) {
      case 400:
        return handleAPIError(new Error(errorMessages.clientError))
      case 401:
        return handleAPIError(new Error(errorMessages.accessDenied))
      case 429:
        return handleAPIError(new Error(errorMessages.tooManyRequests))
      default:
        return response
    }
  }, handleAPIError)

  const get = async <Data>(...props: Parameters<typeof api.get<Data>>) =>
    (await api.get<Data>(...props).catch(handleAPIError)).data

  const post = async <Data>(...props: Parameters<typeof api.post<Data>>) =>
    (await api.post<Data>(...props).catch(handleAPIError)).data

  const patch = async <Data>(...props: Parameters<typeof api.patch<Data>>) =>
    (await api.patch<Data>(...props).catch(handleAPIError)).data

  const put = async <Data>(...props: Parameters<typeof api.put<Data>>) =>
    (await api.put<Data>(...props).catch(handleAPIError)).data

  const httpDelete = async <Data>(
    ...props: Parameters<typeof api.delete<Data>>
  ) => (await api.delete<Data>(...props).catch(handleAPIError)).data

  const head = async <Data>(...props: Parameters<typeof api.head<Data>>) =>
    (await api.head<Data>(...props).catch(handleAPIError)).data

  const options = async <Data>(
    ...props: Parameters<typeof api.options<Data>>
  ) => (await api.options<Data>(...props).catch(handleAPIError)).data

  const fetcher = {
    get,
    post,
    patch,
    put,
    delete: httpDelete,
    head,
    options,
  } as const

  const mutationGet = async <Response, Key extends string = string>(key: Key) =>
    await get<Response>(key)

  const mutationPost = async <Response, Body, Key extends string = string>(
    key: Key,
    { arg }: { arg: Body },
  ) => await post<Response>(key, arg)

  const mutationPatch = async <Response, Body, Key extends string = string>(
    key: Key,
    { arg }: { arg: Body },
  ) => await patch<Response>(key, arg)

  const mutationPut = async <Response, Body, Key extends string = string>(
    key: Key,
    { arg }: { arg: Body },
  ) => await put<Response>(key, arg)

  const mutationDelete = async <Response, Key extends string = string>(
    key: Key,
  ) => await httpDelete<Response>(key)

  const mutationHead = async <Response, Key extends string = string>(
    key: Key,
  ) => await head<Response>(key)

  const mutationOptions = async <Response, Key extends string = string>(
    key: Key,
  ) => await options<Response>(key)

  const mutation = {
    mutationGet,
    mutationPost,
    mutationPatch,
    mutationPut,
    mutationDelete,
    mutationHead,
    mutationOptions,
  } as const

  return { fetcher, mutation, handleAPIError } as const
}
