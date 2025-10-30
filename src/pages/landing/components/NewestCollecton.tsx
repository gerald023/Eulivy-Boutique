import { Box, Button, Container, Indicator } from "@mantine/core";
import './styles/criminalInsight.css';
import { FaArrowRight } from "react-icons/fa";
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";
import Autoplay from 'embla-carousel-autoplay';

import { EmblaCarouselType } from "embla-carousel-react";
import { useRef, useState } from "react";
import { NewCollectionBox } from "../../../components";
import { newCollectionData, newWeekProducts } from "../../../data/products/product_datas";
import ProductCard from "../../../components/products/ProductCard";


function NewestCollection() {
  const autoplay = useRef(Autoplay({ delay: 100 })) as any;;
   const [emblaCollection, setEmblaCollection] = useState<EmblaCarouselType | null>(null);

  const handleNext = () => emblaCollection?.scrollNext();
  const handlePrev = () => emblaCollection?.scrollPrev();

  const [emblaNewProduct, setEmblaNewProduct] = useState<EmblaCarouselType | null>(null);

  const handleNextNewProduct = () => emblaNewProduct?.scrollNext();
  const handlePrevNewProduct = () => emblaNewProduct?.scrollPrev();
  return (
    <>
      <Box className="newCollectionCon w-full h-80 flex justify-between">
        <Box className="flex flex-col  justify-between rounded-md p-3 w-1/4 h-full shadow-inner ">
          <Box className="heading flex flex-col">
          <h1 className="font-bold text-4xl text-black ">New Collection</h1>
          <p className="text-gray-500 font-bold">2025</p>
        </Box>
        <Box  className="newCollectionCtrl  flex justify-between ">
          <Box className="flex w-2/3 ">
            <Button fullWidth justify="space-between" size="compact-lg" bg={'#D9D9D9'} rightSection={<FaArrowRight/>} className="bg-gray-600 text-black">
          Go to shop
          </Button>
          </Box>
          <Box className="ctrlBtn  justify-end flex w-1/4 gap-4">
            <Button size="compact-lg" onClick={handlePrev} variant="outline">
              <IoIosArrowBack />
            </Button>
            <Button size="compact-lg" onClick={handleNext} className="border-gray-700 font-bold" variant="outline">
              <IoIosArrowForward/>
            </Button>
          </Box>
        </Box>
        </Box>
        <Box className="newCollectionCarousel w-3/4">
          <Container pos="relative">
      {/* Carousel */}
      <Carousel
        height={320}
        withIndicators={false}
        withControls={false} // disable default arrows
        getEmblaApi={setEmblaCollection}
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play()}
        slideSize="40%"
        slideGap={'sm'}

      >
        {
          newCollectionData.map(data =>{
            return(
               <Carousel.Slide className="">
          <NewCollectionBox image={data.image} />
        </Carousel.Slide>
            )
          }

          )
        }
       
        
      </Carousel>
    </Container>
      </Box>
      </Box>

      <Box className="flex gap-8 w-full  flex-col">
        <Box className="flex justify-between items-end">
          <Box>
            <h1 className="font-bold text-5xl">NEW <br/> THIS_
            <Indicator inline label="(40)" size={20} offset={-5} color="black" radius={3} className="">
              WEEK
            </Indicator>
            </h1>
          </Box>
          <a href="" className="text-gray-700 font-bold underline">See All</a>
        </Box>
        <Box className="flex flex-col gap-10 items-center w-full">
           <Box className="w-full">
           <Carousel
      height={'fit-content'}
      slideSize=""
      slideGap="xl"
      loop
      withIndicators={false}
        withControls={false}
        getEmblaApi={setEmblaNewProduct}
    >
      {
        newWeekProducts.map((data)=>{
          return(
            <CarouselSlide>
              <ProductCard data={data}/>
            </CarouselSlide>
          )
        })
      }
      {/* ...other slides */}
    </Carousel>
           </Box>
       <Box className="ctrlBtn  justify-end flex w-1/4 gap-4">
            <Button bd={'2px solid #A3A3A3'} color="#1E1E1E" size="compact-lg" onClick={handlePrevNewProduct} variant="outline">
              <IoIosArrowBack />
            </Button>
            <Button bd={'2px solid #A3A3A3'} color="#1E1E1E" size="compact-lg" onClick={handleNextNewProduct} className="border-gray-700 font-bold" variant="outline">
              <IoIosArrowForward/>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default NewestCollection
