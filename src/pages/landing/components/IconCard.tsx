import { Box, Image } from "@mantine/core"
import './styles/heroSection.css';
import iconImage from '../../../assets/images/analize_crime.png'
import { IconCardType } from "../../../types/props_types";


function IconCard(data : IconCardType) {
  return (
    <>
      <Box className="icon_card">
        <Box className="icon_box">
            <Image src={iconImage}/>
        </Box>
        <Box className="icon_txt">
            <h2>{data.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, architecto?</p>
        </Box>
      </Box>
    </>
  )
}

export default IconCard
