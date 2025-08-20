import React, { useEffect, useState, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../utils/Base_url";

const BottomHeader = () => {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [subSubCategory, setSubSubCategory] = useState([]);
  const [productDetails, setProductsDetails] = useState({});
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Fetch categories
  useEffect(() => {
    axios
      .get(`${Base_url}/brands/getAll`)
      .then((res) => {
        setSubCategory(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // ✅ Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDesktopMenuOpen(false);
        setSelectedCategory(null);
        setSubSubCategory([]);
        setProductsDetails({});
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDesktopMenu = () => {
    setDesktopMenuOpen(!desktopMenuOpen);
  };

  const handleCategoryHover = (category) => {
    if (category.midcategories?.length > 0) {
      setSelectedCategory(category.midcategories);
      setProductsDetails(category);
    } else {
      setSelectedCategory(null);
      setSubSubCategory([]);
      setProductsDetails({});
    }
  };

  const handleSubCategoryHover = (submenu) => {
    if (submenu.subcategories?.length > 0) {
      setSubSubCategory(submenu.subcategories);
    } else {
      setSubSubCategory([]);
    }
  };

  const handleMouseLeave = () => {
    setSelectedCategory(null);
    setSubSubCategory([]);
    setProductsDetails({});
    setDesktopMenuOpen(true);
  };

  const closeMenu = () => {
    setTimeout(() => {
      setSelectedCategory(null);
      setSubSubCategory([]);
      setProductsDetails({});
      setDesktopMenuOpen(true);
    }, 200);
  };

  return (
    <div className="flex justify-between w-full items-center gap-2">
      {/* Toggle Button */}
      <button
        ref={buttonRef}
        onClick={toggleDesktopMenu}
        className="flex items-center gap-2 text-white py-2.5 px-5 text-sm font-medium font-poppins  w-full bg-[#07142E]  rounded-none"
      >
        <RxHamburgerMenu className="w-5 h-5" />
        Categories
      </button>

      {/* Menu */}
      {desktopMenuOpen && (
        <section
          ref={menuRef}
          className=" absolute z-50 left-0 right-0 top-10 w-full h-full"
        >
          <div className="flex w-full" onMouseLeave={closeMenu}>
            {/* Main Categories */}
            <div className="bg-white border">
              <ul className="flex flex-col w-full">
                {subCategory?.map((category) => (
                  <Link
                    to={`/category/${category._id}`}
                    key={category._id}
                    className="flex items-center font-normal text-sm gap-2 px-4 py-2.5 cursor-pointer hover:bg-gray-100"
                    onMouseEnter={() => handleCategoryHover(category)}
                  >
                    {category.name}
                    {category.midcategories?.length > 0 && (
                      <LiaAngleRightSolid className="ml-auto" size={12} />
                    )}
                  </Link>
                ))}
              </ul>
            </div>

            {/* Mid Categories */}
            {selectedCategory && (
              <div className="flex bg-white pt-3 flex-col">
                {selectedCategory.map((submenu) => (
                  <Link
                    to={`/sub-category/${submenu._id}`}
                    key={submenu._id}
                    onMouseEnter={() => handleSubCategoryHover(submenu)}
                    className="px-4 cursor-pointer py-2 flex"
                  >
                    <h3 className="text-sm flex w-full text-gray-700">
                      {submenu.title}
                    </h3>
                    {submenu.subcategories?.length > 0 && (
                      <LiaAngleRightSolid className="ml-auto" size={12} />
                    )}
                  </Link>
                ))}
              </div>
            )}

            {/* Sub Categories */}
            {subSubCategory.length > 0 && (
              <div className="flex bg-white pt-3 w-full flex-col">
                {subSubCategory.map((submenu) => (
                  <Link
                    to={`/sub-sub-category/${submenu._id}`}
                    key={submenu._id}
                    className="px-4 cursor-pointer py-2 flex"
                  >
                    <h3 className="text-sm flex w-full text-gray-700">
                      {submenu.title}
                    </h3>
                  </Link>
                ))}
              </div>
            )}

            {/* Product Image */}
            {productDetails?.image && (
              <Link
                to={`/category/${productDetails._id}`}
                className="flex border-l bg-white flex-col"
              >
                <div className="h-48">
                  <img
                    src={productDetails.image}
                    className="object-center h-full w-full"
                    alt={productDetails.name}
                  />
                </div>
                <div className="h-28 flex justify-center items-center">
                  <h2 className="uppercase">{productDetails.name}</h2>
                </div>
              </Link>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default BottomHeader;
