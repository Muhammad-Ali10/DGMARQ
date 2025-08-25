import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addUser, removeUser } from "../../store/productSlice";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Base_url } from "../../lib/baseUrl";
import { auth, provider, providerFacebook } from "../../utils/firebase.config";
import { signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";
import { Button } from "../ui/button";

const ProfilePopup = () => {
  const { userInfo } = useSelector((state) => state.next);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const openProfileFun = () => setOpenProfile(!openProfile);

  const removeFun = () => {
    dispatch(removeUser());
    toast.success("User signed out successfully!");
  };

  const handleClick = () => {
    signInWithPopup(auth, provider).then(async (data) => {
      const { user } = data;
      try {
        await auth.signOut();
        const params = {
          username: user?.displayName,
          email: user?.email,
          password: user?.uid,
        };
        const response = await axios.post(`${Base_url}/user/register`, params);
        if (response?.data?.status === "success") {
          toast.success(response?.data?.message);
          dispatch(addUser(response?.data?.data));
        } else {
          toast.error(response?.data?.message);
        }
      } catch (error) {
        if (error?.response?.data?.status === "fail" && error?.response?.data?.message === "Email already exist") {
          const params = {
            username: user?.displayName,
            email: user?.email,
            password: user?.uid,
          };
          try {
            const response = await axios.post(`${Base_url}/user/login`, params);
            if (response?.data?.status === "success") {
              toast.success(response?.data?.message);
              dispatch(addUser(response?.data?.data));
            } else {
              toast.error(response?.data?.message);
            }
          } catch (error) {
            toast.error(error);
          }
        }
      }
    });
  };

  const handleFacebook = () => {
    signOut(auth)
      .then(() => {
        signInWithPopup(auth, providerFacebook)
          .then(async (data) => {
            console.log(data);
          })
          .catch(async (error) => {
            const params = {
              username: error.customData.userName,
              email: error.customData.email,
              password: error.customData._tokenResponse.localId,
            };
            try {
              const response = await axios.post(`${Base_url}/user/register`, params);
              if (response?.data?.status === "success") {
                toast.success(response?.data?.message);
                dispatch(addUser(response?.data?.data));
              } else {
                toast.error(response?.data?.message);
                const loginParams = {
                  email: error.customData.email,
                  password: error.customData._tokenResponse.localId,
                };
                try {
                  const loginResponse = await axios.post(`${Base_url}/user/login`, loginParams);
                  if (loginResponse?.data?.status === "success") {
                    toast.success(loginResponse?.data?.message);
                    dispatch(addUser(loginResponse?.data?.data));
                  } else {
                    toast.error(loginResponse?.data?.message);
                  }
                } catch (error) {
                  toast.error(error);
                }
              }
            } catch (error) {
              toast.error(error?.response?.data?.message);
            }
          });
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div className="flex gap-1 relative items-center text-black">
      {userInfo ? (
        <div className="flex items-center gap-2">
          <div onClick={openProfileFun} className="w-12 h-12 rounded-full overflow-hidden cursor-pointer">
            <img
              src={userInfo?.logo || "https://res.cloudinary.com/dptwervy7/image/upload/v1754459918/profile_offplh.jpg"}
              className="w-full h-full bg-center object-cover"
              alt="Profile"
            />
             <div className="flex flex-col items-center">
              <span className="text-white text-[11px]  sm:block hidden whitespace-nowrap font-medium">Your Dgmarq</span>
            </div>
          </div>
          <div onClick={openProfileFun} className="relative">
           
            {openProfile && (
              <div className="absolute  sm:right-0 -left-60 mt-2 top-12  sm:w-80 w-72 bg-white shadow-lg rounded-md p-5 z-50">
                <div className="flex justify-start gap-6 items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={userInfo?.logo || "https://res.cloudinary.com/dptwervy7/image/upload/v1754459918/profile_offplh.jpg"}
                      className="w-full h-full bg-center object-cover"
                      alt="Profile"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-black text-sm">{userInfo?.username}</span>
                    <span className="text-black text-sm">{userInfo?.email}</span>
                  </div>
                </div>
                <div className="mt-3 border-t border-b pb-2 pt-3 space-y-4">
                  <Link to="/dashboard" className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="currentColor">
                      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" fill="none" strokeMiterlimit={10}>
                        <path d="M12 3v3M19.778 6.222l-2.121 2.121M23 14h-3M7 9l3.586 3.586M1 14h3" />
                        <circle cx={12} cy={14} r={2} />
                        <path d="M20.485 21A10.955 10.955 0 0023 14c0-6.075-4.925-11-11-11S1 7.925 1 14c0 2.659.944 5.098 2.515 7h16.97z" />
                      </g>
                    </svg>
                    <span>Dashboard</span>
                  </Link>
                  <Link to="/keys" className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="currentColor">
                      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" fill="none" strokeMiterlimit={10}>
                        <path d="M18 1L9.766 9.234A6.953 6.953 0 008 9a7 7 0 107 7c0-.891-.173-1.74-.476-2.524L17 11V8h3l3-3V1h-5z" />
                        <circle cx={8} cy={16} r={2} />
                      </g>
                    </svg>
                    <span>Your keys</span>
                  </Link>
                  <Link to="/order-history" className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="currentColor">
                      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" fill="none" strokeMiterlimit={10}>
                        <circle cx={3} cy={4} r={2} />
                        <circle cx={3} cy={12} r={2} />
                        <circle cx={3} cy={20} r={2} />
                        <path d="M9 4h14M9 12h14M9 20h14" />
                      </g>
                    </svg>
                    <span>Order History</span>
                  </Link>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <Link to="/settings" className="flex text-sm items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="currentColor">
                      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" fill="none" strokeMiterlimit={10}>
                        <circle cx={12} cy={12} r={3} />
                        <path d="M20 12a8.049 8.049 0 00-.188-1.713l2.714-2.055-2-3.464-3.143 1.326a7.987 7.987 0 00-2.961-1.719L14 1h-4l-.422 3.375a7.987 7.987 0 00-2.961 1.719L3.474 4.768l-2 3.464 2.714 2.055a7.9 7.9 0 000 3.426l-2.714 2.055 2 3.464 3.143-1.326a7.987 7.987 0 002.961 1.719L10 23h4l.422-3.375a7.987 7.987 0 002.961-1.719l3.143 1.326 2-3.464-2.714-2.055A8.049 8.049 0 0020 12z" />
                      </g>
                    </svg>
                    Account settings
                  </Link>
                  <div onClick={removeFun} className="flex cursor-pointer text-sm items-center gap-2">
                    Sign out
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="currentColor">
                      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" fill="none" strokeMiterlimit={10}>
                        <path d="M17 12H2M7 17l-5-5 5-5M10 1h12v22H10" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
            <Button onClick={toggleDropdown} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">Register</Button>
          {isOpen && (
              <div className="absolute  sm:right-0 -left-32 mt-2 top-12  sm:w-80 w-72 bg-white shadow-lg rounded-md p-5 z-50">
              <h2 className="text-lg font-bold text-gray-800 mb-3">Welcome!</h2>
              <div className="space-y-3">
                <button onClick={handleClick} className="w-full flex items-center text-sm pr-7 font-semibold justify-between gap-2 p-3 border-blue border rounded-sm text-blue hover:text-white hover:bg-secondary">
                  <FaGoogle size={20} />
                  Sign in With Google
                </button>
                <button onClick={handleFacebook} className="w-full flex items-center text-sm pr-7 font-semibold justify-between gap-2 p-3 border-blue border rounded-sm text-blue hover:text-white hover:bg-secondary">
                  <FaFacebookF size={20} />
                  Sign in with Facebook
                </button>
                <button className="w-full flex items-center justify-center p-3 bg-blue text-white rounded-sm hover:bg-secondary">Sign in</button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-3">By clicking Sign in with Google, Facebook, or PayPal, you agree to DGMARQ's Terms & Conditions and Privacy Policy.</p>
              <div className="text-center mt-4">
                <p className="text-sm flex flex-col gap-2 text-black font-semibold">
                  Don't have an account?
                  <Link to="/register" className="text-blue font-medium hover:underline">Register</Link>
                </p>
              </div>
              <div className="mt-5 border-t pt-3 space-y-3">
                <Link to="/register" className="flex items-center text-sm gap-2 text-gray-700 hover:text-blue cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="currentColor">
                    <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" fill="none" strokeMiterlimit={10}>
                      <path d="M12 3v3M19.778 6.222l-2.121 2.121M23 14h-3M7 9l3.586 3.586M1 14h3" />
                      <circle cx={12} cy={14} r={2} />
                      <path d="M20.485 21A10.955 10.955 0 0023 14c0-6.075-4.925-11-11-11S1 7.925 1 14c0 2.659.944 5.098 2.515 7h16.97z" />
                    </g>
                  </svg>
                  <span>Dashboard</span>
                </Link>
                <div className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="currentColor">
                    <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" fill="none" strokeMiterlimit={10}>
                      <path d="M18 1L9.766 9.234A6.953 6.953 0 008 9a7 7 0 107 7c0-.891-.173-1.74-.476-2.524L17 11V8h3l3-3V1h-5z" />
                      <circle cx={8} cy={16} r={2} />
                    </g>
                  </svg>
                  <span>Your keys</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.3em" height="1.3em" fill="currentColor">
                    <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" fill="none" strokeMiterlimit={10}>
                      <circle cx={3} cy={4} r={2} />
                      <circle cx={3} cy={12} r={2} />
                      <circle cx={3} cy={20} r={2} />
                      <path d="M9 4h14M9 12h14M9 20h14" />
                    </g>
                  </svg>
                  <span>Order History</span>
                </div>
              </div>
            </div>
          )}

        </>
      )}
    </div>
  );
};

export default ProfilePopup;