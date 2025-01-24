import { Box, Button, Flex } from "@mantine/core";
import './styles/heroSection.css';
import { FaSearch } from "react-icons/fa";


function HeroSection() {
  return (
    <>
      <Box className="home_banner">
       <Box className="banner_txt">
       <h1>Uncover the Truth: Understanding Urban Crime Patterns</h1>
       <p>Our data-driven platform analyzes crime trends to help communities stay informed and safe</p>
       </Box>
       <Flex>
        <Button size="xl" color="black" variant="white" rightSection={<FaSearch/>} >
            Explore
        </Button>
       </Flex>
      </Box>
    </>
  )
}

export default HeroSection
