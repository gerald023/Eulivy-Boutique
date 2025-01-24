import { Box, Button, Flex } from "@mantine/core";
import './styles/navBar.css';
import { FaSearch } from "react-icons/fa";



function NavBar() {
  return (
    <>
      <Box className="nav_bar">
        <Box>
            <h1>Criminal Records</h1>
        </Box>
        <Flex gap={30}>
            <Button color="black" size="lg" rightSection={<FaSearch/>}>
                Explore
            </Button>
            <Button size="lg" variant="outline" color="black">
                Get started
            </Button>
        </Flex>
      </Box>
    </>
  )
}

export default NavBar
