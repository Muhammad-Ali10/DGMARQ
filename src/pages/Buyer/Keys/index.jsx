import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper";
import { Link } from "react-router-dom";
import { Base_url } from "../../../utils/Base_url";
import axios from "axios";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import { toast } from "react-toastify";

const Keys = () => {
  const { userInfo } = useSelector((state) => state.next);

  console.log(userInfo);
  
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    axios
      .get(`${Base_url}/checkout/getByUser/${userInfo?._id}`)
      .then((res) => {
        // Filter orders to include only those with available keys
        const ordersWithKeys = res?.data?.data.filter((order) =>
          order.productIds.some((product) => product.key)
        );
        setOrders(ordersWithKeys);
        setFilteredOrders(ordersWithKeys);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [userInfo]);

  useEffect(() => {
    let filtered = orders;

    if (searchTerm) {
      filtered = filtered.filter(
        (order) =>
          order._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.productIds.some((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    if (startDate && endDate) {
      filtered = filtered.filter((order) => {
        const orderDate = new Date(order.createdAt);
        return (
          orderDate >= new Date(startDate) && orderDate <= new Date(endDate)
        );
      });
    }

    if (sortOrder === "newest") {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortOrder === "oldest") {
      filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    setFilteredOrders(filtered);
  }, [searchTerm, startDate, endDate, sortOrder, orders]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
  const downloadPdf = (order) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`Product Key - ${order._id}`, 10, 10);

    doc.setFontSize(12);
    doc.text(`Order Status: ${order.status}`, 10, 20);
    doc.text(`Purchase Date: ${order.createdAt}`, 10, 30);

    order.productIds.forEach((product, index) => {
      const y = 40 + index * 20;
      doc.text(`Product: ${product.title}`, 10, y);
      doc.text(`Price: $${product.discountPrice}`, 10, y + 10);
      if (product.key) {
        doc.text(`Product Key: ${product.key}`, 10, y + 20);
      }
    });

    doc.save(`order_${order._id}.pdf`);

    axios.post(`${Base_url}/products/sendEmail`, {
      userId:userInfo._id,
      productId: order?.productIds?.[0]?._id,
    }).then((res)=>{
      console.log(res);
      if(res?.data?.status === "success"){
         toast.success(res?.data?.data?.message)
        
      }else{

      }
      
    }).catch((error)=>{
       console.log(error);
       
    })
  };

  return (
    <Wrapper>
      <div className=" sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-6xl">
          <h1 className='text-4xl font-bold'>Your Keys</h1>
          <div className="space-y-6 mt-5">
            <div className="flex justify-between flex-wrap items-center mb-4">
              <div className=" flex items-center gap-2">
                <label  className="font-semibold text-black">Search:</label>
                <input
                  type="text"
                  placeholder="Search: Order number, product name"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="p-3  w-64 border border-gray-300 rounded-md"
                />
              </div>
              <div className=" flex gap-5">
                <div className=" gap-2">
                  <label  className="font-semibold text-black">Start Date:</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    className="p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label  className="font-semibold text-black">End Date:</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    className="p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className=" flex gap-2 items-center ">
                  <label className=" font-semibold">Sort by:</label>
                  <div>
                    <select
                      value={sortOrder}
                      onChange={handleSortChange}
                      className="p-3 border border-gray-300 rounded-md"
                    >
                      <option value="newest">Newest first</option>
                      <option value="oldest">Oldest first</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            {filteredOrders?.map((item, index) => (
              <div
                key={index}
                className="rounded-sm  mb-2 bg-white shadow-sm"
              >
                <div className="px-6 bg-gray-100 flex justify-between items-center pt-4 pb-4">
                  <p className="m-0 text-lg">
                    Order number:
                    <b className="text-gray-400 text-sm">{item?._id}</b>
                  </p>
                  <p className="m-0 text-lg">
                    Order status:
                    <b className="text-gray-400 text-sm">{item?.status}</b>
                  </p>
                </div>
                <hr />
                <div className="space-y-4 md:flex md:justify-between md:gap-6 p-4 md:space-y-0">
                  <div className=" flex items-center gap-3  max-w-xl">
                    <div className=" w-32">
                      <a
                        href="#"
                        className=" border p-2  rounded-md"
                      >
                        <img
                          className=" w-full "
                          src={item?.productIds?.[0]?.images[0]}
                          alt="imac image"
                        />
                      </a>
                    </div>
                    <div>
                      <p className="  text-lg font-bold text-gray-900 ">
                        ${item?.productIds?.[0]?.title}
                      </p>
                      <button 
                        className=" mt-2  text-blue px-3   hover:bg-blue hover:text-white py-2 rounded-md border border-blue "
                        onClick={() => downloadPdf(item)}
                      >
                        Download PDF
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="text-end md:order-4">
                      <p className=" font-bold text-2xl flex items-center gap-2 text-gray-900 dark:text-white">
                        <p className=" text-gray-400 text-base">Total Payment:</p>
                        {item?.productIds?.[0]?.discountPrice} USD
                      </p>
                      <p className="text-[10px] text-gray-400 text-end">
                        Price includes VAT if applicable
                      </p>
                    </div>
                  </div>
                  <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <Link
                      to={`/product_details/${item?._id}`}
                      className="text-base font-medium text-gray-900 hover:underline "
                    >
                      {item?.title}
                    </Link>
                    <div className=" items-center gap-4">
                      <p className=" text-gray-400">Purchase date:</p>
                      <p>{item?.createdAt}</p>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Keys;