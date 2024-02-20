import axios from "axios";
import { MaterialType } from "../../types/materials/materials";

const BASE_URL:string = "http://localhost:3000";


export const axiosMaterialsLoad = async ():Promise<MaterialType[]> => {
    const res = await axios.get(`${BASE_URL}/materials`);
    return res.data
}