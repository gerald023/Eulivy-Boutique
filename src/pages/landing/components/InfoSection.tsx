import { Flex } from '@mantine/core'
import IconCard from './IconCard';
import { IconCateData } from '../../../data/componentData';


function InfoSection() {
  return (
    <>
      <Flex className='iconCardCon'>
        {
            IconCateData.map(data =>{
                return(
                    <IconCard description={data.description} image={data.image} title={data.title} />
                )
            })
        }
      </Flex>
    </>
  )
}

export default InfoSection
