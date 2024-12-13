/**
 * 数字、字母、下划线
 */
export const ALPHANUMERIC_UNDERSCORE = /^[a-zA-Z0-9_]+$/

/**
 * 数字、字母、下划线、中文
 */
export const ALPHANUMERIC_UNDERSCORE_CHINESE = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/

/**
 * 密码
 */
export const PASSWORD_ALLOWABLE_CHARACTERS =
  /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]+$/
