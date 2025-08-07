import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { FilterSidebar, ProductList, PaginationControls } from "@/components";
import axios from "axios";
import { Base_url } from "../utils/Base_url";
import { Separator } from "@/components/ui/separator";

const Shop = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    platform: "",
    minPrice: "",
    maxPrice: "",
    type: "",
    region: "",
    categoryId: "",
    title: "",
    sort: "",
  });
  const [checkboxFilters, setCheckboxFilters] = useState({
    platform: [],
    region: [],
    type: [],
    categoryId: [],
  });
  const [layout, setLayout] = useState("listing");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [platforms, setPlatforms] = useState([]);
  const [regions, setRegions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sort, setSort] = useState("");

  // Build query string dynamically
  const buildQueryString = (filters) => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    return params.toString();
  };

  // Update filters and URL
  const updateFilters = (updatedFilters) => {
    setFilters(updatedFilters);
    const query = buildQueryString(updatedFilters);
    navigate({ search: query });
  };

  // Sync filters from URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const newFilters = Object.fromEntries(queryParams.entries());
    setFilters((prev) => ({ ...prev, ...newFilters }));
    setSort(newFilters.sort || "");
    fetchInitialData();
    loadProducts({ ...filters, ...newFilters }, currentPage);
    // eslint-disable-next-line
  }, [location.search, currentPage]);

  // Fetch filter options
  const fetchInitialData = async () => {
    try {
      const [regionsRes, categoriesRes, platformsRes] = await Promise.all([
        axios.get(`${Base_url}/region/getAll`),
        axios.get(`${Base_url}/category/getAll`),
        axios.get(`${Base_url}/platform/getAll`)
      ]);
      setRegions(regionsRes.data?.data || []);
      setCategories(categoriesRes.data?.data || []);
      setPlatforms(platformsRes.data?.data || []);
    } catch (error) {
      console.error("Error fetching filters:", error);
    }
  };

  // Fetch products
  const loadProducts = async (filters, page) => {
    setLoading(true);
    try {
      // Only include filters with values
      const queryObj = { ...filters, page };
      Object.keys(queryObj).forEach(
        (key) => (queryObj[key] === "" || queryObj[key] == null) && delete queryObj[key]
      );
      const query = buildQueryString(queryObj);
      const response = await axios.get(`${Base_url}/products/getAll?${query}`);
      setProducts(response.data?.data || []);
      setTotalPages(response.data?.pagination?.totalPages || 1);
    } catch (error) {
      setProducts([]);
      setTotalPages(1);
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle checkbox filter changes
  const handleCheckboxChange = (type, id) => {
    const updated = checkboxFilters[type].includes(id)
      ? checkboxFilters[type].filter(item => item !== id)
      : [...checkboxFilters[type], id];

    const updatedCheckbox = { ...checkboxFilters, [type]: updated };
    setCheckboxFilters(updatedCheckbox);

    // Update filters with comma-separated values
    const newFilters = {
      ...filters,
      [type]: updated.join(","),
    };
    updateFilters(newFilters);
  };

  // Handle price and sort changes
  const handleInputChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    updateFilters(newFilters);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-4xl text-white font-poppins font-bold capitalize">Steam Gift Card</h1>
        </div>
        <div className="flex gap-4 items-center">
          <select
            value={sort}
            onChange={(e) => handleInputChange("sort", e.target.value)}
            className="border rounded-md text-sm px-3 py-1 bg-background"
          >
            <option value="">Sort By</option>
            <option value="releaseDate-asc">Release Date - Oldest</option>
            <option value="releaseDate-desc">Release Date - Newest</option>
            <option value="price-asc">Price - Low to High</option>
            <option value="price-desc">Price - High to Low</option>
          </select>
        </div>
      </div>

      <Separator className="mb-6" />

      <div className="flex gap-8">
        <FilterSidebar
          filters={filters}
          checkboxFilters={checkboxFilters}
          setCheckboxFilters={setCheckboxFilters}
          updateFilters={updateFilters}
          handleCheckboxChange={handleCheckboxChange}
          handleInputChange={handleInputChange}
          platforms={platforms}
          regions={regions}
          categories={categories}
        />
        <div className="flex-1">
          <ProductList
            products={products}
            layout={layout}
            setLayout={setLayout}
            loading={loading}
          />
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;