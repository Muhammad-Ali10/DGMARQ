import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Base_url } from '../utils/Base_url'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { addToCart } from '../store/productSlice'
import { toast, ToastContainer } from 'react-toastify'
import { ShoppingCart, Trash } from 'lucide-react';

const Wishlist = () => {


    const dispatch = useDispatch();
    const [wishList, setWishList] = useState([]);

    const { userInfo } = useSelector((state) => state.next);
    console.log(userInfo);

    useEffect(() => {

        axios.get(`${Base_url}/wishlist/get/${userInfo?._id}`).then((res) => {

            console.log(res);


            setWishList(res?.data)

        }).catch((error) => {


            console.log(error);


        })

    }, [])



    const removeFunction = (user, product) => {

        console.log(user, product);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#A47ABF",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {

                axios
                    .post(`${Base_url}/wishlist/remove`, {
                        productId: product,
                        userId: userInfo?._id,
                    })
                    .then((res) => {

                        console.log(res);
                        if (res.status === 200) {
                            Swal.fire("Deleted!", "Your file has been deleted.", "success");
                            axios.get(`${Base_url}/wishlist/get/${userInfo?._id}`).then((res) => {

                                console.log(res);


                                setWishList(res?.data)

                            }).catch((error) => {


                                console.log(error);


                            })

                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        });
    };

    return (
        <>
            <div className=" py-8 px-4 lg:px-16">
                <div className=' sm:w-9/12 w-full mx-auto'>
                    {/* Wishlist Header */}
                    <div className="mb-6">
                        <h1 className="text-4xl font-bold text-white font-poppins pt-4 text-center">Your Favorite Items</h1>
                        <p className="text-sm text-white font-semibold  capitalize  font-poppins mt-1 text-center">There is {wishList?.length} Products in this list</p>
                    </div>
                    {wishList?.map((item, index) => {
                        return (

                            < div className="bg-blue-4 rounded-21  h-56 gap-12 rounded-lg shadow-sm flex flex-row items-center justify-between p-4 mt-2.5 text-white" >
                                {/* Item Details */}
                                < Link to={`/product-details/${item?._id}`} className="flex h-full w-2/12 items-center space-x-4" >
                                    {/* Thumbnail */}
                                    < img
                                        src={item?.images[0]}
                                        alt="Game Thumbnail"
                                        className=" w-full  h-full rounded-md object-cover object-center"
                                    />


                                </Link>

                                {/* Item Actions */}
                                <div className=" items-center flex flex-col justify-between  h-full sm:w-10/12 w-full">
                                    <div className=' flex flex-row w-full justify-between'>
                                        <h2 className="text-3xl tracking-tight font-poppins font-semibold ">
                                            {item?.title}
                                        </h2>
                                        <p className="text-3xl tracking-tight font-poppins font-semibold max-w-28 w-full">{item?.discountPrice} USD</p>

                                    </div>
                                    <div className=' flex w-full justify-between items-center'>
                                        <span className=' text-gray-500'>
                                            OFFERS FROM 31 SELLERS
                                        </span>
                                        <div className=' flex items-center'>
                                            <button onClick={() => {
                                                dispatch(
                                                    addToCart({

                                                        _id: item?._id,
                                                        image: item?.images[0],
                                                        description: item?.description,
                                                        title: item?.title,
                                                        quantity: 1,
                                                        price: item?.discountPrice,
                                                        gst: item?.gst,
                                                        actualPrice: item?.actualPrice
                                                    })
                                                )

                                                toast.success('Product add to cart successfuly!')
                                            }} className=" text-white text-sm px-4 py-2 rounded-full flex items-center space-x-2 ">

                                                <div className=' bg-blue-3 w-12 h-12 rounded-full flex justify-center items-center'>
                                                    <ShoppingCart />
                                                </div>
                                            </button>


                                            <button onClick={() => removeFunction(item?.userId, item?._id)} className="bg-blue-3 text-white text-sm  w-12 h-12 flex justify-center  items-center rounded-full hover:bg-gray-300">
                                                <Trash />
                                            </button>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        )
                    })}

                </div >
            </div >
        </>
    )
}

export default Wishlist
