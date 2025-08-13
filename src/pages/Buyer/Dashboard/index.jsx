import React from 'react'
import { FaPlus, FaStar } from 'react-icons/fa'
import { PiShoppingCartSimpleFill } from 'react-icons/pi'
import { FaCircleDollarToSlot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { LuMessagesSquare } from 'react-icons/lu'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { useSelector } from 'react-redux'
import Wrapper from '../Wrapper'

const Dashboard = () => {
    const { userInfo } = useSelector((state) => state.next);
    console.log(userInfo);

    return (
        <>
            <Wrapper>
                <div className='flex sm:flex-row flex-col gap-7 mx-auto'>
                    <div className=' sm:w-7/12 w-full'>
                        <h1 className='text-4xl font-bold '>Dashboard</h1>
                        <div className='mt-5 bg-blue-4 rounded-md overflow-hidden'>
                            <div className=' border'>
                                <div className=' p-3 border-b'>
                                    <p className=' text-white text-lg font-semibold'>My keys</p>
                                </div>
                                <div className=' h-96 flex flex-col gap-5 justify-center items-center'>

                                    <div className=' text-center'>
                                        <h2 className=' text-white text-2xl pb-2 font-semibold'>Your collection is empty :(</h2>
                                        <div>
                                            <p className=' text-sm'>What are you waiting for?</p>
                                            <p className=' text-sm'>There are thousands of games on DGAMRQ.COM to choose from!
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <div className=' bg-blue-500 w-12 h-12 rounded-full flex justify-center items-center mx-auto mb-2'>
                                            <FaPlus color='white' />
                                        </div>
                                        <h3 className=' text-white font-semibold text-lg'>Browse more games</h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sm:w-5/12 w-full  h-screen flex justify-between flex-col'>

                        <div>

                            <div className=' flex  gap-4'>
                                <div className=' flex items-center gap-1'>
                                    <div className=' bg-blue w-12 h-12 rounded-full flex justify-center items-center mx-auto mb-2'>
                                        <PiShoppingCartSimpleFill color="white" size={25} />
                                    </div>
                                    <div>
                                        <h5 className='text-lg font-medium'>Buy products</h5>
                                        <p className=' text-sm'>on the marketplace</p>
                                    </div>
                                </div>

                                <div className=' flex items-center gap-1'>
                                    <div className=' bg-blue w-12 h-12 rounded-full flex justify-center items-center mx-auto mb-2'>
                                        <FaCircleDollarToSlot color="white" size={25} />
                                    </div>
                                    <div>
                                        <h5 className='text-lg font-medium'>Start selling</h5>
                                        <p className=' text-sm'>your stuff</p>
                                    </div>
                                </div>
                            </div>

                            <div className=' mt-12 p-4 flex w-full justify-between flex-col items-center bg-blue-4 border'>

                                <div>
                                    <div className=' flex justify-between items-center'>
                                        <div>
                                            <img src='https://res.cloudinary.com/dptwervy7/image/upload/v1754460024/logo-footer_gvmwjm.png' className=' w-32' alt='' />
                                        </div>
                                        <div className=' text-red-600 flex  items-center gap-2'>
                                            <IoMdCloseCircleOutline size={25} />
                                            inactive
                                        </div>
                                    </div>
                                    <p className=' pt-3 text-sm'>Join our membership program and enjoy special benefits.</p>

                                    <button className=' bg-blue-500 px-4 py-2 rounded-sm text-white font-semibold mt-5'>Discover DGMARQ</button>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className=' mt-5 bg-blue-4 rounded-md'>
                                <div className=' border'>
                                    <div className=' p-3 border-b flex justify-between items-center '>
                                        <p className=' text-white text-lg font-semibold'>My recent tickets</p>
                                        <Link to={''} className=' text-blue-500'>

                                            <p className=' text-sm font-semibold'>Show more</p>

                                        </Link>
                                    </div>
                                    <div className=' p-3 '>

                                        <div className=' px-3 py-2.5  rounded-sm bg-white'>

                                            <p className=' m-0 text-sm flex  items-center gap-2 text-black'> <FaStar color='black' />   Your ticket list is empty</p>

                                        </div>

                                    </div>


                                </div>

                            </div>

                            <div className=' mt-10 mb-20 gap-8 flex '>
                                <div className='bg-blue-4 border w-6/12 h-28 flex justify-center items-center'>
                                    <div>
                                        <div>
                                            <h5 className=' text-white flex  gap-2'><FaStar size={25} className='text-white' />  Everything ok?</h5>
                                        </div>
                                        <p className=' text-sm m-0 pt-2'>Rate the seller</p>
                                    </div>
                                </div>
                                <div className='bg-blue-4 border w-6/12 h-28 flex justify-center items-center'>
                                    <div>
                                        <div>
                                            <h5 className=' text-white flex  gap-2'>   <LuMessagesSquare size={25} className=' text-white' /> Need help?</h5>
                                        </div>
                                        <p className=' text-sm m-0 pt-2'>Check our Support Hub</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </Wrapper>
        </>
    )
}

export default Dashboard
