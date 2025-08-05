import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Base_url } from '../utils/Base_url';
import { toast } from 'react-toastify';
import { PayPalCheckout } from "@/components"

const Checkout = () => {
    const productData = useSelector((state) => state?.next?.productData);
    const { userInfo } = useSelector((state) => state.next);
    const navigate = useNavigate();

    const [email, setEmail] = useState(userInfo?.email || '');
    const [firstName, setFirstName] = useState(userInfo?.firstName || '');
    const [lastName, setLastName] = useState(userInfo?.lastName || '');
    const [phoneNumber, setPhoneNumber] = useState(userInfo?.phoneNumber || '');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [apartment, setApartment] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('paypal');
    const [loading, setLoading] = useState(false);

    const productPrice = productData?.map(item => item?.price * item?.quantity);
    const totalPriceAfterDiscount = productPrice?.reduce((acc, price) => acc + price, 0);

    const orderParams = {
        userId: userInfo?._id,
        productIds: productData?.map(item => item._id),
        email,
        firstName,
        lastName,
        phoneNumber,
        totalPrice: totalPriceAfterDiscount,
        delivery: {
            country,
            address,
            apartment,
            city,
            postalCode,
        },
        paymentMethod,
    };

    const OrderPlace = () => {
        setLoading(true);
        axios.post(`${Base_url}/checkout/create`, orderParams)
            .then((res) => {
                if (res?.data?.status === 'success') {
                    toast.success(res?.data?.message);
                    navigate('/');
                } else {
                    toast.error(res?.data?.message || 'Checkout failed');
                }
            })
            .catch((error) => {
                console.error('Order Error:', error);
                toast.error('Checkout failed');
            })
            .finally(() => setLoading(false));
    };

    return (
        <>
            <section className="bg-white py-8 dark:bg-gray-900 md:py-16">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-semibold text-gray-900 dark:text-white text-xl">Payment methods</h2>
                    </div>

                    <div className="lg:flex gap-6">
                        <div className="w-full lg:max-w-2xl xl:max-w-3xl">
                            <div className="p-4 border rounded-md space-y-6">
                                <div className="text-gray-400 flex items-center gap-2">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 16a3 3 0 006 0"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7V6a5 5 0 00-5-5H12a5 5 0 00-5 5v1"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2v-8a2 2 0 00-2-2z"></path>
                                    </svg>
                                    All transactions are processed securely via external providers.
                                </div>

                                <ul className="border rounded-md">
                                    <li className="border-b flex items-center gap-2 p-3">
                                        <input type="radio" className="w-5 h-5" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                                        {/* <img src={require('../../assets/images/visa.png')} className="w-14" alt="Visa" />
                    <img src={require('../../assets/images/mastercard.png')} className="w-20" alt="MasterCard" /> */}
                                    </li>
                                    <li className="flex items-center gap-2 p-3">
                                        <input type="radio" className="w-5 h-5" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} />
                                        {/* <img src={paypalLogo} className="w-20" alt="PayPal" /> */}
                                        <span className="text-gray-500 text-sm">Pay with PayPal</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full mt-6 lg:mt-0 lg:w-[50%]">
                            <div className="space-y-4 border p-4 bg-white rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-between text-base text-gray-900 dark:text-white">
                                    <span>Subtotal</span>
                                    <span>${totalPriceAfterDiscount.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-base text-gray-900 dark:text-white border-t pt-2">
                                    <span>Payment fee</span>
                                    <span>$0.11</span>
                                </div>
                                <div className="flex justify-between font-bold text-lg border-t pt-2">
                                    <span>Total</span>
                                    <span>${(totalPriceAfterDiscount + 0.11).toFixed(2)}</span>
                                </div>

                                {/* Conditional PayPal or Button */}
                                {paymentMethod === 'paypal' ? (
                                    <PayPalCheckout
                                        orderData={orderParams}
                                        onSuccess={() => {
                                            toast.success("Order placed via PayPal");
                                            navigate("/");
                                        }}
                                    />
                                ) : (
                                    <button
                                        onClick={OrderPlace}
                                        disabled={loading}
                                        className="w-full py-2.5 bg-blue text-white rounded-md font-medium hover:bg-secondary"
                                    >
                                        {loading ? 'Placing Order...' : 'Place Order'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Checkout;