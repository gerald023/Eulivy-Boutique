import { Outlet } from "react-router-dom"
import { NavBar } from "../components"
import { Box } from "@mantine/core"

function LandingLayout() {
  return (
    <>
    <Box className="home_layout">
        <NavBar/>
      <Outlet/>
      </Box>
    </>
  )
}

export default LandingLayout
