import { Box, Image } from "@mantine/core"
import './styles/heroSection.css';
import { IconCardType } from "../../../types/props_types";


function IconCard(data : IconCardType) {
  return (
    <>
      <Box className="icon_card">
        <Box className="icon_box">
            <Image src={data.image}/>
        </Box>
        <Box className="icon_txt">
            <h2>{data.title}</h2>
        </Box>
      </Box>  
    </>
  )
}

export default IconCard
