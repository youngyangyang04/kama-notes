import { Code, HttpClient, Options, RequestTuple, Response } from './types.ts'

export default class FetchClient implements HttpClient {
  private readonly baseURL = localStorage.getItem('baseURL') ?? ''

  constructor() {}

  async request<T>(
    requestTuple: RequestTuple,
    options?: Options,
  ): Promise<Response<T>> {
    const [method, requestPath] = requestTuple

    let requestURL = `${this.baseURL}${requestPath}`

    // 默认请求头
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
    }

    // Fetch API 配置
    const fetchOptions: RequestInit = {
      method,
      headers,
    }

    /**
     * 处理 GET 请求，将参数拼接到 URL 中
     */
    if (method === 'GET' && options?.query) {
      const queryString = new URLSearchParams(options.query).toString()
      requestURL += queryString ? `?${queryString}` : ''
    }

    // 处理 GET 方法以外的其它方法
    if (method !== 'GET' && options?.body) {
      if (options.body instanceof FormData) {
        // 如果是 FormData，移除 Content-Type
        delete headers['Content-Type']
        fetchOptions.body = options.body
      } else {
        fetchOptions.body = JSON.stringify(options.body)
      }
    }

    try {
      const response = await fetch(requestURL, fetchOptions)
      const result = (await response.json()) as Response<T>

      if (result.code !== Code.SUCCESS) {
        // 事先判断
        throw new Error(result.msg)
      }

      return result
      // 包装返回的结果，符合接口定义
    } catch (error) {
      // 捕获错误并包装为统一响应格式
      console.error('error', error)
      throw new Error(error instanceof Error ? error.message : 'Unknown error')
    }
  }
}
