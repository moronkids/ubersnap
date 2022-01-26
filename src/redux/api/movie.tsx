import { http } from 'helper/http';
import dotenv from 'dotenv';
dotenv.config();
const baseUrl: string | undefined = process.env.REACT_APP_BASE_ENDPOINT
const apiKey: string | undefined = process.env.REACT_APP_API_KEY
//endpoint
//default search is Marvel
const getMovies_ = '?s=';
//endpoint

export const getMovies = async (iData: any) => {
    const datas = await http.get(`${baseUrl + getMovies_ + iData.search}&apiKey=${apiKey}`, iData);
    return datas;
}


