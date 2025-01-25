import { Box } from "@mantine/core"
import { CrimeInsightSection, HeroSection, InfoSection } from "./components";
import './components/styles/landingPage.css';

function LandingPage() {
  return (
    <>
      <Box className="landing_page">
        <HeroSection/>
        <InfoSection/>
        <CrimeInsightSection/>
      </Box>
    </>
  )
}

export default LandingPage
