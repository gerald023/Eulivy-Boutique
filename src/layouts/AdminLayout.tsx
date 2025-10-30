import { Box, Flex } from "@mantine/core"
import { Outlet } from "react-router-dom"
import { AdminDashSideBar } from "../pages/dashboard/admin/components"
import './styles/adminLayout.css';
import { AdminNavBar } from "../components";


function AdminLayout() {
  return (
    <>
      <Flex className="adminLayout">
        <Box className="adminSideBarCon">
        <AdminDashSideBar/>
        </Box>
        <Box className="navOutlet">
          <AdminNavBar/>
        <Outlet/>
        </Box>
      
      </Flex>
    </>
  )
}

export default AdminLayout
