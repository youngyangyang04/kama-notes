/**
 * 网络请求类型
 */
export type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'OPTIONS'
  | 'HEAD'

type RequestPath = string

export type RequestTuple = [HttpMethod, RequestPath]

/**
 * 网络请求参数
 */
export type Options = {
  headers?: Record<string, string>
  body?: FormData | Record<string, any>
  queryParams?: Record<string, any>
  pathParams?: Array<any>
}

/**
 * 网络请求客户端接口
 */
export interface HttpClient {
  request: <T>(
    requestTuple: RequestTuple,
    options?: Options,
  ) => Promise<Response<T>>
}

/**
 * API 列表格式
 */
export type ApiList = {
  [key: string]: RequestTuple
}

/**
 * 分页数据
 */
export type Pagination = {
  // 分页数据
  page: number
  pageSize: number
  total: number
}

/**
 * 响应码
 */
export enum Code { // 状态码
  SUCCESS = 200, // 请求成功返回 200
  FAIL = 400, // TODO: 错误码需要和后端一起确定
}

/**
 * 响应数据
 */
export type Response<T> = {
  code: Code
  msg: string
  data: T
  pagination?: Pagination // 分页查询时需要
  token?: string // 登录 / 认证时会返回 token
}
