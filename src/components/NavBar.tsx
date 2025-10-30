import { Box, Button, Flex } from "@mantine/core";
import './styles/navBar.css';
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";

 

function NavBar() {
  const [isLogin, setIslogin] = useState<boolean>(false);
  useEffect(()=>{
    if (Cookies.get('isAdmin') === 'true') {
      setIslogin(true);
    }
  },[])
  return (
    <>
      <Box className="nav_bar">
        <Box>
            <h1 className="text-xl font-bold text-purple-700 font-mono">Criminal Records</h1>
        </Box>
        
        <Flex className="nav_menu">
            <Button variant="transparent" color="" className="hamBurger">
                <IoMenu className="text-purple-600 "/>
            </Button>
        </Flex>
        {
          isLogin && isLogin ? 
          <Flex>
            <Button variant="transparent"
              size="lg"
              color="black"
              leftSection={<MdOutlineDashboardCustomize className="text-purple-600" size={25}/>}
              component="a"
              href="/admin"
              
            >
              Dashboard
            </Button>
          </Flex>
          : 
          <Flex gap={30} className="nav_btn">
            <Button className="nav_btns bg-purple-600" color="" size="md" rightSection={<FaSearch/>}>
                Explore
            </Button>
            <Button className="nav_btns" component="a" href="auth/" size="md" variant="outline" color="">
                Get started
            </Button>
        </Flex>
        }
      </Box>
    </>
  )
}

export default NavBar
