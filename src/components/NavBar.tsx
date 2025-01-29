import { Box, Button, Flex } from "@mantine/core";
import './styles/navBar.css';
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";



function NavBar() {
  return (
    <>
      <Box className="nav_bar">
        <Box>
            <h1>Criminal Records</h1>
        </Box>
        <Flex gap={30} className="nav_btn">
            <Button className="nav_btns" color="" size="lg" rightSection={<FaSearch/>}>
                Explore
            </Button>
            <Button className="nav_btns" component="a" href="auth/" size="lg" variant="outline" color="">
                Get started
            </Button>
        </Flex>
        <Flex className="nav_menu">
            <Button variant="transparent" color="" className="hamBurger">
                <IoMenu/>
            </Button>
        </Flex>
      </Box>
    </>
  )
}

export default NavBar
