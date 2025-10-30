import { Box, Button, Flex } from "@mantine/core";
import './styles/heroSection.css';
import { FaSearch } from "react-icons/fa";
import { getProduct } from "../../../server/services/productService";

function HeroSection() {
  const getProducts = async()=>{
      const data = await getProduct("PiUn6y0PWRJlwuWLguKm")
      console.log(data)
      return data;
  }
  return (
    <>
      <Box className="home_banner gap-10">
       <Box className="banner_txt gap-4">
       <h1 className="text-5xl font-extrabold">Uncover the Truth: Understanding Urban Crime Patterns</h1>
       <p className="font-extralight text-2xl">Our data-driven platform analyzes crime trends to help communities stay informed and safe</p>
       </Box>
       <Flex>
        <Button onClick={getProducts} size="xl" color="black" variant="white" rightSection={<FaSearch/>} >
            Explore
        </Button>
       </Flex>
      </Box>
    </>
  )
}

export default HeroSection
