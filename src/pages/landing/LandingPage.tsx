import { Box } from "@mantine/core"
import { HeroSection, InfoSection } from "./components";
import './components/styles/landingPage.css';

function LandingPage() {
  return (
    <>
      <Box className="landing_page">
        <HeroSection/>
        <InfoSection/>
      </Box>
    </>
  )
}

export default LandingPage
