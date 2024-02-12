import axios from "axios";
import { CategoryId } from "../../types/categories/categories";

const BASE_URL = "http://localhost:3000";


export const axiosLoadPosts = async() => {
    const res = await axios.get(`${BASE_URL}/posts`);
    return res.data
}


// export const axiosUpDate = async() => {

// }

export const axiosDelPosts = async(postId:CategoryId): Promise<number> => {
    const res = await axios.delete(`${BASE_URL}/posts/delete/${postId}`, );
    console.log(res.data);
    
    return res.data
}