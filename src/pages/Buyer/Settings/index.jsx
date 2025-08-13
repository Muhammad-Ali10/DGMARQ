import React, { useState } from 'react';
import Wrapper from '../Wrapper';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Base_url } from '../../../utils/Base_url';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { MdModeEditOutline } from 'react-icons/md';
import { addUser } from '../../../store/productSlice';
import { FaAngleRight } from 'react-icons/fa';

const Settings = () => {
  const { userInfo } = useSelector((state) => state.next);
  const [username, setUsername] = useState(userInfo?.username || '');
  const [email, setEmail] = useState(userInfo?.email || '');
  const [password, setPassword] = useState('');
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(userInfo?.logo || '');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const updateProfile = async () => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    if (password) {
      formData.append('password', password);
    }
    if (logo) {
      formData.append('image', logo);
    }

    try {
      const response = await axios.put(`${Base_url}/user/update/${userInfo?._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response?.data?.status === 200) {
        toast.success('Profile updated successfully');
        dispatch(addUser(response?.data?.data));
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <Wrapper>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Settings</h1>

        {/*                 
                <div className="bg-blue-4 shadow-md rounded-lg p-4 sm:p-6 mb-6">
                    <div className="flex flex-col sm:flex-row items-center mb-4">
                        <div className="relative w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4 sm:mb-0">
                            {logoPreview ? (
                                <img src={logoPreview} alt="Profile" className="w-full h-full rounded-full object-cover" />
                            ) : (
                                userInfo?.logo ? 
                                <img src={userInfo?.logo} alt="Profile" className="w-full h-full rounded-full object-cover" /> : 
                                <img src={require('../../../assets/images/profile.jpg')} alt="Profile" className="w-full h-full rounded-full object-cover" />
                            )}
                            <label
                                htmlFor="logo-upload"
                                className="absolute bottom-0 right-0 bg-blue-4 shadow-md rounded-full p-1 border border-white cursor-pointer"
                            >
                                <MdModeEditOutline color='black' size={16} />
                            </label>
                            <input
                                id="logo-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleLogoChange}
                                className="hidden"
                            />
                        </div>
                        <div className="sm:ml-4 text-center sm:text-left">
                            <h2 className="text-xl font-semibold">Personal details</h2>
                            <p className="text-white text-sm">
                                {userInfo?.username}
                            </p>
                            <p className="text-white text-sm">
                                {userInfo?.email}
                            </p>
                        </div>
                    </div>
                    
                    <div className="border-t pt-4">
                        <div className="flex justify-between items-center py-3">
                            <div>
                                <h3 className="font-semibold">Personal details</h3>
                                <p className="text-white text-sm">
                                    username: <span className="font-medium">{userInfo?.username}</span>
                                </p>
                                <p className="text-white text-sm">
                                    email: <span className="font-medium">{userInfo?.email}</span>
                                </p>
                            </div>
                            <span className="text-gray-400">➝</span>
                        </div>
                    </div>
                    
                    <div className="border-t pt-4">
                        <h3 className="font-semibold mb-4">Update Profile</h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                onClick={updateProfile}
                                className="w-full bg-blue text-white p-2 rounded hover:bg-blue-700 transition-colors duration-200"
                            >
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div> */}
        <div className="border p-4 mb-6 flex flex-col sm:flex-row bg-blue-4 shadow-md rounded-lg">
          <div className="w-full sm:w-2/12 flex justify-center mb-4 sm:mb-0">
            <svg
              width={120}
              height={111}
              viewBox="0 0 120 111"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Frame 313853">
                <g id={43}>
                  <g id="Group 748">
                    <g id="Group 733">
                      <path
                        id="Vector"
                        d="M107.045 50.3488C107.045 61.7625 102.977 72.144 96.1775 80.2793C87.6173 90.5395 74.7466 97.0355 60.2974 97.0355C46.4553 97.0355 34.0703 91.0251 25.51 81.4935C18.164 73.2368 13.6714 62.3089 13.6714 50.3488C13.6714 24.5467 34.5559 3.66211 60.3581 3.66211C86.1602 3.66211 107.045 24.5467 107.045 50.3488Z"
                        fill="#EAEEF9"
                      />
                      <path
                        id="Vector_2"
                        d="M105.469 20.6873C107.407 20.6873 108.978 19.1164 108.978 17.1786C108.978 15.2408 107.407 13.6699 105.469 13.6699C103.531 13.6699 101.96 15.2408 101.96 17.1786C101.96 19.1164 103.531 20.6873 105.469 20.6873Z"
                        fill="#EAEEF9"
                      />
                      <path
                        id="Vector_3"
                        d="M110.599 6.99547C111.922 6.99547 112.995 5.92267 112.995 4.5993C112.995 3.27593 111.922 2.20312 110.599 2.20312C109.275 2.20312 108.203 3.27593 108.203 4.5993C108.203 5.92267 109.275 6.99547 110.599 6.99547Z"
                        fill="#EAEEF9"
                      />
                      <path
                        id="Vector_4"
                        d="M13.6145 17.683C14.9378 17.683 16.0107 16.6102 16.0107 15.2868C16.0107 13.9634 14.9378 12.8906 13.6145 12.8906C12.2911 12.8906 11.2183 13.9634 11.2183 15.2868C11.2183 16.6102 12.2911 17.683 13.6145 17.683Z"
                        fill="#EAEEF9"
                      />
                      <path
                        id="Vector_5"
                        d="M6.44959 85.5309C8.9073 85.5309 10.8997 83.5386 10.8997 81.0809C10.8997 78.6232 8.9073 76.6309 6.44959 76.6309C3.99188 76.6309 1.99951 78.6232 1.99951 81.0809C1.99951 83.5386 3.99188 85.5309 6.44959 85.5309Z"
                        fill="#EAEEF9"
                      />
                      <g id="User male 1">
                        <path
                          id="Vector_6"
                          d="M96.2298 80.2798C87.6695 90.5399 74.7988 97.036 60.3496 97.036C46.5075 97.036 34.1225 91.0256 25.5623 81.494C27.0193 80.3405 28.8406 79.3084 31.087 78.3977L32.7869 77.7299C36.0045 76.455 40.1936 74.8765 45.8397 72.5088C47.1146 71.9624 48.1467 70.991 48.6931 69.7161C48.9967 69.0482 49.1788 68.259 49.1788 67.4698V56.9668C48.9967 56.7239 48.8145 56.5418 48.6931 56.299C47.7825 54.9633 47.1753 53.3848 46.9932 51.6849L46.0826 51.2599C43.3506 51.9278 43.5327 49.0136 42.8649 43.4282C42.5613 41.1212 42.9256 40.6355 43.9577 40.2713L44.8076 39.1178C39.5865 27.2791 42.1971 19.8724 47.3575 17.2618C45.6576 13.4977 45.5362 12.1621 45.5362 12.1621C45.5362 12.1621 56.5248 13.9834 60.3496 13.2549C65.1458 12.2835 72.5525 13.437 75.2845 19.8117C79.8378 21.633 81.6591 24.4864 82.0234 27.6434C82.6912 32.6217 79.8378 38.0857 79.2914 40.2106C79.3521 40.332 79.4128 40.3927 79.4128 40.4534C80.1414 40.8177 80.3842 41.4248 80.1414 43.4282C79.4736 48.7101 79.6557 51.9885 76.9237 51.2599L74.4953 55.5097C74.3738 55.9954 74.3738 56.1775 74.3131 56.5418C74.1917 57.331 74.2524 58.9095 74.2524 67.5912C74.2524 68.6233 74.556 69.5946 75.1024 70.5053C75.7095 71.416 76.5594 72.2052 77.6522 72.6302C77.6522 72.6302 77.7129 72.6302 77.7737 72.6909C84.0269 75.3015 88.5195 77.0014 91.7979 78.2763C93.4978 78.8227 94.9548 79.5512 96.2298 80.2798Z"
                          fill="white"
                        />
                        <g id="Group">
                          <path
                            id="Vector_7"
                            d="M79.4032 40.1499C79.6461 38.8142 79.039 37.175 78.5533 36.0215C78.4926 35.8394 78.3712 35.6572 78.3104 35.4144C76.1856 31.1646 71.5108 29.4647 67.0182 29.2219C55.5438 28.6148 54.5118 30.8004 50.9298 27.522C52.0226 29.2219 52.144 31.8325 50.4441 35.1108C49.2299 37.4179 46.9229 38.4499 44.9194 39.1178C39.6983 27.2791 42.3089 19.8724 47.4693 17.2618C45.7694 13.4977 45.648 12.1621 45.648 12.1621C45.648 12.1621 56.6366 13.9834 60.4007 13.2549C65.1969 12.2835 72.6036 13.437 75.3356 19.8117C79.8889 21.633 81.6495 24.4864 82.0745 27.6434C82.7423 32.561 79.9496 37.9643 79.4032 40.1499Z"
                            fill="#172D45"
                          />
                        </g>
                        <path
                          id="Vector_8"
                          d="M75.2257 70.3835V72.4476H48.6951V69.7763C48.9986 69.1085 49.1808 68.3193 49.1808 67.53V56.9663C48.9986 56.7235 48.8165 56.5414 48.6951 56.2985V55.6914C49.2415 56.6628 49.97 57.5734 50.8807 58.302L59.1981 64.0695C61.1408 65.7087 63.9335 65.7694 65.937 64.1909L73.708 57.2092C73.9508 56.9663 74.2544 56.7235 74.4972 56.4807C74.3758 57.2699 74.4365 58.8484 74.4365 67.53C74.3758 68.5621 74.6793 69.5942 75.2257 70.3835Z"
                          fill="url(#paint0_linear_1871_25960)"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="Group 734">
                    <g id="Vector_9" filter="url(#filter0_d_1871_25960)">
                      <path
                        d="M110.376 84.791C110.04 86.2185 109.536 87.73 108.948 88.9896C107.353 92.0966 104.833 94.5319 101.726 96.1273C98.5353 97.7228 94.7565 98.3946 90.9777 97.5549C82.0766 95.7075 76.3664 86.9743 78.2138 78.0731C80.0612 69.172 88.7105 63.3778 97.6116 65.3092C100.803 65.981 103.574 67.5765 105.925 69.7598C109.872 73.7065 111.551 79.4167 110.376 84.791Z"
                        fill="url(#paint1_linear_1871_25960)"
                      />
                    </g>
                    <g id="Icons/Basic Icons/edit">
                      <g id="Icons/24 icons/edit">
                        <g id="pencil">
                          <path
                            id="Path"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M91.4947 87.1825L87.7339 87.8094L88.3607 84.0485L96.7687 75.6405C97.2583 75.1511 98.0518 75.1511 98.5413 75.6405L99.9028 77.0019C100.392 77.4914 100.392 78.285 99.9028 78.7745L91.4947 87.1825Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="1.22748"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <rect
                          id="Rectangle"
                          opacity="0.01"
                          x="86.8433"
                          y="73.4824"
                          width="15.2222"
                          height="15.2222"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_1871_25960"
                  x="69.8667"
                  y="61.9375"
                  width="48.8772"
                  height="48.9805"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy={5} />
                  <feGaussianBlur stdDeviation={4} />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.113725 0 0 0 0 0.294118 0 0 0 0 1 0 0 0 0.22 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1871_25960"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1871_25960"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1871_25960"
                  x1="61.9684"
                  y1="72.5496"
                  x2="61.9684"
                  y2="63.3187"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset={1} stopColor="#E2E5EC" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1871_25960"
                  x1="72.3539"
                  y1="77.3032"
                  x2="90.3301"
                  y2="104.152"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7EB3FF" />
                  <stop offset={1} stopColor="#2F82FB" />
                </linearGradient>
              </defs>
            </svg>


          </div>
          <div className="sm:w-10/12 w-full">
            <div>
              <h2 className="font-semibold text-lg">Personal details and preferences</h2>
              <p className="text-xs pt-2 text-white">
                Manage your details, set your region, and select your language and currency.
              </p>
            </div>

            <div className="flex py-3 mt-4 items-center justify-between border-t">
              <div>
                <h4 className="text-sm font-semibold">Personal details</h4>
                <ul className="flex pt-2 gap-3 items-center">
                  <li className="text-white text-xs">
                    Country:
                  </li>
                  <li className="flex items-center gap-1">
                    <img src='https://static.g2a.com/f62u8cXh5KEWkXVVaseGkX/flag-PL.svg' className=' w-4 h-4' alt='' />
                    <span className="text-sm">United States</span>
                  </li>
                </ul>
              </div>
              <FaAngleRight className="text-white" />
            </div>

            <div className="flex py-3 mt-4 items-center justify-between border-t">
              <div>
                <h4 className="text-sm font-semibold">Regional preferences</h4>
                <div className=' pt-2 flex items-center flex-wrap gap-4'>
                  <ul className="flex gap-3 items-center">
                    <li className="text-white text-xs">
                      Region:
                    </li>
                    <li className="flex items-center gap-1">
                      <img src='https://www.g2a.com/static/assets/flags/englishus.svg' className=' w-4 h-4' alt='' />
                      <span className="text-sm">United States</span>
                    </li>
                  </ul>
                  <ul className="flex gap-3 items-center">
                    <li className="text-white text-xs">
                      Language:
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-sm">English</span>
                    </li>
                  </ul>
                  <ul className="flex gap-3 items-center">
                    <li className="text-white text-xs">
                      Currency:
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-sm">USD</span>
                    </li>
                  </ul>
                </div>
              </div>
              <FaAngleRight className="text-white" />
            </div>


          </div>
        </div>

        <div className="border p-4 mb-6 flex flex-col sm:flex-row bg-blue-4 shadow-md rounded-lg">
          <div className="w-full sm:w-2/12 flex justify-center mb-4 sm:mb-0">
            <svg
              width={104}
              height={83}
              viewBox="0 0 104 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.816 81.2802C73.6123 81.2802 91.2817 63.5496 91.2817 41.677C91.2817 19.8054 73.6123 2.07422 51.816 2.07422C30.0205 2.07422 12.3511 19.8054 12.3511 41.677C12.3511 63.5496 30.0205 81.2802 51.816 81.2802Z"
                fill="#EAEEF9"
              />
              <path
                d="M12.9839 81.2816H94.0596"
                stroke="#EBF0F6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M71.1935 80.643C65.1588 80.8018 57.9325 80.643 52.8504 80.5631C47.7683 80.722 40.542 80.8018 34.5073 80.643C40.4629 77.2163 42.5272 70.921 42.8453 66.7773H62.7764C63.2527 70.921 65.317 77.2961 71.1935 80.643Z"
                fill="url(#paint0_linear_1871_26020)"
              />
              <path
                d="M35.1405 81.6797H70.6359C71.1122 81.6797 71.5885 81.2813 71.5885 80.7232C71.5885 80.245 71.1913 79.7676 70.6359 79.7676H35.1405C34.6642 79.7676 34.187 80.166 34.187 80.7232C34.267 81.2813 34.6642 81.6797 35.1405 81.6797Z"
                fill="#EBF0F6"
              />
              <path
                d="M90.5632 14.0275V66.1414C90.5632 67.4165 89.5306 68.3721 88.3398 68.3721H17.7463C16.5547 68.3721 15.5229 67.3366 15.5229 66.1414V14.0275C15.5229 12.8323 16.5547 11.7969 17.7463 11.7969H88.3398C89.6097 11.7969 90.5632 12.7534 90.5632 14.0275Z"
                fill="#F5F8FF"
              />
              <path
                d="M90.5632 14.0275V58.8897H15.5229V14.0275C15.5229 12.8323 16.5547 11.7969 17.7463 11.7969H88.3398C89.6097 11.7969 90.5632 12.7534 90.5632 14.0275Z"
                fill="#172D45"
              />
              <path d="M87.6716 14.2852H18.0308V56.2231H87.6716V14.2852Z" fill="white" />
              <rect
                x="27.4995"
                y="17.1016"
                width="49.1361"
                height="6.10503"
                rx="1.35041"
                fill="#EAEEF9"
              />
              <path d="M50.6912 19.7637H30.5073V20.4806H50.6912V19.7637Z" fill="#CACFDE" />
              <rect
                x="27.4995"
                y="24.8516"
                width="49.1361"
                height="6.10503"
                rx="1.35041"
                fill="#EAEEF9"
              />
              <path d="M50.6912 27.5137H30.5073V28.2306H50.6912V27.5137Z" fill="#CACFDE" />
              <rect
                x="27.4995"
                y="32.6016"
                width="49.1361"
                height="6.10503"
                rx="1.35041"
                fill="#EAEEF9"
              />
              <path d="M50.6912 35.2637H30.5073V35.9806H50.6912V35.2637Z" fill="#CACFDE" />
              <rect
                x="27.4995"
                y="40.3516"
                width="49.1361"
                height="6.10503"
                rx="1.35041"
                fill="#EAEEF9"
              />
              <path d="M50.6912 43.0137H30.5073V43.7306H50.6912V43.0137Z" fill="#CACFDE" />
              <rect
                x="27.4995"
                y="48.1016"
                width="49.1361"
                height="6.10503"
                rx="1.35041"
                fill="#EAEEF9"
              />
              <path d="M50.6912 50.7637H30.5073V51.4806H50.6912V50.7637Z" fill="#CACFDE" />
              <path
                d="M52.9272 65.7435C53.9363 65.7435 54.7542 64.9224 54.7542 63.9104C54.7542 62.8983 53.9363 62.0781 52.9272 62.0781C51.919 62.0781 51.1011 62.8983 51.1011 63.9104C51.1011 64.9224 51.919 65.7435 52.9272 65.7435Z"
                fill="#DBDFE6"
              />
              <path
                d="M25.7629 10.1116C26.8059 9.77136 27.3761 8.6477 27.0371 7.60146C26.6981 6.55514 25.5786 5.98263 24.5356 6.3227C23.4926 6.66277 22.9224 7.78668 23.2614 8.83301C23.6004 9.87898 24.7199 10.4518 25.7629 10.1116Z"
                fill="#EAEEF9"
              />
              <path
                d="M29.6618 3.66823C30.4076 3.66823 31.0117 3.06179 31.0117 2.31361C31.0117 1.56551 30.4076 0.958984 29.6618 0.958984C28.9161 0.958984 28.312 1.56551 28.312 2.31361C28.312 3.06179 28.9161 3.66823 29.6618 3.66823Z"
                fill="#0868F3"
              />
              <path
                d="M102.834 30.3997C104.064 29.2714 104.15 27.3567 103.026 26.1224C101.902 24.8873 99.9933 24.8014 98.7625 25.9297C97.5326 27.0572 97.4466 28.9728 98.5704 30.207C99.6952 31.4421 101.604 31.5281 102.834 30.3997Z"
                fill="#EAEEF9"
              />
              <path
                d="M103.112 16.8841C103.63 16.4093 103.666 15.603 103.192 15.0831C102.72 14.5632 101.916 14.5267 101.398 15.0015C100.879 15.4771 100.843 16.2835 101.317 16.8034C101.79 17.3224 102.593 17.3589 103.112 16.8841Z"
                fill="#EAEEF9"
              />
              <path
                d="M95.2546 14.2669C95.956 14.2669 96.5254 13.6957 96.5254 12.9918C96.5254 12.287 95.956 11.7168 95.2546 11.7168C94.5532 11.7168 93.9839 12.287 93.9839 12.9918C93.9839 13.6957 94.5532 14.2669 95.2546 14.2669Z"
                fill="#0868F3"
              />
              <path
                d="M21.2446 77.7744C21.2446 79.2889 20.053 80.4841 18.545 80.4841H3.45698C1.94809 80.4841 0.757324 79.2889 0.757324 77.7744V42.4745C0.757324 40.9608 1.94809 39.7656 3.45698 39.7656H18.465C19.9739 39.7656 21.1647 40.9608 21.1647 42.4745V77.7744H21.2446Z"
                fill="white"
              />
              <path
                d="M18.545 39.7656C20.053 39.7656 21.2446 40.9608 21.2446 42.4745V77.7744C21.2446 79.2889 20.053 80.4841 18.545 80.4841H3.45698C1.94809 80.4841 0.757324 79.2889 0.757324 77.7744V42.4745C0.757324 40.9608 1.94809 39.7656 3.45698 39.7656H18.545Z"
                fill="#1C3754"
              />
              <path
                d="M19.8897 42.474V77.7739C19.8897 78.332 19.4925 78.8892 19.0162 79.0489C18.8571 79.1287 18.6981 79.1287 18.5399 79.1287H18.4599H3.45187C3.45187 79.1287 3.45187 79.1287 3.37278 79.1287C3.29368 79.1287 3.13462 79.1287 3.05553 79.0489C2.49926 78.8892 2.02295 78.332 2.02295 77.694V42.474C2.02295 41.6772 2.65832 41.1191 3.37278 41.1191H5.51703C5.83428 41.1191 6.07244 41.3587 6.07244 41.6772C6.07244 42.2353 6.54874 42.7127 7.10502 42.7127H14.7277C15.284 42.7127 15.7603 42.2353 15.7603 41.6772C15.7603 41.3587 15.9984 41.1191 16.2366 41.1191H18.3808C19.2543 41.1191 19.8897 41.7571 19.8897 42.474Z"
                fill="white"
              />
              <path
                d="M12.2707 41.5982H10.2855C10.1273 41.5982 9.96826 41.4394 9.96826 41.2797C9.96826 41.12 10.1273 40.9611 10.2855 40.9611H12.2707C12.4298 40.9611 12.5888 41.12 12.5888 41.2797C12.5888 41.4394 12.4298 41.5982 12.2707 41.5982Z"
                fill="#2D5887"
              />
              <path
                d="M9.16944 41.5982H9.01039C8.8522 41.5982 8.69314 41.4394 8.69314 41.2797C8.69314 41.12 8.8522 40.9611 9.01039 40.9611H9.16944C9.3285 40.9611 9.48756 41.12 9.48756 41.2797C9.48756 41.4394 9.3285 41.5982 9.16944 41.5982Z"
                fill="#2D5887"
              />
              <path
                opacity="0.3"
                d="M99.7096 72.467C99.2795 73.2519 98.8502 74.0359 98.2773 74.749C98.0627 75.0346 97.8472 75.3193 97.5608 75.6049C96.1285 77.2457 94.3379 78.6718 92.4045 79.6705C92.0463 79.8842 91.688 80.027 91.2587 80.1698C90.614 80.4546 89.9693 80.6683 89.3245 80.8111C89.3245 80.8111 83.4353 75.3501 80.3042 71.3548C80.2778 71.3212 82.5606 66.778 82.5606 66.778H83.7795L80.3042 65.5423C80.3042 65.5423 82.3872 64.4652 82.2444 64.2507C82.1726 64.1797 83.5379 59.7298 83.5379 59.7298L84.8314 59.084H88.7118L100.713 70.6125C100.569 70.8262 99.8532 72.2532 99.7096 72.467Z"
                fill="url(#paint1_linear_1871_26020)"
              />
              <path
                d="M100.982 68.7788C100.902 69.0175 100.902 69.336 100.823 69.5756C100.664 70.1328 100.506 70.611 100.347 71.1691C100.267 71.4877 100.108 71.7264 100.028 72.0449C98.3614 75.7901 95.2645 78.5789 91.5323 80.0136C91.215 80.1733 90.8178 80.2523 90.4997 80.412C90.2616 80.4919 90.0234 80.5717 89.8643 80.5717C87.721 81.1289 85.4176 81.2088 83.1152 80.7314C74.9363 79.058 69.616 70.9296 71.3631 62.7222C73.0302 54.5148 81.13 49.176 89.3089 50.9292C92.2468 51.5663 94.8673 53.001 96.9316 55.0729C100.426 58.5785 102.014 63.7585 100.982 68.7788Z"
                fill="url(#paint2_linear_1871_26020)"
              />
              <path
                d="M89.9046 63.2821V61.7752C89.9046 59.6655 88.2446 58.0078 86.1319 58.0078C84.0193 58.0078 82.3593 59.6655 82.3593 61.7752V63.2821C81.0766 63.2821 80.0957 64.2616 80.0957 65.5425V70.8168C80.0957 72.0977 81.0766 73.0773 82.3593 73.0773H89.9046C91.1873 73.0773 92.1682 72.0977 92.1682 70.8168V65.5425C92.1682 64.2616 91.1873 63.2821 89.9046 63.2821ZM83.8683 61.7752C83.8683 60.4943 84.8492 59.5148 86.1319 59.5148C87.4146 59.5148 88.3955 60.4943 88.3955 61.7752V63.2821H83.8683V61.7752ZM86.9619 68.1797L86.8865 68.255V69.3099C86.8865 69.762 86.5847 70.0634 86.1319 70.0634C85.6792 70.0634 85.3774 69.762 85.3774 69.3099V68.255C84.9247 67.803 84.8492 67.1248 85.302 66.6727C85.7547 66.2207 86.4337 66.1453 86.8865 66.5974C87.3392 66.9741 87.4146 67.7276 86.9619 68.1797Z"
                fill="white"
              />
              <path
                d="M18.3882 67.1755H3.69738C3.38013 67.1755 3.06201 66.8569 3.06201 66.5384V63.1117C3.06201 62.7931 3.38013 62.4746 3.69738 62.4746H18.3882C18.7054 62.4746 19.0235 62.7931 19.0235 63.1117V66.5384C19.0235 66.8569 18.7854 67.1755 18.3882 67.1755Z"
                fill="#EAEEF9"
              />
              <path d="M10.0488 64.4661H4.09326V65.1831H10.0488V64.4661Z" fill="#CACFDE" />
              <path
                d="M18.3882 60.7184H3.69738C3.38013 60.7184 3.06201 60.3999 3.06201 60.0814V56.6547C3.06201 56.3361 3.38013 56.0176 3.69738 56.0176H18.3882C18.7054 56.0176 19.0235 56.3361 19.0235 56.6547V60.0814C19.0235 60.3999 18.7854 60.7184 18.3882 60.7184Z"
                fill="#EAEEF9"
              />
              <path d="M10.0488 58.0091H4.09326V58.726H10.0488V58.0091Z" fill="#CACFDE" />
              <path
                d="M18.3882 54.2595H3.69738C3.38013 54.2595 3.06201 53.9409 3.06201 53.6224V50.1957C3.06201 49.8771 3.38013 49.5586 3.69738 49.5586H18.3882C18.7054 49.5586 19.0235 49.8771 19.0235 50.1957V53.6224C19.0235 53.9409 18.7854 54.2595 18.3882 54.2595Z"
                fill="#EAEEF9"
              />
              <path d="M10.0488 51.5501H4.09326V52.2671H10.0488V51.5501Z" fill="#CACFDE" />
              <path
                d="M18.3882 47.8005H3.69738C3.38013 47.8005 3.06201 47.4819 3.06201 47.1634V43.7367C3.06201 43.4181 3.38013 43.0996 3.69738 43.0996H18.3882C18.7054 43.0996 19.0235 43.4181 19.0235 43.7367V47.1634C19.0235 47.4819 18.7854 47.8005 18.3882 47.8005Z"
                fill="#EAEEF9"
              />
              <path d="M10.0488 45.0911H4.09326V45.8081H10.0488V45.0911Z" fill="#CACFDE" />
              <path
                d="M18.3882 68.7695H3.69738C3.38013 68.7695 3.06201 69.0889 3.06201 69.4075V72.8342C3.14198 73.1527 3.38013 73.4713 3.69738 73.4713H18.3882C18.7054 73.4713 19.0235 73.1527 19.0235 72.8342V69.4075C19.0235 69.0091 18.7854 68.7695 18.3882 68.7695Z"
                fill="#EAEEF9"
              />
              <path d="M10.0488 70.6829H4.09326V71.3999H10.0488V70.6829Z" fill="#CACFDE" />
              <path
                d="M19.0235 75.7015V79.1282C18.8645 79.2081 18.7054 79.2081 18.5472 79.2081H18.4673H3.45922C3.45922 79.2081 3.45922 79.2081 3.38013 79.2081C3.30017 79.2081 3.14198 79.2081 3.06201 79.1282V75.7015C3.06201 75.383 3.38013 75.0645 3.69738 75.0645H18.3882C18.7854 75.0645 19.0235 75.383 19.0235 75.7015Z"
                fill="#EAEEF9"
              />
              <path d="M10.0488 77.1361H4.09326V77.853H10.0488V77.1361Z" fill="#CACFDE" />
              <defs>
                <linearGradient
                  id="paint0_linear_1871_26020"
                  x1="69.235"
                  y1="80.2923"
                  x2="69.235"
                  y2="67.8623"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F5F8FF" />
                  <stop offset="0.9913" stopColor="#D8E0EB" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1871_26020"
                  x1="83.432"
                  y1="70.7461"
                  x2="90.9307"
                  y2="76.4904"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#90C7FF" />
                  <stop offset={1} stopColor="white" stopOpacity="0.01" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1871_26020"
                  x1="65.9565"
                  y1="62.0121"
                  x2="82.5717"
                  y2="86.7531"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9BDC7C" />
                  <stop offset={1} stopColor="#41C303" />
                </linearGradient>
              </defs>
            </svg>

          </div>
          <div className="sm:w-10/12 w-full">
            <div>
              <h2 className="font-semibold text-lg">Security settings</h2>
              <p className="text-xs pt-2 text-white">
                Change your password, connect social media accounts, and turn on 2-step authentication for better account protection.
              </p>
            </div>

            <div className="flex py-3 mt-4 items-center justify-between border-t">
              <div>
                <h4 className="text-sm font-semibold">Password and connected accounts</h4>
                <ul className="pt-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <li className="text-white text-xs">
                    Password: ********
                  </li>
                  <li className="text-white flex items-center gap-2 text-xs">
                    Connected account: <p className="m-0">Google</p>
                  </li>
                </ul>
              </div>
              <FaAngleRight className="text-white" />
            </div>

            <div className="flex py-3 mt-4 items-center justify-between border-t">
              <div>
                <h4 className="text-sm font-semibold">2-step authentication</h4>
                <ul className="flex gap-3 pt-4 items-center">
                  <li className="text-white text-xs">
                    Google Authentication:
                  </li>
                  <li className="flex items-center gap-1">
                    <p className="bg-red-700 w-2 h-2 rounded-full"></p>
                    <span className="text-sm">Off</span>
                  </li>
                </ul>
              </div>
              <FaAngleRight className="text-white" />
            </div>

            <div className="flex py-3 mt-4 items-center justify-between border-t">
              <div>
                <h4 className="text-sm font-semibold">Sign-in history</h4>
              </div>
              <FaAngleRight className="text-white" />
            </div>
          </div>
        </div>

        {/* Saved Cards Card */}
        <div className="border p-4 mb-6 flex flex-col sm:flex-row items-center justify-between bg-blue-4 shadow-md rounded-lg">
          <div className="w-full sm:w-8/12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-4 sm:mb-0">
            <div className="w-full sm:w-3/12 flex justify-center">
              <svg
                width={122}
                height={105}
                viewBox="0 0 122 105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60.8529 95.1674C85.6764 95.1674 105.801 74.978 105.801 50.074C105.801 25.1691 85.6764 4.98047 60.8529 4.98047C36.0283 4.98047 15.9041 25.1691 15.9041 50.074C15.9041 74.978 36.0283 95.1674 60.8529 95.1674Z"
                  fill="#EAEEF9"
                />
                <g filter="url(#filter0_d_2937_15958)">
                  <ellipse
                    cx="10.6157"
                    cy="54.8486"
                    rx="2.11521"
                    ry="2.12205"
                    fill="url(#paint0_linear_2937_15958)"
                  />
                </g>
                <ellipse
                  cx="40.2297"
                  cy="71.8291"
                  rx="2.11521"
                  ry="2.12205"
                  fill="url(#paint1_linear_2937_15958)"
                />
                <g filter="url(#filter1_d_2937_15958)">
                  <ellipse
                    cx="19.6057"
                    cy="89.3376"
                    rx="1.58641"
                    ry="1.59153"
                    fill="url(#paint2_linear_2937_15958)"
                  />
                </g>
                <g filter="url(#filter2_d_2937_15958)">
                  <ellipse
                    cx="92.5793"
                    cy="11.8806"
                    rx="1.58641"
                    ry="1.59153"
                    fill="url(#paint3_linear_2937_15958)"
                  />
                </g>
                <ellipse cx="102.627" cy="19.8354" rx="3.17282" ry="3.18307" fill="#EAEEF9" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M60.313 59.1953L63.4748 76.6073C63.4748 76.6073 63.8315 77.9658 66.2175 77.3938C68.6035 76.8217 68.4852 68.4473 68.4852 68.4473"
                  fill="white"
                />
                <path
                  d="M60.313 59.1953L63.4748 76.6073C63.4748 76.6073 63.8315 77.9658 66.2175 77.3938C68.6035 76.8217 68.4852 68.4473 68.4852 68.4473"
                  stroke="#1C3754"
                  strokeWidth="1.06182"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M55.4278 56.2143C55.6987 62.3652 59.9285 70.9322 61.3098 64.9323C63.1805 56.8061 58.598 55.3442 58.598 55.3442"
                  fill="white"
                />
                <path
                  d="M55.4278 56.2143V56.2143C55.6987 62.3652 59.9285 70.9322 61.3098 64.9323V64.9323C63.1805 56.8061 58.598 55.3442 58.598 55.3442"
                  stroke="#1C3754"
                  strokeWidth="1.06182"
                />
                <g filter="url(#filter3_d_2937_15958)">
                  <rect
                    width="63.4566"
                    height="42.4408"
                    rx="3.18547"
                    transform="matrix(0.961259 0.275646 -0.275629 0.961264 19.6021 3.32812)"
                    fill="url(#paint4_linear_2937_15958)"
                  />
                </g>
                <g filter="url(#filter4_d_2937_15958)">
                  <ellipse
                    cx="4.23044"
                    cy="4.24408"
                    rx="4.23044"
                    ry="4.24408"
                    transform="matrix(0.961259 0.275646 -0.275629 0.961264 65.0435 25.1875)"
                    fill="#45C408"
                  />
                </g>
                <g filter="url(#filter5_d_2937_15958)">
                  <ellipse
                    cx="4.23044"
                    cy="4.24408"
                    rx="4.23044"
                    ry="4.24408"
                    transform="matrix(0.961259 0.275646 -0.275629 0.961264 58.9456 23.4414)"
                    fill="url(#paint5_linear_2937_15958)"
                  />
                </g>
                <g filter="url(#filter6_d_2937_15958)">
                  <rect
                    width="24.325"
                    height="1.59153"
                    rx="0.530911"
                    transform="matrix(0.961259 0.275646 -0.275629 0.961264 43.8018 37.8672)"
                    fill="url(#paint6_linear_2937_15958)"
                  />
                </g>
                <g filter="url(#filter7_d_2937_15958)">
                  <rect
                    width="15.8641"
                    height="1.59153"
                    rx="0.530911"
                    transform="matrix(0.961259 0.275646 -0.275629 0.961264 50.1851 46.3203)"
                    fill="url(#paint7_linear_2937_15958)"
                  />
                </g>
                <path
                  d="M36.3277 26.2451C36.3277 26.2451 34.1242 27.7217 33.3545 30.406C32.5848 33.0903 33.671 35.5102 33.671 35.5102"
                  stroke="#90C7FF"
                  strokeWidth="1.59273"
                  strokeLinecap="round"
                />
                <path
                  d="M33.0203 20.9714C33.0203 20.9714 29.1394 23.5721 27.7837 28.3C26.428 33.0279 28.3412 37.2901 28.3412 37.2901"
                  stroke="#90C7FF"
                  strokeWidth="1.59273"
                  strokeLinecap="round"
                />
                <path
                  d="M29.7402 15.6122C29.7402 15.6122 24.1613 19.3507 22.2125 26.1471C20.2638 32.9434 23.0139 39.0703 23.0139 39.0703"
                  stroke="#90C7FF"
                  strokeWidth="1.59273"
                  strokeLinecap="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M79.8756 63.9401L76.7856 60.8178C76.7856 60.8178 63.4729 46.8649 61.7091 45.5831C59.9453 44.3013 57.3024 43.3537 54.7673 45.8444C54.0323 46.5666 53.8394 47.5555 53.9361 48.5957C54.2991 52.5018 57.4359 55.4823 60.0094 58.4432L66.0166 65.3544C68.2176 67.8866 70.085 70.6796 71.8958 73.5041C75.8005 79.5948 83.8223 90.232 93.5957 92.8553L107.728 80.5824L107.746 79.6098C107.77 78.2509 107.356 76.925 106.638 75.7712C105 73.1409 102.186 68.0695 102.198 64.2924C102.208 60.7895 99.8514 53.7785 98.2369 49.3891C97.336 46.9399 95.2921 45.1099 92.7835 44.3906L72.8172 38.6652L69.0615 49.1072L76.6178 52.5106L76.7318 61.0053"
                  fill="white"
                />
                <path
                  d="M79.8756 63.9401L76.7856 60.8178C76.7856 60.8178 63.4729 46.8649 61.7091 45.5831C59.9453 44.3013 57.3024 43.3537 54.7673 45.8444C54.0323 46.5666 53.8394 47.5555 53.9361 48.5957C54.2991 52.5018 57.4359 55.4823 60.0094 58.4432L66.0166 65.3544C68.2176 67.8866 70.085 70.6796 71.8958 73.5041C75.8005 79.5948 83.8223 90.232 93.5957 92.8553L107.728 80.5824L107.746 79.6098C107.77 78.2509 107.356 76.925 106.638 75.7712C105 73.1409 102.186 68.0695 102.198 64.2924C102.208 60.7895 99.8514 53.7785 98.2369 49.3891C97.336 46.9399 95.2921 45.1099 92.7835 44.3906L72.8172 38.6652L69.0615 49.1072L76.6178 52.5106L76.7318 61.0053"
                  stroke="#1C3754"
                  strokeWidth="1.06182"
                />
                <rect
                  width="4.23044"
                  height="13.7933"
                  transform="matrix(0.961259 0.275646 -0.275629 0.961264 71.5649 36.9844)"
                  fill="#3A88FC"
                />
                <defs>
                  <filter
                    id="filter0_d_2937_15958"
                    x="0.00591373"
                    y="49.5411"
                    width="21.2196"
                    height="21.2313"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5.30911" />
                    <feGaussianBlur stdDeviation="4.24729" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.113725 0 0 0 0 0.294118 0 0 0 0 1 0 0 0 0.22 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2937_15958"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2937_15958"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_2937_15958"
                    x="9.52471"
                    y="84.5606"
                    width="20.162"
                    height="20.1727"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5.30911" />
                    <feGaussianBlur stdDeviation="4.24729" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.607843 0 0 0 0 0.862745 0 0 0 0 0.486275 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2937_15958"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2937_15958"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_2937_15958"
                    x="82.4983"
                    y="7.1036"
                    width="20.162"
                    height="20.1727"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5.30911" />
                    <feGaussianBlur stdDeviation="4.24729" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.113725 0 0 0 0 0.294118 0 0 0 0 1 0 0 0 0.22 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2937_15958"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2937_15958"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_2937_15958"
                    x="0.163384"
                    y="0.896565"
                    width="88.1776"
                    height="73.7704"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5.30911" />
                    <feGaussianBlur stdDeviation="4.24729" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.113725 0 0 0 0 0.294118 0 0 0 0 1 0 0 0 0.22 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2937_15958"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2937_15958"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_d_2937_15958"
                    x="55.2132"
                    y="23.002"
                    width="25.4542"
                    height="25.4774"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5.30911" />
                    <feGaussianBlur stdDeviation="4.24729" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.113725 0 0 0 0 0.294118 0 0 0 0 1 0 0 0 0.22 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2937_15958"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2937_15958"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter5_d_2937_15958"
                    x="49.1153"
                    y="21.2559"
                    width="25.4542"
                    height="25.4774"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5.30911" />
                    <feGaussianBlur stdDeviation="4.24729" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.113725 0 0 0 0 0.294118 0 0 0 0 1 0 0 0 0.22 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2937_15958"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2937_15958"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter6_d_2937_15958"
                    x="34.9942"
                    y="34.8067"
                    width="40.5592"
                    height="24.9735"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5.30911" />
                    <feGaussianBlur stdDeviation="4.24729" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.113725 0 0 0 0 0.294118 0 0 0 0 1 0 0 0 0.22 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2937_15958"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2937_15958"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter7_d_2937_15958"
                    x="41.3775"
                    y="43.2598"
                    width="32.4262"
                    height="22.6415"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5.30911" />
                    <feGaussianBlur stdDeviation="4.24729" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.113725 0 0 0 0 0.294118 0 0 0 0 1 0 0 0 0.22 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2937_15958"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2937_15958"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_2937_15958"
                    x1="7.79114"
                    y1="54.3178"
                    x2="10.1044"
                    y2="57.7726"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7EB3FF" />
                    <stop offset={1} stopColor="#2F82FB" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2937_15958"
                    x1="37.4052"
                    y1="71.2983"
                    x2="39.7184"
                    y2="74.7531"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9BDC7C" />
                    <stop offset={1} stopColor="#41C303" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_2937_15958"
                    x1="17.4873"
                    y1="88.9395"
                    x2="19.2222"
                    y2="91.5306"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9BDC7C" />
                    <stop offset={1} stopColor="#41C303" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_2937_15958"
                    x1="90.4609"
                    y1="11.4825"
                    x2="92.1959"
                    y2="14.0736"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7EB3FF" />
                    <stop offset={1} stopColor="#2F82FB" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_2937_15958"
                    x1="-10.6403"
                    y1="15.9125"
                    x2="7.98454"
                    y2="57.636"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7EB3FF" />
                    <stop offset={1} stopColor="#2F82FB" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_2937_15958"
                    x1="-1.41871"
                    y1="3.1825"
                    x2="3.20785"
                    y2="10.0921"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7EB3FF" />
                    <stop offset={1} stopColor="#5294F6" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_2937_15958"
                    x1="-4.07878"
                    y1="0.596719"
                    x2="-3.997"
                    y2="2.46955"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7EB3FF" />
                    <stop offset={1} stopColor="#5294F6" />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_2937_15958"
                    x1="-2.66007"
                    y1="0.596719"
                    x2="-2.535"
                    y2="2.46474"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7EB3FF" />
                    <stop offset={1} stopColor="#5294F6" />
                  </linearGradient>
                </defs>
              </svg>

            </div>
            <div className="text-center sm:text-left">
              <h2 className="font-semibold text-lg">Saved cards and PayPal accounts</h2>
              <p className="text-xs pt-2 text-white">Manage the payment methods you frequently use on DGMARQ</p>
            </div>
          </div>
          <FaAngleRight className="text-white" />
        </div>

        {/* Marketing Consent Card */}
        <div className="border p-4 mb-6 flex flex-col sm:flex-row items-center justify-between bg-blue-4 shadow-md rounded-lg">
          <div className="w-full sm:w-8/12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-4 sm:mb-0">
            <div className="w-full sm:w-3/12 flex justify-center">
              <svg
                width={120}
                height={110}
                viewBox="0 0 120 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M99.8499 49.7876C99.8499 59.6984 96.5473 68.8884 91.0132 76.2764C87.9783 80.2407 84.3187 83.7545 80.1234 86.4575C73.3397 90.9624 65.217 93.5752 56.4696 93.5752C32.4587 93.5752 13 73.9338 13 49.7876C13 25.5513 32.4587 6 56.3803 6C65.1278 6 73.2504 8.61284 80.0342 13.0276C84.2294 15.7306 87.8891 19.2444 90.9239 23.2087C96.5473 30.6868 99.8499 39.8768 99.8499 49.7876Z"
                  fill="#EAEEF9"
                />
                <path
                  d="M9.60668 18.0633C10.41 18.0633 11.0348 17.3425 11.0348 16.5317C11.0348 15.7208 10.41 15 9.51742 15C8.71408 15 8 15.6307 8 16.5317C8.08926 17.3425 8.80334 18.0633 9.60668 18.0633Z"
                  fill="#2F82FB"
                />
                <path
                  d="M6.33944 90.6063C7.14278 90.6063 7.85686 89.9756 7.85686 89.0746C7.85686 88.2638 7.23204 87.543 6.33944 87.543C5.5361 87.543 4.82202 88.1737 4.82202 89.0746C4.91128 89.8855 5.5361 90.6063 6.33944 90.6063Z"
                  fill="#2F82FB"
                />
                <path
                  d="M117.938 36.4529C119.276 35.1916 119.366 33.1193 118.116 31.7678C116.866 30.4164 114.813 30.3263 113.385 31.5876C112.046 32.849 111.957 34.9213 113.207 36.2727C114.456 37.5341 116.599 37.6242 117.938 36.4529Z"
                  fill="#EAEEF9"
                />
                <g filter="url(#filter0_d_1881_26770)">
                  <path
                    d="M95.3721 39.6786V79.8474C95.3721 80.0172 95.3721 80.1021 95.3721 80.272C95.2877 82.5649 94.1914 84.6031 92.589 85.9618C91.1552 87.2357 89.2998 88 87.2757 88H23.0955C21.6618 88 20.3967 87.6603 19.216 86.9809C18.71 86.7262 18.204 86.3865 17.7823 85.9618C16.8546 85.1975 16.0955 84.1784 15.6739 82.9895C15.3365 82.1403 15.0835 81.291 15.0835 80.3569V39.6786C15.0835 39.6786 18.457 36.7912 23.2642 32.7998C28.24 28.5536 34.8183 23.1185 40.5532 18.2779C43.8423 15.4754 43.505 15.8151 48.5652 11.484C52.4447 8.172 58.0952 8.172 61.9747 11.484C62.9868 12.3332 63.9988 13.2674 65.0108 14.1166C67.1193 15.8151 69.3964 17.8533 71.9265 19.8914C77.071 24.2225 82.7216 28.9782 87.1914 32.7149C91.7456 36.5364 95.0347 39.3389 95.3721 39.6786Z"
                    fill="#CAD1E0"
                  />
                </g>
                <path
                  d="M87.1918 32.7143V47.1513L73.1919 55.5587L68.975 58.1064L60.1197 63.4566L55.9028 66.0043L54.1318 67.1083L52.445 66.0043L48.4812 63.4566L40.0475 58.1064L36.0837 55.5587L23.1802 47.4061V32.7992C28.156 28.5531 34.7343 23.118 40.4692 18.2773L71.9268 19.8909C77.0714 24.222 82.7219 28.9777 87.1918 32.7143Z"
                  fill="#B2B9CA"
                />
                <path
                  d="M84.4094 19.5516V46.5572L71.5902 54.2852L67.795 56.5782L59.6987 61.4188L55.9035 63.7118L54.3012 64.6459L52.7831 63.7118L49.1566 61.4188L41.482 56.5782L37.8555 54.2852L26.0483 46.812V19.5516C26.0483 16.9189 28.1568 14.7109 30.8555 14.7109H79.6022C82.2166 14.7109 84.4094 16.9189 84.4094 19.5516Z"
                  fill="white"
                />
                <path
                  d="M15.3372 39.5098L53.8791 42.0575L94.698 39.5098L93.18 46.8981C93.18 46.8981 54.8068 67.1099 55.0598 67.1099C55.3128 67.1099 15.4215 43.1615 15.4215 43.1615L15.3372 39.5098Z"
                  fill="url(#paint0_linear_1881_26770)"
                />
                <path
                  d="M95.3733 39.6797V80.2731C95.289 82.566 94.1926 84.6042 92.5902 85.9629C91.1565 87.2368 89.3011 88.0011 87.277 88.0011H23.0967C21.663 88.0011 20.3979 87.6614 19.2172 86.982C18.7112 86.7273 18.2052 86.3876 17.7835 85.9629C16.8558 85.1986 16.0968 84.1796 15.6751 82.9906C15.3377 82.1414 15.0847 81.2922 15.0847 80.358V80.2731V39.6797L51.0122 62.3542L54.1326 64.3075L55.229 63.6281L56.241 63.0336L95.3733 39.6797Z"
                  fill="#738DFF"
                />
                <path
                  d="M92.5902 85.9629C91.1565 87.2368 89.3011 88.0011 87.277 88.0011H23.0967C21.663 88.0011 20.3979 87.6614 19.2172 86.982C18.7112 86.7273 18.2052 86.3876 17.7835 85.9629C16.8558 85.1986 16.0968 84.1796 15.6751 82.9906C15.3377 82.1414 15.0847 81.2922 15.0847 80.358V80.2731V39.6797L19.3016 42.2274L55.229 63.713L56.2411 64.2226L56.3254 64.3075L88.542 83.5002L92.5902 85.9629Z"
                  fill="#E6ECF5"
                />
                <path
                  d="M56.2415 63.0325V65.835L19.2177 86.9809C18.7117 86.7262 18.2056 86.3865 17.784 85.9618C16.8563 85.1975 16.0972 84.1785 15.6755 82.9895L51.6873 61.5039L54.8078 63.4571L55.2295 63.627L56.2415 63.0325Z"
                  fill="url(#paint1_linear_1881_26770)"
                />
                <path
                  d="M15 39.6797L55.2286 63.713"
                  stroke="white"
                  strokeWidth="0.465"
                  strokeMiterlimit={10}
                />
                <path
                  d="M95.3738 39.6797V80.2731C95.2894 82.566 94.193 84.6042 92.5906 85.9629C91.1569 87.2368 89.3015 88.0011 87.2774 88.0011H23.0972C21.6634 88.0011 20.3984 87.6614 19.2177 86.982C18.7116 86.7273 18.2056 86.3876 17.7839 85.9629L21.9164 83.5002L54.1331 64.3075L55.2295 63.6281L56.2415 63.0336L91.1569 42.1425L95.3738 39.6797Z"
                  fill="white"
                />
                <path
                  d="M95.3738 39.6797L56.2415 63.0336L55.2295 63.6281L54.1331 64.3075L17.7839 85.963"
                  stroke="#EDEDED"
                  strokeWidth="0.465"
                  strokeMiterlimit={10}
                />
                <path
                  d="M85.6736 68.0421H64.3364C63.8304 68.0421 63.4087 67.6175 63.4087 67.108C63.4087 66.5984 63.8304 66.1738 64.3364 66.1738H85.6736C86.1796 66.1738 86.6013 66.5984 86.6013 67.108C86.6013 67.6175 86.264 68.0421 85.6736 68.0421Z"
                  fill="#E7EBF2"
                />
                <path
                  d="M85.6736 74.2414H64.3364C63.8304 74.2414 63.4087 73.8167 63.4087 73.3072C63.4087 72.7977 63.8304 72.373 64.3364 72.373H85.6736C86.1796 72.373 86.6013 72.7977 86.6013 73.3072C86.6013 73.8167 86.264 74.2414 85.6736 74.2414Z"
                  fill="#E7EBF2"
                />
                <path
                  d="M103.42 19.6932C104.287 19.6932 104.962 19.0122 104.962 18.1366C104.962 17.2611 104.287 16.5801 103.42 16.5801C102.553 16.5801 101.878 17.2611 101.878 18.1366C101.878 19.0122 102.553 19.6932 103.42 19.6932Z"
                  fill="#2F82FB"
                />
                <g filter="url(#filter1_d_1881_26770)">
                  <path
                    d="M70.6355 35.1361C70.6355 35.9342 70.5559 36.6525 70.4763 37.4506C69.6804 42.718 66.0989 47.0278 61.244 48.8634C59.5726 49.5019 57.8216 49.8211 55.9911 49.8211C50.8974 49.8211 46.3608 47.1874 43.7344 43.1969C42.2222 40.8824 41.3467 38.0891 41.3467 35.1361C41.3467 26.9956 47.873 20.4512 55.9911 20.4512C64.0296 20.4512 70.6355 27.0754 70.6355 35.1361Z"
                    fill="url(#paint2_linear_1881_26770)"
                  />
                </g>
                <path
                  d="M70.4777 37.4476C69.6818 42.715 66.1003 47.0248 61.2453 48.8604L53.2068 40.7996L53.2864 40.4804L50.553 35.93L55.1555 36.7668L61.2453 30.0723L70.4777 37.4476Z"
                  fill="url(#paint3_linear_1881_26770)"
                />
                <path
                  d="M50.7681 35.2697L54.7272 39.2289L62.6455 31.3105"
                  stroke="white"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <filter
                    id="filter0_d_1881_26770"
                    x="0.790757"
                    y="1.85363"
                    width="108.874"
                    height="107.585"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="7.14637" />
                    <feGaussianBlur stdDeviation="7.14637" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.18 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1881_26770"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1881_26770"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_1881_26770"
                    x="30.466"
                    y="16.3709"
                    width="51.0501"
                    height="51.1304"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="6.80041" />
                    <feGaussianBlur stdDeviation="5.44033" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.113725 0 0 0 0 0.294118 0 0 0 0 1 0 0 0 0.22 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1881_26770"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1881_26770"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1881_26770"
                    x1="55.0043"
                    y1="75.7946"
                    x2="55.0043"
                    y2="41.3158"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.00289017" stopColor="#CAD1E0" />
                    <stop offset={1} stopColor="#E6ECF5" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1881_26770"
                    x1="38.2574"
                    y1="76.5824"
                    x2="35.0705"
                    y2="71.9634"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A2ABBC" />
                    <stop offset={1} stopColor="#CED7E2" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1881_26770"
                    x1="36.4356"
                    y1="31.463"
                    x2="52.4412"
                    y2="55.3777"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7EB3FF" />
                    <stop offset={1} stopColor="#2F82FB" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_1881_26770"
                    x1="56.5568"
                    y1="33.8262"
                    x2="65.505"
                    y2="42.7496"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2F82FB" />
                    <stop offset={1} stopColor="#92BBF8" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>

            </div>
            <div className="text-center sm:text-left">
              <h2 className="font-semibold text-lg">Marketing consent</h2>
              <p className="text-xs pt-2 text-white">Give your consent to marketing emails.</p>
            </div>
          </div>
          <FaAngleRight className="text-white" />
        </div>

        {/* Discount Programs Card */}
        <div className="border p-4 mb-6 flex flex-col sm:flex-row bg-blue-4 shadow-md rounded-lg">
          <div className="w-full sm:w-2/12 flex justify-center mb-4 sm:mb-0">
            <svg
              width={120}
              height={98}
              viewBox="0 0 120 98"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M104.903 49C104.903 59.4115 101.408 69.0658 95.5518 76.8272C92.3404 80.9918 88.4678 84.6831 84.0285 87.5226C76.85 92.2551 68.2548 95 58.9983 95C33.5904 95 12.9995 74.3663 12.9995 49C12.9995 23.5391 33.5904 3 58.9039 3C68.1603 3 76.7556 5.74486 83.9341 10.3827C88.3734 13.2222 92.246 16.9136 95.4574 21.0782C101.408 28.9342 104.903 38.4938 104.903 49Z"
                fill="#EAEEF9"
              />
              <path
                d="M39.4724 17.263C40.3225 17.263 41.0781 16.6005 41.0781 15.654C41.0781 14.8021 40.4169 14.0449 39.4724 14.0449C38.6223 14.0449 37.8667 14.7075 37.8667 15.654C37.8667 16.6005 38.6223 17.263 39.4724 17.263Z"
                fill="#7AB0FE"
              />
              <path
                d="M89.488 92.8353C90.3381 92.8353 91.0937 92.1727 91.0937 91.2262C91.0937 90.2797 90.4326 89.6172 89.488 89.6172C88.638 89.6172 87.8823 90.2797 87.8823 91.2262C87.8823 92.1727 88.638 92.8353 89.488 92.8353Z"
                fill="#7AB0FE"
              />
              <path
                d="M95.7376 12.6538C96.5877 12.6538 97.2488 11.9913 97.2488 11.1394C97.2488 10.2876 96.5877 9.625 95.7376 9.625C94.8875 9.625 94.2263 10.2876 94.2263 11.1394C94.2263 11.9913 94.8875 12.6538 95.7376 12.6538Z"
                fill="#0868F3"
              />
              <path
                opacity="0.8"
                d="M101.405 63.1039C101.972 63.1039 102.35 62.6307 102.35 62.1574C102.35 61.6842 101.877 61.2109 101.405 61.2109C100.838 61.2109 100.46 61.6842 100.46 62.1574C100.46 62.6307 100.838 63.1039 101.405 63.1039Z"
                fill="white"
              />
              <path
                opacity="0.5"
                d="M104.147 63.1039C104.714 63.1039 105.092 62.6307 105.092 62.1574C105.092 61.6842 104.619 61.2109 104.147 61.2109C103.58 61.2109 103.203 61.6842 103.203 62.1574C103.203 62.6307 103.58 63.1039 104.147 63.1039Z"
                fill="white"
              />
              <g filter="url(#filter0_d_1871_26121)">
                <path
                  d="M98.2868 49.0003C98.2868 54.0167 102.254 58.1814 107.26 58.3707V69.0661C107.26 71.1484 105.56 72.8521 103.482 72.8521H86.1023C86.0078 72.8521 86.0078 72.7575 86.0078 72.7575C79.0183 72.7575 70.2341 65.7534 69.1006 57.0456C69.1006 57.0456 69.1006 56.667 69.1006 56.5723C69.0062 56.667 68.9117 56.8563 68.9117 57.0456C66.8338 61.2102 68.2506 59.2225 60.4109 68.3089C53.8936 72.6628 53.7047 72.5682 53.7047 72.5682C52.9491 72.6628 52.6657 72.7575 51.6268 72.8521C50.4933 72.8521 55.6882 72.8521 17.3401 72.8521C15.2622 72.8521 13.562 71.1484 13.562 69.0661V28.9344C13.562 26.8521 15.2622 25.1484 17.3401 25.1484H103.482C105.56 25.1484 107.26 26.8521 107.26 28.9344V39.6299C102.348 39.8192 98.2868 43.9838 98.2868 49.0003Z"
                  fill="url(#paint0_linear_1871_26121)"
                />
              </g>
              <path
                d="M107.26 39.6299V28.9344C107.26 26.8521 105.56 25.1484 103.482 25.1484H17.3401C15.2622 25.1484 13.562 26.8521 13.562 28.9344V69.1608C13.562 71.2431 15.2622 72.9468 17.3401 72.9468H51.06C51.2489 72.9468 51.4378 72.9468 51.6268 72.9468C51.7212 72.9468 51.9101 72.9468 52.0046 72.9468C52.099 72.9468 52.099 72.9468 52.1935 72.9468C52.4768 72.9468 52.6657 72.8521 52.9491 72.8521H53.0436C53.138 72.8521 53.2325 72.8521 53.4214 72.7575C53.5158 72.7575 53.6103 72.7575 53.7047 72.6628L55.1215 71.9056L56.9161 70.7698H17.3401C16.4901 70.7698 15.7344 70.1073 15.7344 69.1608V28.9344C15.7344 28.0826 16.3956 27.3254 17.3401 27.3254H103.482C104.332 27.3254 105.087 27.9879 105.087 28.9344V37.7369C99.8925 38.8727 96.1143 43.5106 96.1143 49.0949C96.1143 54.5847 99.8925 59.2225 105.087 60.453V69.2554C105.087 70.1073 104.426 70.8645 103.482 70.8645H78.8293C79.4905 71.2431 80.1517 71.527 80.9073 71.811C81.663 72.0949 82.513 72.3789 83.3631 72.5682C83.552 72.6628 83.7409 72.6628 83.9298 72.6628C84.1187 72.6628 84.3076 72.7575 84.4021 72.7575C84.591 72.7575 84.8744 72.8521 85.0633 72.8521H85.1577C85.4411 72.8521 85.63 72.9468 85.9134 72.9468C86.0078 72.9468 86.0078 72.9468 86.1023 72.9468C86.1023 72.9468 86.1967 72.9468 86.1967 73.0414H103.576C105.654 73.0414 107.354 71.3377 107.354 69.2554V58.3707C102.348 58.1814 98.3812 54.0168 98.3812 49.0003C98.2868 43.9838 102.348 39.8192 107.26 39.6299Z"
                fill="#0868F3"
              />
              <path
                d="M67.9784 58.8438C65.0503 63.1977 68.734 59.5064 53.4326 72.6627C53.4326 72.6627 52.488 72.852 51.6379 72.852C50.6934 72.852 52.7714 72.852 46.0652 72.852L31.236 57.9919L37.3755 52.5969L30.9526 46.1607L32.0861 40.5763L36.1476 39.6298L37.6588 39.5352L43.1371 45.0249L49.1822 40.1977L67.9784 58.8438Z"
                fill="url(#paint1_linear_1871_26121)"
              />
              <path
                d="M68.6323 25.1484V27.3254C68.6323 27.6093 68.8212 27.7986 69.1046 27.7986C69.388 27.7986 69.5769 27.6093 69.5769 27.3254V25.1484H68.6323ZM69.1046 29.7863C68.8212 29.7863 68.6323 29.9756 68.6323 30.2595V32.4365C68.6323 32.7205 68.8212 32.9098 69.1046 32.9098C69.388 32.9098 69.5769 32.7205 69.5769 32.4365V30.2595C69.6713 29.9756 69.388 29.7863 69.1046 29.7863ZM69.1046 34.8974C68.8212 34.8974 68.6323 35.0867 68.6323 35.3707V37.5476C68.6323 37.8316 68.8212 38.0209 69.1046 38.0209C69.388 38.0209 69.5769 37.8316 69.5769 37.5476V35.3707C69.6713 35.1814 69.388 34.8974 69.1046 34.8974ZM69.1046 40.1032C68.8212 40.1032 68.6323 40.2925 68.6323 40.5764V42.7534C68.6323 43.0373 68.8212 43.2266 69.1046 43.2266C69.388 43.2266 69.5769 43.0373 69.5769 42.7534V40.5764C69.6713 40.2925 69.388 40.1032 69.1046 40.1032ZM69.1046 45.3089C68.8212 45.3089 68.6323 45.4982 68.6323 45.7822V47.9591C68.6323 48.2431 68.8212 48.4324 69.1046 48.4324C69.388 48.4324 69.5769 48.2431 69.5769 47.9591V45.7822C69.6713 45.4982 69.388 45.3089 69.1046 45.3089ZM69.1046 50.42C68.8212 50.42 68.6323 50.6093 68.6323 50.8933V53.1649C68.6323 53.4489 68.8212 53.6382 69.1046 53.6382C69.388 53.6382 69.5769 53.4489 69.5769 53.1649V50.9879C69.6713 50.704 69.388 50.42 69.1046 50.42ZM69.1046 55.6258C68.8212 55.6258 68.6323 55.8151 68.6323 56.0991V57.6135L69.1046 56.5723V58.8439C69.388 58.8439 69.5769 58.6546 69.5769 58.3707V56.1937C69.6713 55.8151 69.388 55.6258 69.1046 55.6258Z"
                fill="white"
                fillOpacity="0.3"
              />
              <path
                d="M69.1062 54.8691C69.1062 54.9638 68.9173 57.1407 68.9173 57.1407C68.7284 58.4658 68.1617 60.5482 67.1227 62.6305C67.1227 62.7251 67.0282 62.7251 67.0282 62.8198C66.9338 63.0091 66.8393 63.1984 66.7449 63.3877C66.6504 63.577 66.556 63.7663 66.3671 63.9556C66.2726 64.1449 66.0837 64.3342 65.9892 64.5235C63.0612 68.972 57.7718 72.4741 51.6323 72.8527C53.5214 70.9597 55.5049 68.0255 55.8827 64.3342C56.0716 62.5358 57.394 61.1161 59.1886 60.7375C62.4 60.0749 65.8948 57.8979 68.2561 55.6263C68.445 55.437 68.6339 55.2477 68.7284 55.0584C68.9173 54.9638 69.0118 54.8691 69.1062 54.8691Z"
                fill="url(#paint2_linear_1871_26121)"
              />
              <path
                d="M92.3351 63.6719L78.2615 63.7665C78.0726 63.7665 77.7893 63.9558 77.6948 64.1451C77.6948 64.2398 77.6948 64.2398 77.6948 64.3344C77.6948 64.6184 77.9782 64.9023 78.2615 64.9023L92.3351 64.8077C92.524 64.8077 92.8074 64.6184 92.9018 64.4291C92.9018 64.3344 92.9018 64.3344 92.9018 64.2398C92.9018 63.9558 92.7129 63.6719 92.3351 63.6719Z"
                fill="white"
                fillOpacity="0.3"
              />
              <path
                d="M78.1671 61.4952H89.3126C89.5015 61.4952 89.6904 61.4005 89.7849 61.2112C89.7849 61.1166 89.7849 61.1166 89.7849 61.0219V60.8326C89.7849 60.5487 89.596 60.3594 89.3126 60.3594H78.1671C77.9782 60.3594 77.7893 60.454 77.6948 60.6433C77.6948 60.738 77.6948 60.738 77.6948 60.8326V61.0219C77.6948 61.1166 77.7893 61.3059 77.8837 61.4005C77.9782 61.4005 78.0726 61.4952 78.1671 61.4952Z"
                fill="white"
                fillOpacity="0.3"
              />
              <path
                d="M78.1671 58.087H89.3126C89.5015 58.087 89.6904 57.9923 89.7849 57.803C89.7849 57.7084 89.7849 57.7084 89.7849 57.6137V57.4244C89.7849 57.1405 89.596 56.9512 89.3126 56.9512H78.1671C77.9782 56.9512 77.7893 57.0458 77.6948 57.2351C77.6948 57.3298 77.6948 57.3298 77.6948 57.4244V57.6137C77.6948 57.7084 77.7893 57.8977 77.8837 57.9923C77.8837 58.087 78.0726 58.087 78.1671 58.087Z"
                fill="white"
                fillOpacity="0.3"
              />
              <path
                d="M78.1678 54.6797H89.3133C89.5022 54.6797 89.6911 54.585 89.7856 54.3957C89.7856 54.3011 89.7856 54.3011 89.7856 54.2064V54.0171C89.7856 53.9225 89.6911 53.7332 89.5967 53.6385C89.5022 53.5439 89.4078 53.4492 89.2188 53.4492H78.0733C77.8844 53.4492 77.6955 53.5439 77.6011 53.7332C77.6011 53.8278 77.6011 53.8278 77.6011 53.9225V54.1118C77.6011 54.2064 77.6955 54.3957 77.79 54.4904C77.8844 54.6797 78.0733 54.6797 78.1678 54.6797Z"
                fill="white"
                fillOpacity="0.3"
              />
              <path
                d="M78.1671 51.2725H89.3126C89.5015 51.2725 89.6904 51.1779 89.7849 50.9886C89.7849 50.8939 89.7849 50.8939 89.7849 50.7993V50.61C89.7849 50.326 89.596 50.1367 89.3126 50.1367H78.1671C77.9782 50.1367 77.7893 50.2314 77.6948 50.4207C77.6948 50.5153 77.6948 50.5153 77.6948 50.61V50.7993C77.6948 51.0832 77.8837 51.2725 78.1671 51.2725Z"
                fill="white"
                fillOpacity="0.3"
              />
              <path
                d="M78.1678 47.8652H89.3133C89.5022 47.8652 89.6911 47.7706 89.7856 47.5813C89.7856 47.4866 89.7856 47.4866 89.7856 47.392V47.2027C89.7856 47.108 89.6911 46.9187 89.5967 46.8241C89.5022 46.7294 89.4078 46.6348 89.2188 46.6348H78.0733C77.8844 46.6348 77.6955 46.7294 77.6011 46.9187C77.6011 47.0134 77.6011 47.0134 77.6011 47.108V47.2973C77.6955 47.6759 77.8844 47.8652 78.1678 47.8652Z"
                fill="white"
                fillOpacity="0.3"
              />
              <path
                d="M78.17 44.5518H89.3155C89.5044 44.5518 89.6933 44.4572 89.7878 44.2679C89.7878 44.1732 89.7878 44.1732 89.7878 44.0786V43.8893C89.7878 43.6053 89.5989 43.416 89.3155 43.416H78.17C77.9811 43.416 77.7922 43.5107 77.6977 43.7C77.6977 43.7946 77.6977 43.7946 77.6977 43.8893V44.0786C77.6033 44.2679 77.8866 44.5518 78.17 44.5518Z"
                fill="white"
                fillOpacity="0.3"
              />
              <path
                d="M91.1956 61.3059C91.29 61.4005 91.3845 61.4952 91.5734 61.4952H92.4235C92.6124 61.4952 92.8013 61.4005 92.8958 61.2112C92.8958 61.1166 92.8958 61.1166 92.8958 61.0219V60.8326C92.8958 60.5487 92.7068 60.3594 92.4235 60.3594H91.5734C91.3845 60.3594 91.1956 60.454 91.1011 60.6433C91.1011 60.738 91.1011 60.738 91.1011 60.8326V61.0219C91.0067 61.0219 91.1011 61.2112 91.1956 61.3059Z"
                fill="white"
                fillOpacity="0.3"
              />
              <path
                d="M91.1956 57.8977C91.29 57.9923 91.3845 58.087 91.5734 58.087H92.4235C92.6124 58.087 92.8013 57.9923 92.8958 57.803C92.8958 57.7084 92.8958 57.7084 92.8958 57.6137V57.4244C92.8958 57.1405 92.7068 56.9512 92.4235 56.9512H91.5734C91.3845 56.9512 91.1956 57.0458 91.1011 57.2351C91.1011 57.3298 91.1011 57.3298 91.1011 57.4244V57.6137C91.0067 57.6137 91.1011 57.803 91.1956 57.8977Z"
                fill="white"
                fillOpacity="0.3"
              />
              <path
                d="M91.1962 54.4904C91.2907 54.585 91.3851 54.6797 91.574 54.6797H92.4241C92.613 54.6797 92.8019 54.585 92.8964 54.3957C92.8964 54.3011 92.8964 54.3011 92.8964 54.2064V54.0171C92.8964 53.9225 92.8019 53.7332 92.7075 53.6385C92.613 53.5439 92.5186 53.4492 92.3297 53.4492H91.4796C91.2907 53.4492 91.1018 53.5439 91.0073 53.7332C91.0073 53.8278 91.0073 53.8278 91.0073 53.9225V54.1118C91.0073 54.2064 91.1018 54.3957 91.1962 54.4904Z"
                fill="white"
                fillOpacity="0.3"
              />
              <path
                d="M91.4796 51.1788H92.3297C92.5186 51.1788 92.7075 51.0841 92.8019 50.8948C92.8019 50.8002 92.8019 50.8002 92.8019 50.7055V50.5162C92.8019 50.2323 92.613 50.043 92.3297 50.043H91.4796C91.2907 50.043 91.1018 50.1376 91.0073 50.3269C91.0073 50.4216 91.0073 50.4216 91.0073 50.5162V50.7055C91.0073 50.9895 91.1962 51.1788 91.4796 51.1788Z"
                fill="white"
                fillOpacity="0.3"
              />
              <path
                d="M91.4881 47.7695H92.3382C92.5271 47.7695 92.716 47.6749 92.8105 47.4856C92.8105 47.3909 92.8105 47.3909 92.8105 47.2963V47.107C92.8105 47.0123 92.716 46.823 92.6216 46.7284C92.5271 46.6337 92.4326 46.5391 92.2437 46.5391H91.3937C91.2047 46.5391 91.0158 46.6337 90.9214 46.823C90.9214 46.9177 90.9214 46.9177 90.9214 47.0123V47.2016C91.0158 47.5802 91.2047 47.7695 91.4881 47.7695Z"
                fill="white"
                fillOpacity="0.3"
              />
              <path
                d="M91.0073 43.8891C91.0073 44.1731 91.1962 44.3624 91.4796 44.3624H92.3297C92.5186 44.3624 92.7075 44.2677 92.8019 44.0784C92.8019 43.9838 92.8019 43.9838 92.8019 43.8891V43.6998C92.8019 43.4159 92.613 43.2266 92.3297 43.2266H91.4796C91.2907 43.2266 91.1018 43.3212 91.0073 43.5105C91.0073 43.6052 91.0073 43.6052 91.0073 43.6998V43.8891Z"
                fill="white"
                fillOpacity="0.3"
              />
              <path
                d="M78.1671 41.1445H89.3126C89.5015 41.1445 89.6904 41.0499 89.7849 40.8606C89.7849 40.7659 89.7849 40.7659 89.7849 40.6713V40.482C89.7849 40.3873 89.6904 40.198 89.596 40.1034C89.5015 40.0087 89.4071 39.9141 89.3126 39.9141H78.1671C77.9782 39.9141 77.7893 40.0087 77.6948 40.198C77.6948 40.2927 77.6948 40.2927 77.6948 40.3873V40.5766C77.6948 40.8606 77.8837 41.1445 78.1671 41.1445Z"
                fill="white"
                fillOpacity="0.3"
              />
              <path
                d="M78.17 37.7374H89.3155C89.5044 37.7374 89.6933 37.6427 89.7878 37.4534C89.7878 37.3588 89.7878 37.3588 89.7878 37.2641V37.0748C89.7878 36.7909 89.5989 36.6016 89.3155 36.6016H78.17C77.9811 36.6016 77.7922 36.6962 77.6977 36.8855C77.6977 36.9802 77.6977 36.9802 77.6977 37.0748V37.2641C77.6033 37.4534 77.8866 37.7374 78.17 37.7374Z"
                fill="white"
                fillOpacity="0.3"
              />
              <path
                d="M92.3297 39.8203H91.4796C91.2907 39.8203 91.1018 39.915 91.0073 40.1043C91.0073 40.1989 91.0073 40.1989 91.0073 40.2936V40.4829C91.0073 40.7668 91.1962 40.9561 91.4796 40.9561H92.3297C92.5186 40.9561 92.7075 40.8615 92.8019 40.6722C92.8019 40.5775 92.8019 40.5775 92.8019 40.4829V40.2936C92.8019 40.1989 92.7075 40.0096 92.613 39.915C92.5186 39.915 92.4241 39.8203 92.3297 39.8203Z"
                fill="white"
                fillOpacity="0.3"
              />
              <path
                d="M92.2437 36.4121H91.3937C91.2047 36.4121 91.0158 36.5068 90.9214 36.6961C90.9214 36.7907 90.9214 36.7907 90.9214 36.8854V37.0747C90.9214 37.3586 91.1103 37.5479 91.3937 37.5479H92.2437C92.4326 37.5479 92.6216 37.4533 92.716 37.264C92.716 37.1693 92.716 37.1693 92.716 37.0747V36.8854C92.8105 36.6961 92.5271 36.4121 92.2437 36.4121Z"
                fill="white"
                fillOpacity="0.3"
              />
              <path
                d="M78.1678 34.3301L92.2414 34.2354C92.4303 34.2354 92.7136 34.0461 92.8081 33.8568C92.8081 33.7622 92.8081 33.7622 92.8081 33.6675C92.8081 33.4782 92.7136 33.3836 92.6192 33.2889C92.5247 33.1943 92.3358 33.0996 92.2414 33.0996L78.1678 33.1943C77.9789 33.1943 77.6955 33.3836 77.6011 33.5729C77.6011 33.6675 77.6011 33.6675 77.6011 33.7622C77.6011 34.0461 77.8844 34.3301 78.1678 34.3301Z"
                fill="white"
                fillOpacity="0.3"
              />
              <path
                d="M34.2534 47.4864C35.4813 47.4864 36.7092 47.0131 37.6538 46.0666C38.5038 45.2147 39.0706 43.9843 39.0706 42.6592C39.0706 41.4287 38.5983 40.1983 37.6538 39.2518C36.8037 38.3053 35.5758 37.832 34.3479 37.832C33.12 37.832 31.8921 38.3053 30.9476 39.2518C29.0585 41.1448 29.0585 44.0789 30.9476 45.972C31.7976 47.0131 33.0255 47.4864 34.2534 47.4864ZM32.7422 41.2394C33.12 40.8608 33.6867 40.5769 34.2534 40.5769C34.8202 40.5769 35.3869 40.7662 35.7647 41.2394C36.6148 42.0913 36.6148 43.511 35.7647 44.3629C35.3869 44.7415 34.8202 45.0254 34.2534 45.0254C33.6867 45.0254 33.12 44.8361 32.7422 44.3629C32.3644 43.9843 32.081 43.4164 32.081 42.8485C32.081 42.1859 32.3644 41.618 32.7422 41.2394Z"
                fill="white"
              />
              <path
                d="M49.7347 41.2389C49.7347 40.7656 49.5457 40.2924 49.2624 40.0084C48.8846 39.6298 48.5068 39.5352 48.0345 39.5352C47.5622 39.5352 47.09 39.7245 46.8066 40.0084L31.2218 55.531C30.844 55.9096 30.7495 56.2882 30.7495 56.7615C30.7495 57.2347 30.9384 57.708 31.2218 57.9919C31.5996 58.3705 31.9774 58.4652 32.4497 58.4652C32.9219 58.4652 33.3942 58.2759 33.6776 57.9919L49.1679 42.4693C49.5457 42.1854 49.7347 41.7121 49.7347 41.2389Z"
                fill="white"
              />
              <path
                d="M49.5522 51.8397C48.7021 50.9878 47.4742 50.4199 46.2463 50.4199C45.0184 50.4199 43.7905 50.8932 42.846 51.8397C41.9015 52.7862 41.4292 53.922 41.4292 55.2471C41.4292 56.5722 41.9015 57.708 42.846 58.5598C43.7905 59.4117 44.924 59.9796 46.2463 59.9796C47.5687 59.9796 48.7021 59.5063 49.6466 58.5598C50.4967 57.6133 51.0634 56.4775 51.0634 55.1524C50.969 54.0166 50.4023 52.7862 49.5522 51.8397ZM47.7576 56.7615C47.3798 57.1401 46.813 57.424 46.2463 57.424C45.6796 57.424 45.1129 57.2347 44.7351 56.7615C43.885 55.9096 43.885 54.4899 44.7351 53.638C45.1129 53.2594 45.6796 52.9755 46.2463 52.9755C46.813 52.9755 47.3798 53.1648 47.7576 53.638C48.1354 54.0166 48.4188 54.5845 48.4188 55.1524C48.3243 55.815 48.1354 56.3829 47.7576 56.7615Z"
                fill="white"
              />
              <path
                d="M86.4982 72.8516C84.3258 70.58 82.4367 67.4566 82.0589 64.2385C81.87 62.4401 80.5477 61.0204 78.7531 60.6418C75.5416 59.9792 72.0469 57.8022 69.6855 55.5306C69.4966 55.3413 69.1188 54.8681 68.8354 54.7734C68.8354 54.8681 69.0244 57.045 69.0244 57.045C69.3077 59.222 70.4412 62.3455 71.9524 64.5224C74.6916 68.5924 78.8475 71.3372 83.1924 72.3784C83.6646 72.473 84.8925 72.757 84.987 72.757C85.0814 72.757 85.8371 72.8516 85.9315 72.8516C85.9315 72.8516 86.026 72.8516 86.026 72.9463H86.4982V72.8516Z"
                fill="url(#paint3_linear_1871_26121)"
              />
              <path
                d="M80.9175 71.7168C78.8395 70.8649 76.7616 69.5398 74.967 67.8361C74.6836 67.9308 74.4002 68.0254 74.1169 68.1201C73.5502 68.3094 72.9834 68.1201 72.7001 67.5522C72.1334 66.511 71.3777 64.9966 71.3777 64.9966L71.85 64.0501C70.811 62.4411 70.0554 60.7374 69.5831 58.939L69.0164 60.1695L68.2608 58.6551L61.8379 45.9719C61.7435 45.688 61.2712 45.688 61.1768 46.0666L60.2322 48.7168C59.7599 50.2312 59.8544 51.9349 60.61 53.3547L65.3327 62.725L66.4661 64.9966C66.4661 64.9966 65.7105 66.511 65.1438 67.5522C64.9549 67.9308 64.5771 68.1201 64.2937 68.1201C64.1048 68.1201 63.9159 68.1201 63.727 68.0254C63.6325 68.0254 63.6325 68.0254 63.5381 67.9308C62.688 67.5522 61.7435 67.5522 60.7989 67.7415C59.3821 68.0254 58.0598 68.8773 57.3042 70.297C57.3042 70.297 57.3042 70.297 57.3042 70.3917C55.9818 72.9472 57.0208 75.9761 59.4766 77.3012C59.9489 77.5851 60.5156 77.6798 61.0823 77.7744C63.1603 78.0584 65.2383 77.0172 66.2772 75.0296L68.9219 69.8238L69.4887 71.0542L71.4722 75.0296C71.4722 75.1242 71.5666 75.2189 71.5666 75.2189C72.889 77.5851 75.817 78.437 78.2728 77.2065C80.3508 76.26 81.3898 73.9884 80.9175 71.7168ZM63.727 73.7991C63.1603 74.9349 61.8379 75.3135 60.7989 74.7456C59.7599 74.1777 59.2877 72.8526 59.8544 71.8114C60.4211 70.7703 61.7435 70.297 62.7825 70.8649C63.8214 71.3382 64.2937 72.6633 63.727 73.7991ZM76.9505 74.7456C75.9115 75.3135 74.4947 74.8403 74.0224 73.7991C73.4557 72.7579 73.928 71.4328 74.967 70.8649C76.0059 70.297 77.4227 70.7703 77.895 71.8114C78.5562 72.8526 78.0839 74.1777 76.9505 74.7456Z"
                fill="#172D45"
              />
              <defs>
                <filter
                  id="filter0_d_1871_26121"
                  x="7.27141"
                  y="22.7895"
                  width="106.279"
                  height="60.2843"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="3.93162" />
                  <feGaussianBlur stdDeviation="3.1453" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.113725 0 0 0 0 0.294118 0 0 0 0 1 0 0 0 0.22 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1871_26121"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1871_26121"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1871_26121"
                  x1="13.5493"
                  y1="48.999"
                  x2="107.294"
                  y2="48.999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7CB0FF" />
                  <stop offset={1} stopColor="#3385FC" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1871_26121"
                  x1="35.4659"
                  y1="44.2851"
                  x2="58.1039"
                  y2="66.876"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3888FD" />
                  <stop offset={1} stopColor="#657EFF" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1871_26121"
                  x1="60.5736"
                  y1="62.7615"
                  x2="64.0745"
                  y2="67.2356"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7AB0FE" />
                  <stop offset={1} stopColor="#0868F3" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_1871_26121"
                  x1="79.4995"
                  y1="63.4995"
                  x2="75.4136"
                  y2="69.1185"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7AB0FE" />
                  <stop offset={1} stopColor="#0868F3" />
                </linearGradient>
              </defs>
            </svg>

          </div>
          <div className="sm:w-10/12 w-full">
            <div>
              <h2 className="font-semibold text-lg">Discount programs</h2>
              <p className="text-xs pt-2 text-white">
                Manage your DGMARQ Plus membership and your earnings in the Goldmine reflinks program.
              </p>
            </div>

            <div className="flex py-3 mt-4 items-center justify-between border-t">
              <div>
                <h4 className="text-sm font-semibold">DGMARQ Plus</h4>
                <ul className="flex gap-3 pt-2 items-center">
                  <li className="text-white text-xs">
                    Membership:
                  </li>
                  <li className="flex items-center gap-1">
                    <p className="bg-red-700 w-2 h-2 rounded-full"></p>
                    <span className="text-sm">Inactive</span>
                  </li>
                </ul>
              </div>
              <FaAngleRight className="text-white" />
            </div>

            <div className="flex py-4 mt-4 items-center justify-between border-t">
              <div>
                <h4 className="text-sm font-semibold">Goldmine reflinks</h4>
              </div>
              <FaAngleRight className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Settings;