import axios from "axios";
import { Base_url } from "./Base_url";

export const fetchProducts = async (brandId, filters, page = 1) => {
  try {
    const query = new URLSearchParams({ ...filters, page });
    const res = await axios.get(`${Base_url}/products/brand/${brandId}?${query}`);
    return {
      products: res.data.data || [],
      totalPages: res.data.pagination?.totalPages || 1
    };
  } catch (err) {
    console.error("Product fetch failed", err);
    return { products: [], totalPages: 1 };
  }
};

export const fetchRegions = async () => {
  try {
    const res = await axios.get(`${Base_url}/region/getAll`);
    return res.data.data;
  } catch (err) {
    console.error("Region fetch failed", err);
    return [];
  }
};

export const fetchCategories = async (brandId) => {
  try {
    const res = await axios.get(`${Base_url}/category/getByBrandId/${brandId}`);
    return res.data.data;
  } catch (err) {
    console.error("Category fetch failed", err);
    return [];
  }
};

export const fetchPlatforms = async () => {
  try {
    const res = await axios.get(`${Base_url}/platform/getAll`);
    return res.data.data;
  } catch (err) {
    console.error("Platform fetch failed", err);
    return [];
  }
};
