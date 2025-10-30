import axios from "axios"


const url = "https://api.remove.bg/v1.0/removebg"

export const removeBg = async(file:File)=>{
    const formData = new FormData()
    formData.append("image_file", file)
    formData.append("bg_color", "#e6f4ee")
    // formData.append("bg_image_url", "https://res.cloudinary.com/dbhu90jva/image/upload/v1761549444/sample.jpg")
    try{
        const response = await axios.post(url, formData, {
            headers: {
                "X-Api-Key": "kFahAyL2rPX72t9n42ZQB1Uc",
                "Content-Type": "multipart/form-data",
            },
            responseType: "arraybuffer"
        })
        
        const data = await response.data
        console.log(data)
        //  const imageUrl = URL.createObjectURL(response.data);
        //  console.log("image remBg url: ", imageUrl)
         const blob = new Blob([response.data], { type: "image/png" });
  const blobUrl = URL.createObjectURL(blob);
    // return imageUrl;
    return blobUrl;
        // console.log(data);
        // return data
    }catch(e){
        console.log('remove bg error: ', e)
    }
}