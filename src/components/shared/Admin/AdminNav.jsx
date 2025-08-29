import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import { RiCloseLargeFill, RiLogoutCircleRLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoNotifications } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../store/productSlice";
const AdminNav = ({ openSidebar, side, closeSidebar }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const userData = JSON.parse(localStorage.getItem('ceat_admin_user'))
  const Dropdown = () => {
    setModalOpen(!isModalOpen);
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeFun = () => {

    dispatch(removeUser())
    toast.success('user sign out  successfuly!')
    navigate('/')
    window.location.reload()

  }



  const { userInfo } = useSelector((state) => state.next);
  console.log(userInfo);


  return (
    <nav
      className={`fixed border-b z-30 top-0 right-0   ${side === "left-0 md:-left-0" ? "left-20 md:left-64" : "left-0 "
        }`}>
      <div className="bg-[#060318]   w-full flex justify-between  items-center p-4">
        <div className=" flex items-center gap-4">
          {side === "left-64 md:left-0" ? (
            <RiCloseLargeFill size={30} onClick={closeSidebar} className=" cursor-pointer" color="white" />
          ) : (
            <FiMenu size={30} color="white" className=" cursor-pointer" onClick={openSidebar} />
          )}

          <div className="">
            <img src='../../assets/images/logo.jpeg' className=" w-32" alt="" />
          </div>
        </div>

        <div className=" flex items-center gap-5">

          <div className=" w-12 h-12 flex justify-center items-center  bg-[rgba(33,33,33,0.8)] rounded-full">
            <IoNotifications color="white" size={25} />
          </div>

          <div className=" relative">
            <div onClick={Dropdown} className=" cursor-pointer bg-primary flex  justify-center items-center rounded-full">
              {userData?.firstName && userData?.lastName ? (

                <div className=" flex justify-center gap-2  items-center">
                  <div className="">
                    <img src="https://static.g2a.com/bLfY1FzJVNuxU2nnuANiNK/avatar_15.svg" className=" w-12 h-12 rounded-full" />
                  </div>
                  <span className=" text-white text-sm">  Your DGMARQ</span>
                </div>

              ) : (
                <span className="text-white uppercase font-semibold text-sm">N/A</span>
              )}            </div>

            {isModalOpen && (
              <div className="absolute right-0   mt-2 top-12 w-80 bg-white shadow-lg rounded-md p-5 z-50">
                <div className=" flex  justify-start gap-6  items-center">
                  <div className="">
                    <img src="https://static.g2a.com/bLfY1FzJVNuxU2nnuANiNK/avatar_15.svg" className=" w-12 h-12 rounded-full" />
                  </div>
                  <div className=" flex flex-col">
                    <span className=" text-black text-sm">{userInfo?.username}</span>
                    <span className=" text-black text-sm">{userInfo?.email}</span>
                  </div>


                </div>

                {/* Navigation Links */}
                <div className="mt-3 border-t border-b pb-2 pt-3 space-y-4">
                  <Link to={'/dashboard'} className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                    {/* <IoPersonOutline size={20} /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="1.3em"
                      height="1.3em"
                      fill="currentColor"
                    >
                      <g
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeMiterlimit={10}
                      >
                        <path d="M12 3v3M19.778 6.222l-2.121 2.121M23 14h-3M7 9l3.586 3.586M1 14h3" />
                        <circle cx={12} cy={14} r={2} />
                        <path d="M20.485 21A10.955 10.955 0 0023 14c0-6.075-4.925-11-11-11S1 7.925 1 14c0 2.659.944 5.098 2.515 7h16.97z" />
                      </g>
                    </svg>

                    <span>Dashboard</span>
                  </Link>
                  <div className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
                    {/* <IoKeyOutline size={20} /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="1.3em"
                      height="1.3em"
                      fill="currentColor"
                    >
                      <g
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeMiterlimit={10}
                      >
                        <path d="M18 1L9.766 9.234A6.953 6.953 0 008 9a7 7 0 107 7c0-.891-.173-1.74-.476-2.524L17 11V8h3l3-3V1h-5z" />
                        <circle cx={8} cy={16} r={2} />
                      </g>
                    </svg>

                    <span>Your keys</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
                    {/* <IoReceiptOutline size={20} /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="1.3em"
                      height="1.3em"
                      fill="currentColor"
                    >
                      <g
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeMiterlimit={10}
                      >
                        <circle cx={3} cy={4} r={2} />
                        <circle cx={3} cy={12} r={2} />
                        <circle cx={3} cy={20} r={2} />
                        <path d="M9 4h14M9 12h14M9 20h14" />
                      </g>
                    </svg>

                    <span>Order History</span>
                  </div>



                  <div className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
                    {/* <IoReceiptOutline size={20} /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="1.3em"
                      height="1.3em"
                      fill="currentColor"
                    >
                      <g
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M.5 7.5h3v8h-3zM5.5 15.5h6.9a2 2 0 001.952-1.566l1.111-5A2 2 0 0013.507 6.5H9.5v-4a2 2 0 00-2-2l-2 6" />
                      </g>
                    </svg>


                    <span>Rate transactions</span>
                  </div>


                  <div className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
                    {/* <IoReceiptOutline size={20} /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="1.3em"
                      height="1.3em"
                      fill="currentColor"
                    >
                      <g
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          d="M19 13V8A7 7 0 005 8v5a13.834 13.834 0 01-2 7h18a13.834 13.834 0 01-2-7z"
                          fill="none"
                          strokeMiterlimit={10}
                        />
                        <path data-stroke="none" d="M9.174 22a3 3 0 005.652 0z" stroke="none" />
                      </g>
                    </svg>


                    <span>Notifications</span>
                  </div>
                </div>

                <div className=" pt-2 flex  justify-between items-center">
                  <div className=" flex text-sm items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="1.3em"
                      height="1.3em"
                      fill="currentColor"
                    >
                      <g
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeMiterlimit={10}
                      >
                        <circle cx={12} cy={12} r={3} />
                        <path d="M20 12a8.049 8.049 0 00-.188-1.713l2.714-2.055-2-3.464-3.143 1.326a7.987 7.987 0 00-2.961-1.719L14 1h-4l-.422 3.375a7.987 7.987 0 00-2.961 1.719L3.474 4.768l-2 3.464 2.714 2.055a7.9 7.9 0 000 3.426l-2.714 2.055 2 3.464 3.143-1.326a7.987 7.987 0 002.961 1.719L10 23h4l.422-3.375a7.987 7.987 0 002.961-1.719l3.143 1.326 2-3.464-2.714-2.055A8.049 8.049 0 0020 12z" />
                      </g>
                    </svg>

                    Account settings


                  </div>
                  <div onClick={() => removeFun()} className=" flex text-sm items-center gap-2">
                    Sign out  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="1.3em"
                      height="1.3em"
                      fill="currentColor"
                    >
                      <g
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeMiterlimit={10}
                      >
                        <path d="M17 12H2M7 17l-5-5 5-5M10 1h12v22H10" />
                      </g>
                    </svg>

                  </div>
                </div>
              </div>
            )}

          </div>
          <div className=" w-12 h-12 flex justify-center items-center  bg-[rgba(33,33,33,0.8)] rounded-full">
            <PiShoppingCartSimpleFill color="white" size={25} />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default AdminNav;
