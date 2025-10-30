import { Box, List } from "@mantine/core";
import '../styles/adminSidebar.css';
import { Accordion } from '@mantine/core';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { LiaUsersSolid } from "react-icons/lia";
import { FaChartLine, FaCity } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GiClothes } from "react-icons/gi";
import { IoBagAdd } from "react-icons/io5";






function AdminDashSideBar() {
    return (
        <>
            <Box className="adminSideBar">
                <Box className="sidebarCon gap-3">
                    <Box className="dashboard">
                        <Accordion defaultValue={'dashboard'} variant="contained">
                            <Accordion.Item value="dashboard">
                                <Accordion.Control
                                    icon={<MdOutlineDashboardCustomize className="sidebarAccordIcon" />}
                                >
                                    <p>Dashboard</p>
                                </Accordion.Control>
                                <Accordion.Panel>
                                    <List className="dashAccordionList">
                                        <NavLink
                                            to={'.'}
                                            end
                                            className={({ isActive }) =>
                                                `dashAccordListItem
                                        ${isActive
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
                                            className={({ isActive }) =>
                                                `dashAccordListItem
                                        ${isActive
                                                    ? "activeBar"
                                                    : "dashAccordListItem"
                                                }`
                                            }
                                        >
                                            <FaChartLine className="dashNavIcon" />
                                            Crimes Analytics
                                        </NavLink>
                                        <NavLink
                                            to={'city'}
                                            className={({ isActive }) =>
                                                `dashAccordListItem
                                        ${isActive
                                                    ? "activeBar"
                                                    : "dashAccordListItem"
                                                }`
                                            }
                                        >
                                            <FaCity className="dashNavIcon" />
                                            City Analytics
                                        </NavLink>
                                    </List>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Box>

                    <Box className="dashboard">
                        <Accordion defaultValue={'dashboard'} variant="contained">
                            <Accordion.Item value="dashboard">
                                <Accordion.Control
                                    icon={<MdOutlineDashboardCustomize className="sidebarAccordIcon" />}
                                >
                                    <p>Products</p>
                                </Accordion.Control>
                                <Accordion.Panel>
                                    <List className="dashAccordionList">
                                        <NavLink
                                            to={'all-products'}
                                            end
                                            className={({ isActive }) =>
                                                `dashAccordListItem
                                        ${isActive
                                                    ? "activeBar"
                                                    : "dashAccordListItem"
                                                }`
                                            }
                                            active-nav="true"
                                        >
                                            <GiClothes className="dashNavIcon" />
                                            All Products
                                        </NavLink>
                                        <NavLink
                                            to={'add-product'}
                                            className={({ isActive }) =>
                                                `dashAccordListItem
                                        ${isActive
                                                    ? "activeBar"
                                                    : "dashAccordListItem"
                                                }`
                                            }
                                        >
                                            <IoBagAdd className="dashNavIcon" />
                                            Add Product
                                        </NavLink>
                                        <NavLink
                                            to={'city'}
                                            className={({ isActive }) =>
                                                `dashAccordListItem
                                        ${isActive
                                                    ? "activeBar"
                                                    : "dashAccordListItem"
                                                }`
                                            }
                                        >
                                            <FaCity className="dashNavIcon" />
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
