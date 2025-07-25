import axios from "axios";

export const BestSellerApi = async (page, limit) => {
    
    const response = await axios.get(`https://api.dgmarq.com/products/getBestSellers?page=${page}&limit=${limit}`)
    return response.data
}