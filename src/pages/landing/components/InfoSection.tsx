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
                    <IconCard data={data}/>
                )
            })
        }
      </Flex>
    </>
  )
}

export default InfoSection
