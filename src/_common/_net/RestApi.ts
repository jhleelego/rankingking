import ResSuccessMessage from '../_data/ResSuccessMessage'
import { objectToPathVariable, objectToQueryString } from '../_utils/netUtils'
import { FetchInterceptors } from './FetchInterceptors'

export async function getQueryParameterFetchData<T, V>(url: string, obj?: V): Promise<ResSuccessMessage<T>> {
  return (await FetchInterceptors.fetch<T>(`${url}${objectToQueryString(obj)}`, {
    method: 'GET',
    ...FetchInterceptors.defaultRequestInit,
  })) as ResSuccessMessage<T>
}

export async function getPathvariableFetchData<T, V>(url: string, obj?: V): Promise<ResSuccessMessage<T>> {
  return (await FetchInterceptors.fetch<T>(`${url}${objectToPathVariable(obj)}`, {
    method: 'GET',
    ...FetchInterceptors.defaultRequestInit,
  })) as ResSuccessMessage<T>
}

export async function getFetchData<T, V>(url: string): Promise<ResSuccessMessage<T>> {
  return (await FetchInterceptors.fetch<T>(url, { method: 'GET', ...FetchInterceptors.defaultRequestInit })) as ResSuccessMessage<T>
}

export async function postFormData<T>(url: string, formData?: FormData): Promise<ResSuccessMessage<T>> {
  return (await FetchInterceptors.fetch<T>(`${url}`, {
    method: 'POST',
    ...FetchInterceptors.defaultCredentials,
    body: formData,
  })) as ResSuccessMessage<T>
}

export async function postFetchData<T, V>(url: string, obj?: V): Promise<ResSuccessMessage<T>> {
  return (await FetchInterceptors.fetch<T>(`${url}`, {
    method: 'POST',
    ...FetchInterceptors.defaultRequestInit,
    body: JSON.stringify(obj ?? {}),
  })) as ResSuccessMessage<T>
}

export async function patchFetchData<T, V>(url: string, obj?: V): Promise<ResSuccessMessage<T>> {
  return (await FetchInterceptors.fetch<T>(`${url}`, {
    method: 'PATCH',
    ...FetchInterceptors.defaultRequestInit,
    body: JSON.stringify(obj ?? {}),
  })) as ResSuccessMessage<T>
}

export async function putFetchData<T, V>(url: string, obj?: V): Promise<ResSuccessMessage<T>> {
  return (await FetchInterceptors.fetch<T>(`${url}`, {
    method: 'PUT',
    ...FetchInterceptors.defaultRequestInit,
    body: JSON.stringify(obj ?? {}),
  })) as ResSuccessMessage<T>
}

export async function deleteFetchData<T, V>(url: string, obj?: V): Promise<ResSuccessMessage<T>> {
  return (await FetchInterceptors.fetch<T>(`${url}`, {
    method: 'DELETE',
    ...FetchInterceptors.defaultRequestInit,
    body: JSON.stringify(obj ?? {}),
  })) as ResSuccessMessage<T>
}
