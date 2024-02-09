import axios from "axios";

const BASE_URL = "http://localhost:3000";


export const axiosLoadPosts = async() => {
    const res = await axios.get(`${BASE_URL}/posts`);
    return res.data
}