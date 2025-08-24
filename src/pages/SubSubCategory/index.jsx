
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { MdClose } from "react-icons/md";
import { ProductCardHorizontal, GiftCard } from "@/components"
import { TfiLayoutGrid3 } from "react-icons/tfi";
import { FaListUl } from "react-icons/fa";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../utils/Base_url";
import { IoIosSearch } from "react-icons/io";

const SubSubCategory = () => {
    const { id } = useParams();
    const location = useLocation();
    const history = useNavigate();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [filters, setFilters] = useState({
        platform: "",
        minPrice: "",
        maxPrice: "",
        type: "",
        region: "",
        categoryId: "",
        title: "",
    });
    const [checkboxFilters, setCheckboxFilters] = useState({
        availability: [],
        region: [],
        platform: [],
        type: [],
        categoryId: [],
    });
    const [layout, setLayout] = useState('listing');
    const [sort, setSort] = useState('');
    const [region, setRegion] = useState([]);
    const [platform, setPlatform] = useState([]);
    const [category, setCategory] = useState([]);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const platform = queryParams.get('platform') || "";
        const minPrice = queryParams.get('minPrice') || "";
        const maxPrice = queryParams.get('maxPrice') || "";
        const type = queryParams.get('type') || "";
        const region = queryParams.get('region') || "";
        const categoryId = queryParams.get('categoryId') || "";
        const title = queryParams.get('title') || "";
        const sortParam = queryParams.get('sort') || "";

        setFilters({ platform, minPrice, maxPrice, type, region, title, categoryId });
        setSort(sortParam);
        fetchRegions();
        fetchCategories();
        fetchPlatforms();

        fetchProducts(currentPage, platform, minPrice, maxPrice, type, region, title, sortParam, categoryId);
    }, [location.search, currentPage]);


    const fetchProducts = (page, platform, minPrice, maxPrice, type, region, title, sort, categoryId) => {
        axios.get(`${Base_url}/products/subCategory/${id}?page=${page}&platform=${platform}&minPrice=${minPrice}&maxPrice=${maxPrice}&type=${type}&region=${region}&title=${title}&sort=${sort}&categoryId=${categoryId}`)
            .then((res) => {
                setProducts(res?.data?.data);
                setTotalPages(res?.data?.pagination?.totalPages);
            })
            .catch((error) => {
                console.log(error);
            });
    };



    const handleFilterChange = (filterType, value) => {
        const newFilters = { ...filters, [filterType]: value };
        setFilters(newFilters);

        if (filterType === "sort") {
            setSort(value);
        }

        const queryParams = new URLSearchParams();
        Object.entries({ ...newFilters, sort: value }).forEach(([key, val]) => {
            if (val) queryParams.set(key, val);
        });

        history({ search: queryParams.toString() });
    };

    const handleCheckboxChange = (filterType, value) => {
        const newCheckboxFilters = { ...checkboxFilters };
        if (newCheckboxFilters[filterType].includes(value)) {
            newCheckboxFilters[filterType] = newCheckboxFilters[filterType].filter(item => item !== value);
        } else {
            newCheckboxFilters[filterType].push(value);
        }
        setCheckboxFilters(newCheckboxFilters);

        const queryParams = new URLSearchParams(location.search);
        Object.entries(newCheckboxFilters).forEach(([key, val]) => {
            if (val.length > 0) {
                queryParams.set(key, val.join(','));
            } else {
                queryParams.delete(key);
            }
        });
        history({ search: queryParams.toString() });

        fetchProducts(currentPage, filters.platform, filters.minPrice, filters.maxPrice, filters.type, filters.region, filters.title, sort, filters.categoryId);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const fetchRegions = () => {
        axios.get(`${Base_url}/region/getAll`).then((res) => {
            setRegion(res?.data?.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    const fetchCategories = () => {
        axios.get(`${Base_url}/subcategory/getbyCategoryId/${id}`).then((res) => {
            setCategory(res?.data?.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    const fetchPlatforms = () => {
        axios.get(`${Base_url}/platform/getAll`).then((res) => {
            setPlatform(res?.data?.data);
        }).catch((error) => {
            console.log(error);
        });
    };


    return (
       <>
            <div className="max-w-1260 px-3 mx-auto pb-10 ">
                <div className=" py-3 z-40 sticky top-0 flex justify-between items-center">
                    <div>
                        <h1 className=" font-semibold text-2xl pb-2 text-white">Top Up Mobile Games</h1>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="md:block hidden">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <FaListUl className={`cursor-pointer ${layout === 'listing' ? 'text-[#0f66d8]' : 'text-white'}`} onClick={() => setLayout('listing')} size={25} />
                                </div>
                                <div>
                                    <TfiLayoutGrid3 onClick={() => setLayout('grid')} className={`cursor-pointer  ${layout === 'grid' ? 'text-[#0f66d8]' : 'text-white'}`} size={25} />
                                </div>

                                <div className="flex gap-3 items-center">
                                    <p className="m-0 font-semibold text-white">Sort by</p>
                                    <select
                                        value={sort}
                                        onChange={(e) => handleFilterChange('sort', e.target.value)}
                                        className="border py-1 bg-lightGray rounded-md p-2.5 text-white placeholder:text-white"
                                    >
                                        <option value="releaseDate-asc">Release date - Oldest</option>
                                        <option value="releaseDate-des">Release date - Newest</option>
                                        <option value="price-asc">Price - Low to High</option>
                                        <option value="price-desc">Price - High to Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <Button onClick={toggleMenu}
                            className={"bg-black block md:hidden uppercase text-xs py-1 font-bold text-white"}>filter</Button>
                    </div>
                </div>

                <div className="flex pt-4 gap-12">
                    <div
                        className={`sm:w-3/12 w-8/12  ${isMenuOpen
                            ? "block fixed text-center lg:p-5 p-0 top-0 right-0 z-50 left-0 w-[70%] h-full "
                            : "w-[20%] hidden lg:block "
                            }`}
                    >
                        <div className="p-2 border-t lg:hidden  border-b flex justify-between items-center">
                            <MdClose
                                size={20}
                                className="cursor-pointer"
                                onClick={() => setMenuOpen(false)}
                            />
                            <p className="h5">filter</p>
                            <span className="text-gray-500 border-b">Clear All</span>
                        </div>

                        <div className="h-full pb-12 px-4 sm:overflow-y-hidden overflow-y-scroll">
                            <h1 className="text-white font-bold  pb-2">Categories</h1>
                            <ul className="leading-7">
                                {category?.map((item, index) => {
                                    return (
                                        <li className="flex justify-between pb-2 cursor-pointer" key={index}>
                                            <div className=" flex gap-2">
                                                <input
                                                    type="checkbox"
                                                    className="w-5 h-5  p-2 outline-none focus:border-secondary rounded-sm bg-white"
                                                    checked={checkboxFilters.categoryId.includes(item?._id)}
                                                    onChange={() => handleCheckboxChange("categoryId", item?._id)}
                                                />
                                                <span className=" text-base hover:underline text-white">{item?.title}</span>
                                            </div>
                                            <span className=" text-sm text-gray-400"></span>
                                        </li>
                                    )
                                })}
                            </ul>

                            <div className="pt-3">
                                <h1 className="text-white font-bold pb-4">Price <span className="font-normal">(USD)</span></h1>
                                <div className="grid grid-cols-2 gap-2 items-center">
                                    <input
                                        placeholder="From"
                                        className="border border-gray-200 p-2.5 text-sm outline-none focus:border-secondary rounded-sm bg-white"
                                        value={filters.minPrice}
                                        onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                                    />
                                    <input
                                        placeholder="To"
                                        className="border border-gray-200 p-2.5 text-sm outline-none focus:border-secondary rounded-sm bg-white"
                                        value={filters.maxPrice}
                                        onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* <div className="pt-5">
                                <h1 className="text-white font-bold  pb-4">Availability</h1>
                                <ul className="flex gap-3 flex-col">
                                    <li className="flex gap-2 ">
                                        <input
                                            type="checkbox"
                                            className="border-2 w-5 h-5 border-gray-200 p-2 outline-none focus:border-secondary rounded-sm bg-white"
                                            checked={checkboxFilters.availability.includes("Pakistan")}
                                            onChange={() => handleCheckboxChange("availability", "Pakistan")}
                                        />
                                        <span className=" text-sm">Items available in <br /> <span className=" text-blue font-semibold">Pakistan</span></span>
                                    </li>
                                    <li className="justify-between flex gap-2 items-center">
                                        <div className="flex gap-2 items-center">
                                            <input
                                                type="checkbox"
                                                className="border-2 w-5 h-5 border-gray-200 p-2 outline-none focus:border-secondary rounded-sm bg-white"
                                                checked={checkboxFilters.availability.includes("In Stock")}
                                                onChange={() => handleCheckboxChange("availability", "In Stock")}
                                            />
                                            <span className=" text-sm">Items in stock</span>
                                        </div>
                                        <span className=" text-gray-400 text-sm">65</span>
                                    </li>
                                </ul>
                            </div> */}
                            <div className="pt-5">
                                <h1 className="text-white font-bold pb-1">Region</h1>
                                <div className=" relative pb-3">
                                    <div className=" absolute left-2 top-3">
                                        <IoIosSearch size={20} className=" text-gray-400" />

                                    </div>
                                    <input
                                        placeholder="Search for Region"
                                        className="border pl-8 text-sm border-gray-200 p-2.5 w-full outline-none focus:border-secondary rounded-sm bg-white"
                                        value={filters.region}
                                        onChange={(e) => handleFilterChange('region', e.target.value)}
                                    />

                                </div>
                                <ul className="flex gap-3 flex-col">
                                    {region?.map((item, index) => {
                                        return (
                                            <li className="justify-between flex gap-2 items-center" key={index}>
                                                <div className="flex gap-2 items-center">
                                                    <input
                                                        type="checkbox"
                                                        className="border-2 w-5 h-5 border-gray-200 p-2 outline-none focus:border-secondary rounded-sm bg-white"
                                                        checked={checkboxFilters.region.includes(item?._id)}
                                                        onChange={() => handleCheckboxChange("region", item?._id)}
                                                    />
                                                    <span className=" text-sm text-white uppercase">{item?.title}</span>
                                                </div>
                                                <span className=" text-gray-400 text-sm"></span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <hr className="mt-4" />

                            <div className="pt-5">
                                <h1 className="text-white font-bold pb-1">Platform</h1>
                                <div className=" relative pb-3">
                                    <div className=" absolute left-2 top-3">
                                        <IoIosSearch size={20} className=" text-gray-400" />

                                    </div>
                                    <input
                                        placeholder="Search for Platform"
                                        className="border pl-8 text-sm border-gray-200 p-2.5 w-full outline-none focus:border-secondary rounded-sm bg-white"
                                        value={filters.platform}
                                        onChange={(e) => handleFilterChange('platform', e.target.value)}
                                    />

                                </div>
                                <ul className="flex gap-3 flex-col">
                                    {platform?.map((item, index) => {
                                        return (
                                            <li className="justify-between flex gap-2 items-center" key={index}>
                                                <div className="flex gap-2 items-center">
                                                    <input
                                                        type="checkbox"
                                                        className="border-2 w-5 h-5 border-gray-200 p-2 outline-none focus:border-secondary rounded-sm bg-white"
                                                        checked={checkboxFilters.platform.includes(item?._id)}
                                                        onChange={() => handleCheckboxChange("platform", item?._id)}
                                                    />
                                                    <span className=" text-sm text-white">{item?.title}</span>
                                                </div>
                                                <span className=" text-gray-400 text-sm"></span>
                                            </li>

                                        )
                                    })}
                                </ul>
                            </div>
                            <hr className="mt-4" />
                            <div className="pt-5">
                                <h1 className="text-white font-bold pb-3">Type</h1>

                                <ul className="flex gap-3 flex-col">
                                    <li className="justify-between flex gap-2 items-center">
                                        <div className="flex gap-2 items-center">
                                            <input
                                                type="checkbox"
                                                className="border-2 w-5 h-5 border-gray-200 p-2 outline-none focus:border-secondary rounded-sm bg-white"
                                                checked={checkboxFilters.type.includes("Key")}
                                                onChange={() => handleCheckboxChange("type", "Key")}
                                            />
                                            <span className=" text-sm text-white">Key</span>
                                        </div>
                                        <span className=" text-gray-400 text-sm"></span>
                                    </li>

                                    <li className="justify-between flex gap-2 items-center">
                                        <div className="flex gap-2 items-center">
                                            <input
                                                type="checkbox"
                                                className="border-2 w-5 h-5 border-gray-200 p-2 outline-none focus:border-secondary rounded-sm bg-white"
                                                checked={checkboxFilters.type.includes("Gift")}
                                                onChange={() => handleCheckboxChange("type", "Gift")}
                                            />
                                            <span className=" text-sm text-white">Gift</span>
                                        </div>
                                        <span className=" text-gray-400 text-sm"></span>
                                    </li>
                                    <li className="justify-between flex gap-2 items-center">
                                        <div className="flex gap-2 items-center">
                                            <input
                                                type="checkbox"
                                                className="border-2 w-5 h-5 border-gray-200 p-2 outline-none focus:border-secondary rounded-sm bg-white"
                                                checked={checkboxFilters.type.includes("Account")}
                                                onChange={() => handleCheckboxChange("type", "Account")}
                                            />
                                            <span className=" text-sm text-white">Account</span>
                                        </div>
                                        <span className=" text-gray-400 text-sm"></span>
                                    </li>

                                </ul>
                            </div>
                            <hr className="mt-4" />
                        </div>
                    </div>
                    <div className="sm:w-9/12 w-12/12">
                        {layout === 'listing' ?
                            products?.map((item, index) => {
                                return (
                                    <GiftCard key={index}
                                        url={`/product-details/${item?._id}`}
                                        image={item?.images?.[0]}
                                        title={item?.title}
                                        discount={3}
                                        price={item?.discountPrice}
                                        originalPrice={item?.actualPrice} 
                                        />
                                )
                            })
                            :
                            <div className="grid item1 mx-auto col-span-2 mt-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                                {products?.map((item, index) => {
                                    return (
                                        <ProductCardHorizontal
                                            key={index}
                                            url={`/product-details/${item?._id}`}
                                            image={item?.images?.[0]}
                                            title={item?.title}
                                            discount={3}
                                            price={item?.discountPrice}
                                            originalPrice={item?.actualPrice}
                                        />
                                    );
                                })}
                            </div>
                        }


                        <div className="flex  justify-end mt-8 gap-4">
                            <Button onClick={handlePrevPage}
                                disabled={currentPage === 1}
                                className={`bg-black text-white px-4 py-2  rounded-sm ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>Previous</Button>
                            <span className="flex items-center">
                                Page {currentPage} of {totalPages}
                            </span>
                            <Button onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                                className={`bg-black text-white px-4 py-2   rounded-sm ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}>Next</Button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SubSubCategory;