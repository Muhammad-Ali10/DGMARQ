import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decreaseQuantity, deleteProduct, increaseQuantity } from '../store/productSlice';



const Cart = () => {
  const productData = useSelector((state) => state?.next?.productData);

  console.log("Product Data:", productData);
  const dispatch = useDispatch();




  const productPrice = productData?.map((item) => item?.price * item?.quantity);
  console.log(productPrice);

  const totalPriceAfterDiscount = productPrice?.reduce((acc, price) => acc + price, 0);

  console.log("Total Price After Discount:", totalPriceAfterDiscount);


  return (
    <>

      <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className=' flex   justify-between items-center'>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-3xl">Your  cart</h2>

            <div className=' flex gap-2 items-center'>
              <p className=' m-0 text-sm flex gap-2 items-center'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={20}
                  height={20}
                  fill="currentColor"
                  color="#2F82FB"
                >
                  <g
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <circle cx={12} cy={12} r={11} fill="none" strokeMiterlimit={10} />
                    <path fill="none" strokeMiterlimit={10} d="M12 11v6" />
                    <circle data-stroke="none" cx={12} cy={7} r={1} stroke="none" />
                  </g>
                </svg>

                Complete the order - adding products to the cart does not mean booking.
              </p>
            </div>
          </div>

          <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div class="space-y-6">
                {productData?.map((item, index) => {
                  return (
                    <>
                      <div class="rounded-sm border border-gray-200 bg-white  shadow-sm dark:border-gray-700 dark:bg-gray-800">

                        <div className='px-6 flex  justify-between items-center pt-4 pb-4'>

                          <p className=' m-0 text-[11px]'>You are buying from <b>Beegamers</b></p>
                          <p className=' text-[11px]'>By buying from this seller you accept their <b>Terms & conditions</b>
                          </p>

                        </div>
                        <hr />
                        <div class="space-y-4 md:flex  md:justify-between md:gap-6  p-4 md:space-y-0">
                          <a href="#" class="shrink-0 md:order-1 border p-2 rounded-md">
                            <img class="h-40 w-32 dark:hidden" src={item?.image} alt="imac image" />
                          </a>


                          <div class="flex items-center justify-between md:order-3 md:justify-end">
                            <div class="flex items-center">
                              <button onClick={() => dispatch(decreaseQuantity({
                                _id: item._id,
                                quantity: 1
                              }))} type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                </svg>
                              </button>
                              <input type="text" id="counter-input" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value={item?.quantity} required />
                              <button onClick={() => dispatch(increaseQuantity({
                                _id: item._id,
                                quantity: 1
                              }))} type="button" id="increment-button" data-input-counter-increment="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                              </button>
                            </div>
                            <div class="text-end md:order-4 md:w-32">
                              <p class="text-base font-bold text-gray-900 dark:text-white">${item?.quantity*item?.price}</p>
                              <p className=' text-[10px]  text-gray-400 text-end'>VAT inc. if applicable</p>
                            </div>
                          </div>

                          <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            <Link to={`/product_details/${item?._id}`} class="text-base font-medium text-gray-900 hover:underline dark:text-white">{item?.title}</Link>

                            <div class="flex items-center gap-4">
                              {/* <button type="button" class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                    <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                    </svg>
                    Add to Favorites
                  </button> */}

                              <button onClick={() => dispatch(deleteProduct(item._id))} type="button" class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                </svg>
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className=' px-6 pt-4 pb-4'>
                          <p className=' text-blue-500 font-semibold text-sm'>Buy more from this seller</p>
                        </div>
                      </div>
                    </>
                  )
                })}


              </div>


              <div className=' mt-8 flex  gap-8'>
                <div className=' flex gap-1'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={20}
                    height={20}
                    fill="currentColor"
                    color="#41C303"
                    style={{ marginRight: 10 }}
                  >
                    <g
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      strokeMiterlimit={10}
                    >
                      <path d="M4 3.5A2.587 2.587 0 016.667 1C10.611 1 12 6 12 6H6.667A2.587 2.587 0 014 3.5zM17.333 6H12s1.389-5 5.333-5A2.587 2.587 0 0120 3.5 2.587 2.587 0 0117.333 6zM21 13v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8" />
                      <path d="M1 6h22v4H1zM12 6v17" />
                    </g>
                  </svg>

                  <div>
                    <h2 className=' font-medium'>GIVE AS A GIFT</h2>
                    <p className=' text-sm text-gray-400'>Buy a product and get a ready-to-download gift PDF.  <Link className=' text-blue-500'>Check how it works</Link> </p>
                  </div>
                </div>

                <div className=' flex gap-1'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    width={20}
                    height={20}
                    color="#41C303"
                    style={{ marginRight: 10 }}
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      strokeWidth={2}
                      d="M19 11H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2v-8a2 2 0 00-2-2z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      strokeWidth="1.5"
                      d="M9 16a3 3 0 006 0"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      strokeWidth={2}
                      d="M17 7V6a4.95 4.95 0 00-4.9-5H12a4.95 4.95 0 00-5 4.9V7"
                    />
                  </svg>

                  <div>
                    <h2 className=' font-medium'>EASY & SECURE PAYMENTS</h2>
                    <p className=' text-sm text-gray-400 flex  gap-3'>  <div className=' flex  gap-2'>
                      <img src='https://www.g2a.com/static/assets/payment-wall-credit-cards/visa.svg' className=' w-7' alt='' />
                      <img src='https://www.g2a.com/static/assets/payment-wall-credit-cards/mastercard.svg' className=' w-7' alt='' />
                      <img src='https://www.g2a.com/best-deals/static/static/assets/payment-methods/paypal2.svg' className=' w-10' alt='' />
                    </div>  and 30+ more</p>
                  </div>
                </div>
              </div>

            </div>

            <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div class="space-y-4 rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p class="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

                <div class="space-y-8 mt-4">


                  <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                    <dd class="text-base font-bold text-gray-900 dark:text-white">${totalPriceAfterDiscount}</dd>
                  </dl>
                </div>

                <Link to="/checkout" class="flex w-full items-center bg-blue justify-center rounded-md  bg-blue-500 px-5 py-2.5 text-sm font-medium text-white   hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to payment</Link>

                <div class="flex items-center justify-center gap-2">
                  <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                  <Link to="/" title="" class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                    Continue Shopping
                    <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </Link>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Cart
