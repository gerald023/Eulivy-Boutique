import { Box, Image } from "@mantine/core"
import './styles/heroSection.css';
import iconImage from '../../../assets/images/analize_crime.png'


function IconCard() {
  return (
    <>
      <Box className="icon_card">
        <Box className="icon_box">
            <Image src={iconImage}/>
        </Box>
        <Box className="icon_txt">
            <h2>Analyze Crime Data</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, architecto?</p>
        </Box>
      </Box>
    </>
  )
}

export default IconCard
