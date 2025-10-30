import { Flex } from '@mantine/core'
import IconCard from './IconCard';
import { IconCateData } from '../../../data/componentData';


function InfoSection() {
  return (
    <>
    <h1 className='text-black bg-gray-100 shadow-lg rounded p-3 font-bold text-3xl'>Categories</h1>
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
