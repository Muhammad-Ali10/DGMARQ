import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "../ui/button";
import { Heart, ShoppingCart, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Base_url } from "../../utils/Base_url";
import axios from "axios";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowDropright, IoMdClose } from "react-icons/io";
import ProfilePopup from "./ProfilePopup";
import { FaAngleDown } from "react-icons/fa";
import SearchResults from "./SearchResults";
import { US, ZA, FR, ES } from 'country-flag-icons/react/3x2'
import { BottomHeader } from "@/components"
import { useLocation } from "react-router-dom" // if using React Router


const languages = [
  {
    name: 'ENG',
    country: 'United States',
    Flag: US,
  },
  {
    name: 'FRA',
    country: 'France',
    Flag: FR,
  },
  {
    name: 'ESP',
    country: 'Spain',
    Flag: ES,
  },
  {
    name: 'ZAF',
    country: 'South Africa',
    Flag: ZA,
  },
]



const Navbar = () => {


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const productData = useSelector((state) => state?.next?.productData);
  const { userInfo } = useSelector((state) => state.next);
  const [wishList, setWishList] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [Category, setCategory] = useState("All categories");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const dropdownRef = useRef(null);

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const location = useLocation()


  const Items = [
    {
      id: 1,
      name: "Bestsellers",
      Url: "/sellers",
    },
    {
      id: 2,
      name: "Gift ideas",
      Url: "/gift-ideas",
    },
    {
      id: 3,
      name: "Random Keys",
      Url: "/random-keys",
    },
    {
      id: 4,
      name: "Software",
      Url: "/software-dealer",
    },
  ];



  const navigationItems = [
    // { name: "Categories", Url: "/steam-gift", hasIcon: <Menu /> },
    { name: "Bestsellers", Url: "/best-sellers" },
    { name: "Steam Gift Cards", Url: "/steam-gift" },
    { name: "Random Keys", Url: "/random-keys" },
    { name: "Software", Url: "/software" },
  ]

  useEffect(() => {
    axios
      .get(`${Base_url}/wishlist/get/${userInfo?._id}`)
      .then((res) => {
        setWishList(res?.data || []);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${Base_url}/category/getAll`)
      .then((res) => {
        setSubCategory(res.data.data || []);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${Base_url}/brands/getAll`)
      .then((res) => {
        setAllCategory(res.data.data || []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userInfo?._id]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      axios
        .get(`${Base_url}/products/search?title=${query}`)
        .then((res) => {
          setSearchResults(res.data.data || []);
          setIsDropdownOpen(true);
        })
        .catch((err) => {
          console.error("Error fetching products:", err);
        });
    } else {
      setSearchResults([]);
      setIsDropdownOpen(false);
    }
  };


  useEffect(() => {
    function handleClickOutside(e) {
      // If dropdown is open and clicked outside
      if (isDropdownOpen && !e.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isDropdownOpen])

  // Close dropdown on URL change
  useEffect(() => {
    setIsDropdownOpen(false)
  }, [location.pathname])

  const closeSubMenu = () => {
    setDesktopMenuOpen(false);
    setSelectedCategory(null);
    setOpenSubMenu(null); // Reset the open submenu state
  };

  const toggleDesktopMenu = () => {
    setDesktopMenuOpen((prev) => !prev);
  };

  return (
    <>

      <header className=" text-white relative z-50 w-full ">
        <div className="flex items-center gap-4 max-w-1260 mx-auto px-2.5 py-3 md:py-5 justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link to="/">
              <img src="https://res.cloudinary.com/dptwervy7/image/upload/v1754393665/logo_nojqxu.png" alt="Logo" className="w-36 md:w-18 lg:w-30 xl:w-36 h-11" />
            </Link>
          </div>
          <div className="hidden md:flex flex-1 text-white justify-center items-center max-w-[700px]">
            <div className="p-[1px] rounded-md bg-gradient-to-r from-[#172AA4] via-purple-500 to-[#0E9FE2] w-full">
              <div className="flex w-full rounded-md bg-[#060318] px-4 items-center">

                <form className="hidden h-11 z-50 w-full rounded-md items-center md:flex relative text-white text-base font-medium font-poppins">
                  <input
                    value={searchQuery}
                    onChange={handleInputChange}
                    className="hidden w-8/12 p-3 rounded-tl-md rounded-bl-md  outline-none md:block relative z-50   placeholder:text-white"
                    type="search"
                    placeholder="What are you looking for?"
                    onFocus={() => searchResults.length > 0 && setIsDropdownOpen(true)}
                  />
                  <div
                    ref={dropdownRef}
                    className="relative cursor-pointer max-w-[254px] w-full  flex items-center justify-between"
                  >
                    <div className="border border-white w-5 rotate-90"></div>


                    <div
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center "
                    >
                      <span className="text-white text-base font-medium font-poppins">{Category}</span>
                      <FaAngleDown className="ml-2 text-gray-400" />
                    </div>
                    {dropdownOpen && (
                      <div className="absolute left-0 top-full w-60 bg-white shadow-lg border rounded-sm z-[60] ">
                        {allCategory?.map((category) => (
                          <Link
                            to={`/category/${category?._id}`}
                            key={category?._id}
                            className={`px-3 py-2 text-[9px] xl:text-[12px] block text-gray-700 hover:bg-gray-100  ${selectedCategory === category
                              ? "bg-gray-200 font-semibold"
                              : ""
                              }`}
                          >
                            {category?.name}
                          </Link>
                        ))}
                      </div>
                    )}
                    <button
                      className="bg-primary rounded-[9px] px-4 py-2.5 h-auto"
                      type="submit"
                    >
                      <IoSearch size={20} />
                    </button>
                  </div>

                  {isDropdownOpen && (
                    <>
                      <div className="fixed inset-0 bg-opacity-30 z-45" />
                      <ul className="absolute left-0 z-[70] top-10 right-0 bg-white rounded-sm shadow-lg ">
                        <SearchResults results={searchResults} />
                      </ul>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
          {/* Right Actions */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Language Selector */}

            <div className="hidden md:flex">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="bg-transparent hover:bg-transparent outline-0  focus:outline-0 text-white  px-4 h-auto  text-base font-medium font-poppins border-[#1266c4] border-2 rounded-[9px] py-1.5"
                  >
                    <selectedLanguage.Flag title={selectedLanguage.country} className="w-4 h-4 mr-2" />
                    {selectedLanguage.name}

                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-full text-base font-medium font-poppins">
                  {languages.map((languages) => {
                    return (
                      <DropdownMenuItem
                        key={languages.name}
                        onClick={() => setSelectedLanguage(languages)}
                        className="text-sm" >
                        <languages.Flag title={languages.country} className="w-4 h-4" />
                        <span className="ml-2">{languages.name}</span>
                      </DropdownMenuItem>
                    )
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {/* Register Button */}

            <ProfilePopup />
            {/* Wishlist */}
            <Button variant="ghost" size="icon" className=" bg-primary text-white hover:bg-white/10 p-2" asChild>
              <Link to="/Wishlist">
                <Heart className="h-5 w-5" />
              </Link>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="bg-primary text-white hover:bg-white/10 p-2" asChild>
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </Button>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <RxHamburgerMenu className="w-7 text-white h-7" />
              </button>
            </div>
          </div>
        </div>
      </header >
      {mobileMenuOpen && (
        <section className="block md:hidden absolute left-0 right-0 z-50 h-screen w-full bg-primary py-2.5">
          <div className="mx-auto">
            <div className="flex flex-col justify-between px-4 items-center gap-2">
              <button
                onClick={toggleDesktopMenu}
                className="flex text-white text-sm gap-4 font-semibold items-center w-full uppercase px-7 py-2.5 bg-[#212121] rounded-sm"
              >
                <RxHamburgerMenu className="w-5 h-5" />
                Categories
              </button>
              {navigationItems?.map((item, index) => (
                <Link
                  key={index}
                  className="text-white bg-[#212121] py-2 px-3 text-sm rounded-sm w-full text-left hover:border-b hover:text-[#EAE5D5]"
                  to={`${item?.Url}`}
                >
                  {item?.name}
                </Link>
              ))}
              <Link
                className="text-white bg-[#6202EA] py-2 text-sm rounded-sm w-full text-left px-3 hover:border-b hover:text-[#EAE5D5]"
                to={"#"}
              >
                Save more with DGMARQ Plus
              </Link>
              <div className="w-full text-white justify-center items-center max-w-[700px]">
                <div className="p-[1px] rounded-md bg-gradient-to-r from-[#172AA4] via-purple-500 to-[#0E9FE2] w-full">
                  <div className=" w-full rounded-md bg-[#060318] px-2 items-center">

                    <form className=" h-11 z-50 w-full flex flex-row rounded-md items-center md:flex relative text-white text-base font-medium font-poppins">
                      <input
                        value={searchQuery}
                        onChange={handleInputChange}
                        className="max-w-[254px] w-full p-3 rounded-tl-md rounded-bl-md  outline-none md:block relative z-50   placeholder:text-white"
                        type="search"
                        placeholder="What are you looking for?"
                        onFocus={() => searchResults.length > 0 && setIsDropdownOpen(true)}
                      />
                      <div
                        ref={dropdownRef}
                        className="relative cursor-pointer max-w-[254px] w-full  flex items-center justify-between"
                      >
                        <div className="border border-white w-5 rotate-90"></div>


                        <div
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="flex items-center "
                        >
                          <span className="text-white text-xs font-medium font-poppins">{Category}</span>
                          <FaAngleDown className="ml-2 text-gray-400" />
                        </div>
                        {dropdownOpen && (
                          <div className="absolute left-0 top-full w-60 bg-white shadow-lg border rounded-sm z-[60] ">
                            {allCategory?.map((category) => (
                              <Link
                                to={`/category/${category?._id}`}
                                key={category?._id}
                                className={`px-3 py-2 text-[9px] block text-gray-700 hover:bg-gray-100  ${selectedCategory === category
                                  ? "bg-gray-200 font-semibold"
                                  : ""
                                  }`}
                              >
                                {category?.name}
                              </Link>
                            ))}
                          </div>
                        )}
                        <button
                          className="bg-primary rounded-[9px] px-4 py-2.5 h-auto"
                          type="submit"
                        >
                          <IoSearch size={20} />
                        </button>
                      </div>

                      {isDropdownOpen && (
                        <>
                          <div className="fixed inset-0 bg-opacity-30 z-45" />
                          <ul className="absolute left-0 z-[70] top-10 right-0 bg-white rounded-sm shadow-lg ">
                            <SearchResults results={searchResults} />
                          </ul>
                        </>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {desktopMenuOpen && (
            <section className="fixed h-full top-0 w-80 z-50 left-0 right-0 bg-white border">
              <div className="container mx-auto flex py-5">
                <div className="sm:w-1/4 w-full border-r">
                  <ul className="flex justify-between mt-6 flex-col w-full">
                    {subCategory?.map((category, index) => (
                      <Link
                        onClick={() => {
                          setDesktopMenuOpen(false)
                          window.location.reload();
                        }}
                        to={`/category/${category?._id}`}
                        key={index}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer ${Category === category?.midcategories
                          ? "bg-gray-200"
                          : "hover:bg-gray-100"
                          }`}
                        onMouseEnter={() => setCategory(category?.midcategories)}
                      // onMouseLeave={() => setHoveredSubMenu(null)}
                      >
                        {category.title}
                        <IoMdArrowDropright className="ml-auto" />
                      </Link>
                    ))}
                  </ul>
                </div>
                {Category && (
                  <div className="sm:w-3/4 flex">
                    {subCategory
                      .find((cat) => cat.midcategories === Category)
                      ?.subcategories.map((submenu, index) => (
                        <div key={index} className="px-4">
                          <Link
                            to={`/category/${submenu?._id}`}
                            className="font-semibold text-gray-700"
                          >
                            {submenu.title}
                          </Link>
                          <ul className="mt-2 space-y-1">
                            {submenu.items?.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="relative group"
                              >
                                <div
                                  onClick={() => setOpenSubMenu(openSubMenu === item.label ? null : item.label)}
                                  className="block px-2 py-1 hover:bg-gray-100 cursor-pointer"
                                >
                                  {item.label}
                                </div>
                                {openSubMenu === item.label && item.subItems && (
                                  <ul className="absolute w-full left-full top-0 bg-white border shadow-md">
                                    {item.subItems.map((subItem, subIndex) => (
                                      <li key={subIndex}>
                                        <a
                                          href={subItem.href}
                                          className="block px-3 py-1 hover:bg-gray-100"
                                        >
                                          {subItem.label}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </div>
                )}
                <div>
                  <button
                    onClick={closeSubMenu}
                    className="absolute top-3 right-3 text-gray-700"
                  >
                    <IoMdClose className="w-6 h-6" />
                  </button>
                </div>

              </div>
            </section>
          )}
        </section>
      )
      }
      <div className="bg-[#060318]/20 border-t border-blue-700/20 hidden md:block z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-hidden w-full items-center justify-between py-2.5">
            {/* Navigation Items */}
            <nav className="hidden   relative md:contents items-center space-x-6">
              <BottomHeader />
              {navigationItems.map((item) => (
                <Button asChild className="flex items-center gap-2 text-white py-2.5 px-5 text-sm font-medium font-poppins max-w-[181px] w-full bg-[#07142E]  rounded-none" key={item.name}>
                  <Link
                    to={item.Url}>
                    {item.hasIcon && item.hasIcon}
                    {item.name}
                  </Link>
                </Button>
              ))}
            </nav>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs lg:text-sm font-medium  px-3 lg:px-4 py-1.5 lg:py-2 ml-2 lg:ml-4 flex-shrink-0 shadow-md">
              <span className="hidden sm:inline">Save more with </span>
              <span className="font-bold">DGMARQ Plus</span>
            </Button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Navbar;