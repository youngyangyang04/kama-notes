import { useEffect, useState } from 'react'
import { UserEntity } from '../types/types.ts'
import { defaultPagination, Pagination } from '../../../request'
import { UserListQueryParams } from '../types/serviceTypes.ts'
import { adminUserService } from '../service/userService.ts'

export function useUserList(query: UserListQueryParams) {
  /**
   * 加载数据中的标记
   */
  const [loading, setLoading] = useState(false)

  /**
   * 用户列表
   */
  const [userList, setUserList] = useState<UserEntity[]>([])

  /**
   * 分页信息
   */
  const [pagination, setPagination] = useState<Pagination | undefined>(
    defaultPagination,
  )

  async function fetchUserList() {
    setLoading(true)
    const { data, pagination } =
      await adminUserService.getUserListService(query)
    setUserList(data)
    setPagination(pagination)
    setLoading(false)
  }

  useEffect(() => {
    async function fetchData() {
      await fetchUserList()
    }

    fetchData().then()
  }, [
    query.userId,
    query.username,
    query.account,
    query.isAdmin,
    query.isBanned,
    query.page,
    query.pageSize,
  ])

  return {
    loading,
    userList,
    pagination,
  }
}
