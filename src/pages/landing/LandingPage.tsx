import { Box } from "@mantine/core"
import { CrimeInsightSection, GlobalReach, HeroSection, InfoSection } from "./components";
import './components/styles/landingPage.css';

function LandingPage() {
  return (
    <>
      <Box className="landing_page">
        <HeroSection/>
        <InfoSection/>
        <CrimeInsightSection/>
        <GlobalReach/>
      </Box>
    </>
  )
}

export default LandingPage
