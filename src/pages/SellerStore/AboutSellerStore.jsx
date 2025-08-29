import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { Base_url } from '../../utils/Base_url';
import axios from 'axios';

const AboutSellerStore = () => {


  const { id } = useParams();
  const [getSeller, setGetSeller] = useState({});
  const [details,setDetails] = useState({});
  const fetchSellers = () => {
    axios.get(`${Base_url}/seller/get/${id}`)
      .then((res) => {
        console.log(res);
        setGetSeller(res?.data?.data);

        setDetails(JSON.parse(res?.data?.data?.bankDetails))

      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchSellers();
  }, [])

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    const [layout, setLayout] = useState("listing");
  
    const products = [
      {
        id: 1,
        image:
          "https://images.g2a.com/170x228/1x1x0/webroot-secureanywhere-antivirus-1-device-global-key-pc-1-year/1a398a92a262426f8b24f8f8",
        title: "Webroot SecureAnywhere AntiVirus 1 Device",
        price: "1.95",
        originalPrice: "37.00",
        discount: "95",
        offerLabel: "OFFER FROM 6 SELLERS",
        isSponsored: false,
      },
      {
        id: 2,
        image:
          "https://images.g2a.com/170x228/1x1x0/call-of-duty-modern-warfare-ii-burger-king-operator-skin-1-hour-2xp-call-of-duty-official-key-global/8c00f53c7bda42c587cb94bb",
        title: "Call of Duty: Modern Warfare II - Burger King Operator Skin",
        price: "0.50",
        originalPrice: "42.39",
        discount: "99",
        offerLabel: "OFFER FROM 26 SELLERS",
        isSponsored: false,
      },
      {
        id: 3,
        image:
          "https://images.g2a.com/170x228/1x1x0/coreldraw-2021-standard-1-pc-lifetime-corel-key-global/d5b7a4406aed49ec8c308045",
        title: "CorelDRAW 2021 Standard (1 PC, Lifetime)",
        price: "1.66",
        originalPrice: "375.43",
        discount: "99",
        offerLabel: "OFFER FROM 14 SELLERS",
        isSponsored: false,
      },
      {
        id: 4,
        image:
          "https://images.g2a.com/170x228/1x1x0/steam-gift-card-10-usd-steam-key-global/5911ec005bafe3cffe1bad14",
        title: "Steam Gift Card 10 USD - Steam Key",
        price: "12.23",
        originalPrice: "0",
        discount: "0",
        offerLabel: "",
        isSponsored: true,
      },
      {
        id: 5,
        image:
          "https://images.g2a.com/170x228/1x1x0/playstation-network-gift-card-10-usd-psn-key-united-states/8d1b0a14cb3442be8979328e",
        title: "PlayStation Network Gift Card 10 USD",
        price: "11.08",
        originalPrice: "21.14",
        discount: "47",
        offerLabel: "",
        isSponsored: true,
      },
      {
        id: 6,
        image:
          "https://images.g2a.com/170x228/1x1x0/infraspace-pc-steam-key-global/ce1430957c934b7a8c858cbb",
        title: "InfraSpace (PC) - Steam Key - GLOBAL",
        price: "0.62",
        originalPrice: "21.14",
        discount: "97",
        offerLabel: "OFFER FROM 15 SELLERS",
        isSponsored: false,
      },
    ];
  return (
    <div>
       <div className=" pt-5 max-w-7xl mx-auto text-white">
         
         <h1 className="text-4xl font-bold ">About Sellers</h1>

         <ul className=' p-0 flex w-96 flex-col gap-3 pt-4'>
            <li className=' flex justify-between items-center '>
              <p className=' text-gray-400 m-0'>Company name:</p>
              <span>{getSeller?.companyName}</span>
            </li>
            <li className=' flex justify-between items-center '>
              <p className=' text-gray-400 m-0'>Email:</p>
              <span>{getSeller?.email}</span>
            </li>
            <li className=' flex justify-between items-center '>
              <p className=' text-gray-400 m-0'>Phone:</p>
              <span>{getSeller?.registrationNumber}</span>
            </li>
            <li className=' flex justify-between items-center '>
              <p className=' text-gray-400 m-0'>City:</p>
              <span>{details?.city}</span>
            </li>
            <li className=' flex justify-between items-center '>
              <p className=' text-gray-400 m-0'>Country:</p>
              <span>{details?.nationality}</span>
            </li>
           
            <li className=' flex justify-between items-center '>
              <p className=' text-gray-400 m-0'>Address:</p>
              <span>{details?.address}</span>
            </li>
         </ul>

          
        </div>

      
    </div>
  )
}

export default AboutSellerStore
