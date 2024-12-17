type DiffResult<T> = Partial<T>

/**
 * 比较两个对象，返回修改后的字段及新值
 * @param original 原始对象
 * @param updated 修改后的对象
 * @returns 修改的字段及新值
 */
export function diffObject<T extends Record<string, any>>(
  original: T,
  updated: T,
): DiffResult<T> {
  const result: DiffResult<T> = {}

  for (const key in updated) {
    if (Object.prototype.hasOwnProperty.call(updated, key)) {
      const originalValue = original[key]
      const updatedValue = updated[key]
      // 对比值，如果不相等（包括 undefined），将字段及新值保存
      if (originalValue !== updatedValue) {
        result[key] = updatedValue
      }
    }
  }

  return result
}
