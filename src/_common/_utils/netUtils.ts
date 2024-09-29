import { ReadonlyURLSearchParams } from 'next/navigation'
import { URLSearchParams } from 'url'
import { ParseDataProps } from '../useRouter'

export const getUrlWithQueryString = (url: string, obj: any): string => {
  if (!url) return ''
  return `${url}${objectToQueryString(obj)}`
}
export const getUrlWithPathVariable = (url: string, obj: any): string => {
  if (!url) return ''
  return `${url}${objectToPathVariable(obj)}`
}

export const objectToQueryString = (obj: any): string => {
  if (!obj) return ''
  return `?${Object.keys(obj)
    .filter((key) => obj[key] != undefined && obj[key] != null && obj[key] != '')
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&')}`
}

export const objectToAndQueryString = (obj: any): string => {
  if (!obj) return ''
  return `&${Object.keys(obj)
    .filter((key) => obj[key] != undefined && obj[key] != null && obj[key] != '')
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&')}`
}

export const objectToPathVariable = (obj: any): string => {
  if (!obj) return ''
  return `/${Object.keys(obj)
    .map((key) => `${encodeURIComponent(obj[key])}`)
    .join('/')}`
}

export const arrayToPathVariable = (arr: any): string => {
  if (!arr) return ''
  return `/${arr.map((e: any) => `${encodeURIComponent(e)}`).join('/')}`
}

export const createRedirectQueryStringWithURLSearchParam = (redirectUrl: string, searchParams: ReadonlyURLSearchParams) => {
  const searchParamsObject: Record<string, string | undefined> = {}
  searchParamsObject.redirectUrl = redirectUrl
  searchParams.forEach((value, key) => (searchParamsObject[key] = value))
  return objectToQueryString(searchParamsObject)
}

export const createRedirectQueryStringWithURLObj = (redirectUrl: string, obj: any) => {
  obj.redirectUrl = redirectUrl
  return objectToQueryString(obj)
}

export const createRedirectQueryStringWithString = (redirectUrl: string, params: string) => {
  const str = `redirectUrl=${redirectUrl}`
  return `?${params ? `${params}&` : ''}${str}`
}

export const parseUrl = (params: URLSearchParams) => {
  const redirectUrl = params.get('redirectUrl') || ''
  if (!redirectUrl) return '/'
  const obj: Record<string, any> = Object.fromEntries(params.entries())
  const filteredObj: Record<string, any> = {}

  Object.entries(obj).forEach(([k, v]) => {
    if (v != undefined && k != 'redirectUrl') filteredObj[k] = v.toString()
  })

  return getUrlWithQueryString(redirectUrl, filteredObj)
}

export const parseHref = (href: string): ParseDataProps => {
  const splited = href.split('?')
  if (splited.length < 1) return { goToPathname: href, params: '' }
  return { goToPathname: splited[0], params: splited[1] ?? '' }
}

export const checkStartsWithUrls = (lst: any, targetUrl: string) => {
  let isRequireUrl = false
  lst?.forEach((e: any) => {
    if (!isRequireUrl && targetUrl.startsWith(e)) {
      isRequireUrl = true
      return
    }
  })

  return isRequireUrl
}

export const checkUrls = (lst: any, targetUrl: string) => {
  let isRequireUrl = false
  lst?.forEach((e: any) => {
    if (!isRequireUrl && targetUrl == e) {
      isRequireUrl = true
      return
    }
  })

  return isRequireUrl
}
