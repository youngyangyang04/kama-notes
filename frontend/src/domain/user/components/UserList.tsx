import React, { useState } from 'react'
import { Button, Input, Pagination, Select, Table, Tag } from 'antd'
import { Admin, Banned } from '../types/types.ts'
import { UserListQueryParams } from '../types/serviceTypes.ts'
import { useUserList } from '../hooks/useUserList.ts'

const UserList: React.FC = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const [filters, setFilters] = useState<UserListQueryParams>({
    page,
    pageSize,
  })

  const { userList, pagination, loading } = useUserList(filters)

  // 表格列配置
  const columns = [
    {
      title: '用户ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: '账号',
      dataIndex: 'account',
      key: 'account',
    },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '是否管理员',
      dataIndex: 'isAdmin',
      key: 'isAdmin',
      render: (isAdmin: Admin) => (
        <Tag color={isAdmin === Admin.ADMIN ? 'green' : 'red'}>
          {isAdmin === Admin.ADMIN ? '是' : '否'}
        </Tag>
      ),
    },
    {
      title: '是否封禁',
      dataIndex: 'isBanned',
      key: 'isBanned',
      render: (isBanned: Banned) => (
        <Tag color={isBanned === Banned.BANNED ? 'red' : 'green'}>
          {isBanned === Banned.BANNED ? '已封禁' : '正常'}
        </Tag>
      ),
    },
  ]

  return (
    <div className="rounded-lg bg-white p-4">
      {/* 筛选区域 */}
      <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        <Input
          placeholder="用户ID"
          value={filters.userId}
          onChange={(e) => setFilters({ ...filters, userId: e.target.value })}
        />
        <Input
          placeholder="账号"
          value={filters.account}
          onChange={(e) => setFilters({ ...filters, account: e.target.value })}
        />
        <Input
          placeholder="用户名"
          value={filters.username}
          onChange={(e) => setFilters({ ...filters, username: e.target.value })}
        />
        <Select
          placeholder="是否管理员"
          allowClear
          onChange={(value) => setFilters({ ...filters, isAdmin: value })}
          className="w-full"
        >
          <Select.Option value={Admin.ADMIN}>是</Select.Option>
          <Select.Option value={Admin.NOT_ADMIN}>否</Select.Option>
        </Select>
        <Select
          placeholder="是否封禁"
          allowClear
          onChange={(value) => setFilters({ ...filters, isBanned: value })}
          className="w-full"
        >
          <Select.Option value={Banned.UNBANNED}>正常</Select.Option>
          <Select.Option value={Banned.BANNED}>已封禁</Select.Option>
        </Select>
      </div>
      <div className="mb-4">
        <Button
          type="primary"
          onClick={() => {
            setPage(1) // 重置分页
          }}
        >
          筛选
        </Button>
        <Button
          onClick={() => {
            setFilters({
              page: page,
              pageSize: pageSize,
            })
            setPage(1) // 重置分页
          }}
          className="ml-2"
        >
          重置
        </Button>
      </div>

      {/* 表格 */}
      <Table
        columns={columns}
        dataSource={userList}
        rowKey="userId"
        pagination={false}
        className="mb-4"
        loading={loading}
      />

      {/* 分页 */}
      <Pagination
        current={page}
        pageSize={pageSize}
        total={pagination?.total}
        onChange={(page, pageSize) => {
          setPage(page)
          setPageSize(pageSize)
          setFilters({
            ...filters,
            page: page,
            pageSize: pageSize,
          })
        }}
      />
    </div>
  )
}

export default UserList
