import { Box, } from "@mantine/core";
import { BarChart, PieChart, Sparkline } from '@mantine/charts';
import { CrimeData, CrimeInsight } from "../../../data/chartDatas";
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
          // h={'100%'}
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
          withBarValueLabel
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
       <PieChart data={CrimeData}
        withTooltip 
        withLabels
        className="crimePie"
        // withLabelsLine
        labelsType="percent"
        // w={'100%'}
        h={'80%'}
        tooltipAnimationDuration={200}
        tooltipDataSource="segment"  />
       </Box>
       {/* <Divider my="md" /> */}
       <Box className="crimeDataChart">
       <h3>Months with high crime rate.</h3>
        <Sparkline
        // w={'60%'}
        h={'100%'}
        className="sparkChart"
        data={[1,1, 6,20,4,12,6]}
        
        trendColors={{ positive: 'red', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
        />
       </Box>
        </Box>
        </Box>
      </Box>
    </>
  )
}

export default CrimeInsightSection
