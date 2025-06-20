import axios from "axios";
import { Img } from "./components/ImageGallery/ImageGallery.types";

type ResponseData = {
    results: Img[];
    total: number;
    total_pages: number;
}

axios.defaults.baseURL = "https://api.unsplash.com/search";

export default async function fetchPictures(searchQuery: string, page: number): Promise<ResponseData> {
    const response = await axios.get<ResponseData>(`/photos`, {
        params: {
            client_id: "s2Hc5k6SJc9T2KwEbCWWrchT2ziggT9x-1USmS7To8Y",
            query: searchQuery,
            page: page
        }
    });
    return response.data;
}