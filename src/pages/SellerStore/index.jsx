import React, { useEffect, useState } from "react";;
import { NavLink, Outlet, useParams } from "react-router-dom";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";
const SellerStore = () => {
  const { id } = useParams();
  const [getSeller, setGetSeller] = useState({});

  console.log(getSeller);

  const fetchSellers = () => {
    axios.get(`${Base_url}/seller/get/${id}`)
      .then((res) => {
        console.log(res);
        setGetSeller(res?.data?.data);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchSellers();
  }, [])


  return (
    <>

      <div className="   max-w-[1170px]  md:px-5  px-3 mx-auto pb-10">
        <div className="max-w-screen-xl mx-auto px-4 py-4 ">
          <div className="flex items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center">
              {/* Badge */}
              <div className="mr-4  border-2 relative  border-secondary rounded-full">
                <img
                  src={getSeller?.logo}
                  alt="Best Choice"
                  className="w-24 h-24   object-cover  rounded-full overflow-hidden"
                />
                <div className=" absolute  -top-2 -left-3">
                  <svg width="2.5em" height="2.5em" className=" text-secondary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.39 5.544l-.91-1.776-.878 1.792L9.9 9.032l-4.048.608-2.06.309 1.53 1.414 2.923 2.703-.765 3.733-.417 2.034 1.85-.942 3.587-1.826 3.587 1.826 1.85.942-.417-2.034-.765-3.733 2.924-2.703 1.524-1.409-2.052-.314-3.974-.608-1.787-3.488z" fill="currentColor" stroke="#FAFAFA"></path></svg>
                </div>
              </div>
              {/* Seller Details */}
              <div>
                <h1 className="text-xl font-bold text-white">{getSeller?.companyName}</h1>
                <p className="text-sm text-white">EXCELLENT SELLER</p>
                <div className="flex items-center space-x-4 text-sm text-white">
                  <span>100% Positive feedback</span>
                  <span className="flex items-center">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" css="[object Object]" font-size="16"><path d="M6 22a1 1 0 100-2 1 1 0 000 2zm14 0a1 1 0 100-2 1 1 0 000 2zm1.238-12.19L20 16H6L4 1H1m3.667 5H13" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><path d="M16.529 4.47a.75.75 0 10-1.06 1.06l2 2a.748.748 0 001.06 0l5-5a.75.75 0 00-1.06-1.06l-4.47 4.47-1.47-1.47z" fill="currentColor"></path><path d="M23.099 6.02a1 1 0 00-1.18.78 4 4 0 11-3.12-4.72 1 1 0 00.4-1.961 6 6 0 104.68 7.081 1.001 1.001 0 00-.78-1.18z" fill="currentColor"></path></svg>
                    4513
                  </span>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <button className="text-blue border border-blue px-4  py-1 text-sm rounded hover:bg-blue  hover:text-white">
              Contact seller
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 mt-4 text-sm font-medium text-gray-600">
            <NavLink
              to="/seller-store/store-products"

              className={({ isActive }) =>
                isActive
                  ? " border-b-2 text-[12px] border-blue text-blue-600 pb-2"
                  : "  text-[12px] border-blue-600 text-blue-600 pb-2"
              }
            >
              SELLER'S PRODUCTS
            </NavLink>
            <NavLink to="/seller-store/about"

              className={({ isActive }) =>
                isActive
                  ? " border-b-2 text-[12px] border-blue text-blue-600 pb-2"
                  : "  text-[12px] border-blue-600 text-blue-600 pb-2"
              }>
              ABOUT SELLER
            </NavLink>
            <a href="#seller-rating" className="hover:text-gray-800 text-[12px]">
              SELLER'S RATING
            </a>
            <a href="#terms-conditions" className="hover:text-gray-800 text-[12px]">
              TERMS & CONDITIONS
            </a>
          </div>
        </div>

        {/* <Outlet /> */}

      </div>
    </>
  );
};

export default SellerStore;
