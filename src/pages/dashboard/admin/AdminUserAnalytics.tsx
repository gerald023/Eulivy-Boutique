import { Box, Flex, Table, Tabs } from "@mantine/core";
import './styles/adminUserAnalytics.css';
import { DatePickerInput } from '@mantine/dates';
import { FaRegCalendar  } from "react-icons/fa";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { ActiveUsers, AllUsers, NewUsers } from "../../../data/chartDatas";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Chart } from "react-google-charts";



function AdminUserAnalytics() {
  const data = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
  ];
  const geoChartOptions = {
    version: "45",
    colorAxis: { colors: ["#e0f7fa", "#00796b"] }, // Light to dark green
    backgroundColor: "#f8f9fa",
    datalessRegionColor: "#eeeeee",
    defaultColor: "#f5f5f5",
  };
  
  return (
    <>
      <Box className="adminUserAnalytics flex flex-col gap-10 w-full">
        <Box className="analyticDash w-full justify-between flex h-full">
          <Box className="reports dashContainer flex flex-col gap-5">
            <Box className="heading w-full flex justify-between items-start p-0">
              <Box className="txt flex flex-col">
                <h3>Users Snapshot</h3>
                <p>Demographic properties of your customer</p>
              </Box>
              <Box className="date">
                <DatePickerInput
                  type="range"
                  className="dateInput"
                  placeholder="Pick a date"
                  leftSection={<FaRegCalendar />}
                />
              </Box>
            </Box>
            <Tabs className="" defaultValue={'allUsers'}>
              <Tabs.List>
                <Tabs.Tab color="#228be6"  value="allUsers">
                  <Box className="tabSelector flex flex-col relative overflow-hidden rounded-r-lg gap-4 p-5" bg={'#D9D2FD'} component="a" >
                    <p>All Users</p>
                    <p>15,240,403</p>
                  </Box>
                </Tabs.Tab>
                <Tabs.Tab color="#228be6"  value="activeUsers">
                  <Box className="tabSelector flex flex-col relative overflow-hidden rounded-r-lg gap-4 p-5 activeUsers" bg={'#FFF7ED'} component="a" >
                    <p>Active Users</p>
                    <p>8,240, 600</p>
                  </Box>
                </Tabs.Tab>
                <Tabs.Tab color="#228be6"  value="newUsers">
                  <Box className="tabSelector flex flex-col relative overflow-hidden rounded-r-lg gap-4 p-5 newUser" bg={'#ECFEFF'} component="a" >
                    <p>New Users</p>
                    <p>10,240</p>
                  </Box>
                </Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="allUsers">
                <Box className="allUsers">
                <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={AllUsers}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="users" stroke="#846eee" strokeWidth={'3px'} fill="#cdc4fb" />
        </AreaChart>
      </ResponsiveContainer>
                </Box>
              </Tabs.Panel>
              <Tabs.Panel value="activeUsers">
                <Box className="allUsers">
                <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={ActiveUsers}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="users" stroke="#f37519" strokeWidth={'3px'} fill="#fec8a2" />
        </AreaChart>
      </ResponsiveContainer>
                </Box>
              </Tabs.Panel>
              <Tabs.Panel value="newUsers">
                <Box className="allUsers">
                <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={NewUsers}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="users" stroke="#29c061" strokeWidth={'3px'} fill="#a7e8be" />
        </AreaChart>
      </ResponsiveContainer>
                </Box>
              </Tabs.Panel>
            </Tabs>
          </Box>
          <Box className="topCountry dashContainer gap-5 flex flex-col">
            <Flex className="heading  w-full justify-between items-center flex">
              <Box className="flex flex-col gap-2">
                  <h1 className="text-3xl font-bold">Users</h1>
                  <p className="text-gray-500 text-sm font-semibold">In the last 30 Minutes</p>
              </Box>
              <Box className="flex items-center gap-1">
                <p className="text-5xl font-bold text-purple-600">63</p>
              <FaArrowTrendUp className="text-2xl text-green-500"/>
              </Box>
            </Flex>
            <Box className="w-full h-60 ">
               <ResponsiveContainer width="100%" height="100%">
        <BarChart  data={NewUsers}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
          <Bar dataKey="users" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
            </Box>
            <Box>
              <Table className="rounded-xl" highlightOnHover withTableBorder>
                <Table.Tr className="text-lg font-semibold">
                  <Table.Th>Top Countries</Table.Th>
                  <Table.Th>Users</Table.Th>
                </Table.Tr>
                  <Table.Tbody className="text-gray-500 font-semibold">
                    <Table.Tr>
                      <Table.Td>
                      Bangladesh
                      </Table.Td>
                      <Table.Td>
                      2000
                      </Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>
                      America
                      </Table.Td>
                      <Table.Td>
                      15,000,304
                      </Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>
                      Nigeria
                      </Table.Td>
                      <Table.Td>
                      3,290,120
                      </Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>
                      Canada
                      </Table.Td>
                      <Table.Td>
                      602,354
                      </Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>
                      India
                      </Table.Td>
                      <Table.Td>
                      2,124,074
                      </Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
              </Table>
            </Box>
          </Box>
        </Box>
        <Box className="userByCountry w-full bg-white rounded-2xl p-5 flex flex-col">
          <Box className="w-full flex justify-between">
            <h1 className="font-bold text-2xl">
              User by Country
            </h1>
            <DatePickerInput
                  type="range"
                  className="dateInput"
                  placeholder="Pick a date"
                  leftSection={<FaRegCalendar />}
                />
          </Box>
          <Box className="w-full flex">
          {/* <Chart
      chartType="GeoChart"
      width="100%"
      height="500px"
      data={data}
      options={geoChartOptions}
    /> */}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default AdminUserAnalytics
