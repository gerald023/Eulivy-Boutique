import { ActionIcon, Box, Button, Image, Indicator, NumberFormatter, Table, TextInput, Tooltip } from "@mantine/core";
import { FaPlus } from "react-icons/fa6";
import { FaFilter, FaSearch, FaRegEye, FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { listProducts } from "../../../../server/services/productService";
import { useEffect, useState } from "react";
import { Product } from "../../../../server/models/all_models";
import { editImageWithCloudinary } from "../../../../server/cloudinary/uploadToCloudinary";
import dayjs from "dayjs"
import emptyProductImg from '../../../../assets/images/products/Empty_product.png'

function ViewAllProduct() {

  const [allProducts, setAllProducts] = useState<Product[]>()
  const getAllProducts = async()=>{
    try{
      const res = await listProducts()
      const newProductArray : Product[] = await Promise.all(
        res.map( async(data)=>{
        const newImgArray = await editImageWithCloudinary(data.images!)
        const newProduct :Product = {
          ...data,
          images: newImgArray
        }
        // newProductArray.push(newProduct)
        console.log(newProduct)
        return {
          ...data,
          images: newImgArray || [],
        }
        
      })
      )
      
      console.log(newProductArray);
      setAllProducts(newProductArray)
      return newProductArray;
    }catch(e){
      console.log(e)
    }
    console.log(allProducts)
  }
   
  useEffect(()=>{
    getAllProducts()
  }, [])
  const [searchTerm, setSearchTerm] = useState("");
const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
 
const searchProduct = async(value: string)=>{
      if (!value.trim()) {
    setFilteredProducts(allProducts!);
    console.log(filteredProducts)
    return;
  }
  const lowerTerm = value.toLowerCase();
    const filtered = allProducts!.filter((product) => {
    // loop through all keys of the product object
    return Object.values(product).some((value) => {
      // convert to string for comparison
      if (typeof value === "string" || typeof value === "number") {
        return value.toString().toLowerCase().includes(lowerTerm);
      }
      // handle array values (like images)
      if (Array.isArray(value)) {
        return value.some((v) =>
          v.toString().toLowerCase().includes(lowerTerm)
        );
      }
      return false;
    });
  });

  setFilteredProducts(filtered);

  }

  return (
    <>
      <Box className="dashContainer flex flex-col gap-10">
        {/* HEADER OF THE PAGE */}
        <Box className="flex justify-between items-end">
          <Box className="flex flex-col gap-2">
            <h1 className="font-extrabold text-3xl">Products</h1>
            <p className="text-gray-500 font-bold">All products uploaded to the app.</p>
          </Box>
          <Box>
            <Button className="bg-black font-extrabold" component="a" href="add-product" bg={"black"} leftSection={<FaPlus className="font-extrabold" />}>
              Add Product
            </Button>
          </Box>
        </Box>

      {/* FILTER SECTION */}

      <Box className="flex justify-between items-center">
        <Box className="w-1/3">
          <TextInput  value={searchTerm}
  onChange={(value)=> {
    setSearchTerm(value.target.value)
    searchProduct(value.target.value)
  }} className="font-semibold" placeholder="Search" leftSectionPointerEvents="none" leftSection={<FaSearch/>} />
        </Box>
        <Box>
          <Button leftSection={<FaFilter/>} bg={"dark"} >
            Filter
          </Button>
        </Box>
      </Box>

      {/* PRODUCT TABLE */}

      <Box>
        <Table stickyHeader stickyHeaderOffset={0} striped highlightOnHover withTableBorder verticalSpacing="xs">
        <Table.Thead  className="z-50 font-bold text-lg ">
        <Table.Tr>
          <Table.Th>Product</Table.Th>
          <Table.Th>Category</Table.Th>
          <Table.Th>Added Date</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Quantity</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {
          !allProducts ? <Box className="flex justify-center items-center p-6 w-full">
            <p className="text-red-500 text-2xl font-bold text-center">Error Loading Products...</p>
          </Box>
          :
          
           allProducts.map((product)=>{
            
            return(
              <Table.Tr>
          <Table.Td>
            <Box className="flex items-center gap-5">
              <Box className="border-2 border-solid border-black p-1 rounded-lg">
                <Image className="object-scale-down" radius={'sm'} style={{objectFit: "cover", objectPosition: "top"}} src={product.images![1]} h={50} w={50} />
              </Box>
              <p className="text-base font-semibold text-gray-800 ">{product.title}</p>
            </Box>
          </Table.Td>
          <Table.Td>
            <p className="text-base font-semibold text-gray-800 ">{product.categoryId![0]}</p>
          </Table.Td>
          <Table.Td>
            <p className="text-base font-semibold text-gray-800 "> {
            dayjs(product.createdAt).format("D MMMM, YYYY")} </p>
          </Table.Td>
          <Table.Td>
            <NumberFormatter className="text-base font-semibold text-gray-800 " prefix="₦ " value={product.price} thousandSeparator />
            <p className="text-base font-semibold text-gray-800 "></p>
          </Table.Td>
          <Table.Td>
            <p className="text-base font-semibold text-gray-800 ">{product.stock}</p>
          </Table.Td>
          <Table.Td>
             {
              product.published ?
              <Indicator inline label="Active" zIndex={1} size={20} color="green" className="text-base font-semibold"></Indicator>
              :
              <Indicator inline label="Inactive" zIndex={1} size={20} color="red" className="text-base font-semibold"></Indicator>
             }
          </Table.Td>
          <Table.Td>
            <Box className="flex gap-2">
              <Tooltip label='View' withArrow>
                <ActionIcon variant="subtle" radius={"xl"} color="gray" aria-label="Settings">
                <FaRegEye className="text-lg" />
    </ActionIcon>
              </Tooltip>
              <Tooltip label='Edit' withArrow>
                <ActionIcon variant="subtle" radius={"xl"} color="gray" aria-label="Settings">
                <FaRegEdit className="text-lg" />
    </ActionIcon>
              </Tooltip>
              <Tooltip label='Delete' withArrow>
                <ActionIcon variant="subtle" radius={"xl"} color="gray" aria-label="Settings">
                <RiDeleteBinLine className="text-lg" />
    </ActionIcon>
              </Tooltip>
            </Box>
          </Table.Td>
        </Table.Tr>
            )
          })
        }
      </Table.Tbody>
    </Table>

    {
      allProducts?.length! < 1 ? <Box className="w-full p-3 flex justify-center items-center flex-col">
        <img src={emptyProductImg} className="w-1/3" alt="" />
        <Box className="flex items-end gap-2">
          <h2 className="text-4xl font-extrabold text-red-500">Opps!</h2>
          <p className="text-2xl font-extrabold text-black">No product found....(-_-)</p>
        </Box>
      </Box> : ''
    }
      </Box>
      </Box>
    </>
  )
}

export default ViewAllProduct
