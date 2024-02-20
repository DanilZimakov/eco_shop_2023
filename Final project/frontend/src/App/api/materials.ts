import axios from "axios"

export const axiosLoadMaterials = async () => {
    const res = await axios.get("http://localhost:3000/materials")
    return res.data
} 