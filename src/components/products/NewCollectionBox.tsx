import { Box, Image } from "@mantine/core"
// import testImg from '../../assets/images/map1.webp'


function NewCollectionBox({image}: {image:string}) {
  return (
    <>
        <Box className="container w-full h-full p-1 border-solid border-gray-600 border-2">
            <Image className="w-full h-full " src={image}/>
        </Box>
    </>
)
}

export default NewCollectionBox
