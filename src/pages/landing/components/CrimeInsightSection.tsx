import { Box, } from "@mantine/core";
import { BarChart, LineChart, PieChart } from '@mantine/charts';
import { CrimeData, CrimeInsight, CrimeRateData } from "../../../data/chartDatas";
import './styles/criminalInsight.css';


function CrimeInsightSection() {
  return (
    <>
      <Box className="crimeInsightCon">
        <h1>Global Crime Rate</h1>
        <Box className="insightCharts">
        <Box className="crimeRate">
          <Box>
            {/* <h2>Popular crimes committed</h2> */}
            
          </Box>
         <Box className="barChartCon">
            <BarChart
          // h={200}
          className="crimeBarChart"
          data={CrimeInsight}
          dataKey="month"
          xAxisLabel="Date"
          yAxisLabel="Rates"
          series={[
            { name: 'Armed_Robbery', color: 'violet.6' },
            { name: 'Kidnapping', color: 'blue.6' },
            { name: 'Car_Hijacking', color: 'teal.6' },
          ]}
          withLegend
          barProps={{ radius: 50,
            width: 10
           }}
           maxBarWidth={20}
          tooltipAnimationDuration={200}
          styles={{
            axisLabel:{
              fontSize: '15px',
              fontWeight: 600,
            },
          }}
        />
      </Box>
        </Box>
        <Box className="crimeData">
       <Box className="crimeDataChart">
        <h3>Crimes with Mortality rate.</h3>
       <PieChart 
        data={CrimeData}
        withTooltip 
        withLabels
        size={100}
        className="crimePie"
        labelsType="percent"
        tooltipAnimationDuration={200}
        tooltipDataSource="segment"  />
       </Box>
       {/* <Divider my="md" /> */}
       <Box className="crimeDataChart">
       <h3>Months with high crime rate.</h3>
       <LineChart
      // h={100}
      className="crimeLineChart"
      data={CrimeRateData}
      series={[{ name: 'occurrence', label: 'Avg. Crime Rate' }]}
      dataKey="date"
      type="gradient"
      gradientStops={[
        { offset: 0, color: 'red.6' },
        { offset: 20, color: 'orange.6' },
        { offset: 40, color: 'yellow.5' },
        { offset: 70, color: 'lime.5' },
        { offset: 80, color: 'cyan.5' },
        { offset: 100, color: 'blue.5' },
      ]}
      strokeWidth={3}
      curveType="natural"
      yAxisProps={{ domain: [-25, 40] }}
      valueFormatter={(value) => `${value}`}
    />
       </Box>
        </Box>
        </Box>
      </Box>
    </>
  )
}

export default CrimeInsightSection
