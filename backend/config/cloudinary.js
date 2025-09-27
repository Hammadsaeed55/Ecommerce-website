import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

const uploadOnCloudinary = async (filPath) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    try {
        if (!filPath) {
            return null
        }
        const uploadResult = await cloudinary.uploader.upload(filPath)
        fs.unlinkSync(filPath)
        return uploadResult.secure_url
    }
    catch (error) {
        fs.unlinkSync(filPath)
        console.log(error)
    }
}

export default uploadOnCloudinary