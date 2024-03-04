import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com"
const USER_KEY = "BpMwnGgs4G4vMd3t5L7hZzm8uoQ6Ne92nWDUwLbkFhQ"

export const fetchImages = async (searchQuery, page = 1) => {
    const response = await axios.get("/search/photos/", {
        params: {
            client_id: USER_KEY,
            query: searchQuery,
            page: page,
            per_page: 28, 
        }
    })
    return {
        images: response.data.results,
        totalPages: response.data.total_pages
    }
}