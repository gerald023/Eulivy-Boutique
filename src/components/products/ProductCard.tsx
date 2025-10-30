import { Box, Button } from "@mantine/core";
import { FaPlus } from "react-icons/fa6";

interface productInfo{
    name: string,
    desc: string,
    price: number,
    img: string,
}
function ProductCard({data}: {data: productInfo}) {
  return (
    <>
      <Box className="flex flex-col  gap-2 w-64">
        <Box component="a" bg={'#F1F2F7'} bd={'2px solid #D7D7D7'} className="image_sec bg-slate-200 border-2 border-solid border-gray-300 pt-5 gap-2 w-full h-4/5  flex flex-col items-center">
            <img className="w-full h-3/4 drop-shadow-xl object-cover" src={data.img}/>
            <Button component="a" href="#" className="p-0" size="compact-sm" bg={'#DCDCDC'} color="black">
                <FaPlus color="black"/>
            </Button>
        </Box>
        <a href="#">
            <Box className="text_sec w-full flex flex-col font-extrabold">
            <Box>
                <p className="font-bold text-gray-700 text-sm">{data.name}</p>
            </Box>
            <Box className="flex items-end font-bold text- w-full justify-between">
                <p>{data.desc}</p>
                <p>{data.price}</p>
            </Box>
        </Box>
        </a>
      </Box>
    </>
  )
}

export default ProductCard
