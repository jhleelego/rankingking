import { generateHmac } from '@/util/hmacGenerator'
import ResErrorMessage from '../_data/ResErrorMessage'

export class FetchInterceptors {
  private static defaultUrl = process.env.NEXT_PUBLIC_CP_BASE_URL
  public static defaultCredentials: RequestInit = {
    credentials: 'include',
    // ...(process.env.NODE_ENV == 'development' ? { credentials: 'include' } : {})
  }
  public static defaultRequestInit: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
    },
    ...this.defaultCredentials,
  }

  private static requestInterceptors: ((config: RequestInit) => Promise<RequestInit>)[] = []
  private static responseInterceptors: ((response: Response) => Promise<Response>)[] = []
  private static errorInterceptors: ((response: ResErrorMessage) => Promise<ResErrorMessage>)[] = []

  public static addRequestInterceptor(interceptor: (config: RequestInit) => Promise<RequestInit>): void {
    this.requestInterceptors.push(interceptor)
  }

  public static addResponseInterceptor(interceptor: (response: Response) => Promise<Response>): void {
    this.responseInterceptors.push(interceptor)
  }

  public static addErrorInterceptor(interceptor: (error: ResErrorMessage) => Promise<ResErrorMessage>): void {
    this.errorInterceptors.push(interceptor)
  }

  public static removeRequestInterceptor(interceptor: (config: RequestInit) => Promise<RequestInit>): void {
    const index = this.requestInterceptors.indexOf(interceptor)
    if (index != -1) this.requestInterceptors.splice(index, 1)
  }

  public static removeResponseInterceptor(interceptor: (response: Response) => Promise<Response>): void {
    const index = this.responseInterceptors.indexOf(interceptor)
    if (index != -1) this.responseInterceptors.splice(index, 1)
  }

  public static removeErrorInterceptor(interceptor: (error: ResErrorMessage) => Promise<ResErrorMessage>): void {
    const index = this.errorInterceptors.indexOf(interceptor)
    if (index != -1) this.errorInterceptors.splice(index, 1)
  }

  // public static async fetch<T>(url: string, config?: RequestInit): Promise<ResSuccessMessage<T> | Response> {
  public static async fetch<T>(url: string, config?: RequestInit): Promise<any | Response> {
    let jsonResponse
    let response
    try {
      const targetUrl = `${this.defaultUrl}${url}`
      // const finalConfig = await this.requestInterceptors.reduce(async (acc, reqInterceptor) => reqInterceptor(await acc), Promise.resolve(config ?? {}))
      // console.log(`@req : ${decodeURIComponent(targetUrl)}\n@config : `, finalConfig)
      let finalConfig = {
        ...config,
        headers: {
          ...config?.headers,
          Authorization: generateHmac(config?.method!, url, process.env.NEXT_PUBLIC_CP_SECRET_KEY!, process.env.NEXT_PUBLIC_CP_ACCESS_KEY!),
        },
      }
      console.log('url : ', url)
      console.log('finalConfig : ', finalConfig)
      response = await fetch(targetUrl, finalConfig)
      // console.log('response.status : ', response.status)
      // alert(`'response : ${JSON.stringify(response)}`)
    } catch (error) {
      // const errorResponse = { message: error } as ResErrorMessage
      // await this.errorInterceptors.reduce(async (acc, errorInterceptor) => errorInterceptor(errorResponse), Promise.resolve(errorResponse))
      throw error
    }

    if (response.ok && response.status >= 200 && response.status <= 300) {
      try {
        // jsonResponse = await response.json()
        // jsonResponse.status = response.status
        // return await this.responseInterceptors.reduce(async (acc_1, resInterceptor) => resInterceptor(await acc_1), Promise.resolve(jsonResponse))
        return response
      } catch (error) {
        // return await this.responseInterceptors.reduce(async (acc_1, resInterceptor) => resInterceptor(await acc_1), Promise.resolve(response))
        return response
      }
    } else {
      // jsonResponse = await response.json()
      // jsonResponse.status = response.status
      // const errorResponse = { status: response.status, ...jsonResponse } as ResErrorMessage
      // await this.errorInterceptors.reduce(async (acc, errorInterceptor) => errorInterceptor(errorResponse), Promise.resolve(errorResponse))
      throw response
    }
  }
}

// FetchInterceptors.addRequestInterceptor(async (config) => {
//   // Modify request config (e.g., add headers)
//   return config
// })

// FetchInterceptors.addResponseInterceptor(async (response) => {
//   // Modify response (e.g., handle errors)
//   return response
// })
