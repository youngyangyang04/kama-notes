import {
  HttpMethod,
  RequestTuple,
  Code,
  Options,
  Response,
  Pagination,
  ApiList,
} from './types'
import FetchClient from './fetchClient.ts'

/**
 * 导出 HTTP 请求相关的类型定义
 */
export type {
  HttpMethod,
  Code,
  RequestTuple,
  Options,
  Response,
  Pagination,
  ApiList,
}

/**
 * 导出 HTTP 请求的客户端
 */
const httpClient = new FetchClient()
export { httpClient }
