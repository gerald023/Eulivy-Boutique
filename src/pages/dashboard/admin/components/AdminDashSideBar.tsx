import { Box, List } from "@mantine/core";
import '../styles/adminSidebar.css';
import { Accordion } from '@mantine/core';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { LiaUsersSolid } from "react-icons/lia";
import { FaChartLine, FaCity  } from "react-icons/fa";
import { NavLink } from "react-router-dom";




function AdminDashSideBar() {
  return (
    <>
        <Box className="adminSideBar">
            <Box className="sidebarCon">
                <Box className="dashboard">
                    <Accordion defaultValue={'dashboard'} variant="contained">
                        <Accordion.Item value="dashboard">
                            <Accordion.Control 
                               icon={<MdOutlineDashboardCustomize className="sidebarAccordIcon"/>}
                            >
                                <p>Dashboard</p>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <List className="dashAccordionList">
                                    <NavLink
                                        to={'.'}
                                        end
                                        className={({isActive})=>
                                            `dashAccordListItem
                                        ${
                                            isActive
                                            ? "activeBar"
                                            : "dashAccordListItem"
                                        }`
                                        }
                                        active-nav="true"
                                    >
                                        <LiaUsersSolid className="dashNavIcon" />
                                        User Analytics
                                    </NavLink>
                                    <NavLink
                                        to={'crime'}
                                        className={({isActive})=>
                                            `dashAccordListItem
                                        ${
                                            isActive
                                            ? "activeBar"
                                            : "dashAccordListItem"
                                        }`
                                        }
                                    >
                                        <FaChartLine className="dashNavIcon"/>
                                        Crimes Analytics
                                    </NavLink>
                                    <NavLink
                                    to={'city'}
                                        className={({isActive})=>
                                            `dashAccordListItem
                                        ${
                                            isActive
                                            ? "activeBar"
                                            : "dashAccordListItem"
                                        }`
                                        }
                                    >
                                        <FaCity className="dashNavIcon"/>
                                        City Analytics
                                    </NavLink>
                                </List>
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                </Box>
            </Box>
        </Box> 
    </>
  )
}

export default AdminDashSideBar
