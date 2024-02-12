import axios from "axios";

const BASE_URL = "http://localhost:3000";


export const axiosLoadPosts = async() => {
    const res = await axios.get(`${BASE_URL}/posts`);
    return res.data
}


// export const axiosUpDate = async() => {

// }

export const axiosDelPosts = async(id): Promise<number> => {
    const res = await axios.delete(`${BASE_URL}/delete`, id)
    return res.data
}
