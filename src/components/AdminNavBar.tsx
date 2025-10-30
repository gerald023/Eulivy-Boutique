import { Avatar, Box, Button, Menu, Tooltip } from "@mantine/core";
import './styles/adminNavBar.css';
import { MdOutlineMenu, MdOutlineLightMode, MdBrightness2, MdMarkAsUnread, MdNotificationsActive, MdOutlineSettings  } from "react-icons/md";
import { FaSearch, FaRegUser  } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import profile from '../assets/images/avatar.webp';
import { ImSwitch } from "react-icons/im";



function AdminNavBar() {
    return (
        <>
            <Box className="adminNavBar">
                <Box className="menuSearch">
                    <Box className="menuCon">
                        <Button
                            variant="transparent"
                            color="gray"
                            size="lg"
                        >
                            <MdOutlineMenu />
                        </Button>
                    </Box>
                    <Box className="searchCon">
                        <Button
                            leftSection={<FaSearch />}
                            variant="transparent"
                            color="gray"
                            size="lg"
                        >
                            Search...
                        </Button>
                    </Box>
                </Box>
                <Box className="navListAndProfile">
                    <Box className="navItemCon">
                    <Menu width={150} shadow="md">
                        <Menu.Target>
                            <Button
                                variant="transparent"
                                size="lg"
                                color="gray"
                            >
                                <MdOutlineLightMode className="navIcon" />
                            </Button>
                        </Menu.Target>
                        <Menu.Dropdown className="menuDropDown">
                            <Menu.Item className='adminMenuItemBtn' leftSection={<MdOutlineLightMode />}>
                                Light
                            </Menu.Item>
                            <Menu.Item className='adminMenuItemBtn' leftSection={<MdBrightness2 />}>
                                Dark
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                    </Box>
                    <Box className="navItemCon">
                    <Menu width={150} shadow="md">
                        <Menu.Target>
                            <Tooltip label='Messages' withArrow>
                                <Button
                                    variant="transparent"
                                    size="lg"
                                    color="gray"
                                >
                                    <MdMarkAsUnread className="navIcon" />
                                </Button>
                            </Tooltip>
                        </Menu.Target>
                        <Menu.Dropdown className="menuDropDown">
                            <Menu.Item className='adminMenuItemBtn' leftSection={<MdOutlineLightMode />}>
                                Light
                            </Menu.Item>
                            <Menu.Item className='adminMenuItemBtn' leftSection={<MdBrightness2 />}>
                                Dark
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                    </Box>
                    <Box className="navItemCon">
                    <Menu width={150} shadow="md">
                        <Menu.Target>
                            <Button
                                variant="transparent"
                                size="lg"
                                color="gray"
                            >
                                <MdNotificationsActive className="navIcon" />
                            </Button>
                        </Menu.Target>
                        <Menu.Dropdown className="menuDropDown">
                            <Menu.Item leftSection={<MdOutlineLightMode />}>
                                Light
                            </Menu.Item>
                            <Menu.Item leftSection={<MdBrightness2 />}>
                                Dark
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                    </Box>
                    <Menu width={200} shadow="md">
                        <Menu.Target>
                            <Button
                                variant="transparent"
                                size="lg"
                                color="gray"
                            >
                                <Avatar
                                    className="navIcon"
                                    src={profile}
                                    name="Admin User"
                                />
                            </Button>
                        </Menu.Target>
                        <Menu.Dropdown className="menuDropDown">
                            <Menu.Item
                                className='profileBtn'
                                component="a"
                                href="/admin/crime"
                                leftSection={<FaRegUser  className="navIcon" />}
                            >
                                Profile
                            </Menu.Item>
                            <Menu.Item
                                className='profileBtn'
                                component="a"
                                href="/admin/crime"
                                leftSection={<MdOutlineSettings className="navIcon" />}>
                                Setting
                            </Menu.Item>
                            <Menu.Item
                                className='profileBtn'
                                component="a"
                                href="/admin/crime"
                                leftSection={<HiOutlinePhone className="navIcon" />}>
                                Support
                            </Menu.Item>
                            <Menu.Item
                                className='profileBtn'
                                component="a"
                                href="/admin/crime"
                                leftSection={<ImSwitch className="navIcon" />}>
                                Log Out
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Box>
            </Box>
        </>
    )
}

export default AdminNavBar
