import axios from "axios"

const uploadImage = async (file)=>
{
    if(!file) return

    try{
        const formData = new FormData()
        formData.append('upload_preset','ubicacion_cloudinary')
        formData.append('file', file)
        //dx0pryfzn equivale al recurso en cloudinary
        const url = 'https://api.cloudinary.com/v1_1/dx0pryfzn/image/upload'
        const {data} = await axios.post(url, formData)

         console.log(data)
        return data.secure_url
    }catch(error){
        console.error('error')
        console.log(error)
        return null
    }
}
export default uploadImage