import { Flex } from "@mantine/core"
import { Outlet } from "react-router-dom"
import { AdminDashSideBar } from "../pages/dashboard/admin/components"

function AdminLayout() {
  return (
    <>
      <Flex w={'100%'}>
        <AdminDashSideBar/>
      <Outlet/>
      </Flex>
    </>
  )
}

export default AdminLayout
