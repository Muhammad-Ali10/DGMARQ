import axios from "axios";
import { Base_url } from "@/lib/baseUrl"


export const BestSellerApi = async (page, limit) => {

    const response = await axios.get(`${Base_url}/products/getBestSellers?page=${page}&limit=${limit}`)
    return response.data
}

export const UpcommingGamesApi = async () => {

    const response = await axios.get(`${Base_url}/upcoming/getAll`)
    return response.data
}


export const CategoryApi = async (page, limit) => {

    const response = await axios.get(`${Base_url}/products/productByCategory?productPage=${page}&productLimit=${limit}`)
    return response.data
}

export const ProductByKey = async (page, limit) => {

    const response = await axios.get(`${Base_url}/products/getProductByKey?page=${page}&limit=${limit}`)
    return response.data


}

export const FlashDealsApi = async () => {

    const response = await axios.get(`${Base_url}/flashDeals/getAll`)
    return response.data
}

export const BundleDealsApi = async () => {

    const response = await axios.get(`${Base_url}/bundleDeals/getAll`)
    return response.data
}

export const GameAccountApi = async (page, limit) => {

    const response = await axios.get(`${Base_url}/products/getProductByAccount?page=${page}&limit=${limit}`)
    return response.data
}

export const WishlistApi = async (page, limit) => {

    const response = await axios.get(`${Base_url}/wishlist/getAll?page=${page}&limit=${limit}`)
    return response.data
}








