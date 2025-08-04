import { Button } from '@/components/ui/button'
const Partnerships = () => {
    return (
        <>

            <section className=' py-12 '>

                <div className=' max-w-[1170px]  px-3 mx-auto'>
                    <span className=' text-[#F1521B] tracking-widest pb-6 text-sm uppercase leading-7'>.COM / Affiliate and Marketing Cooperation</span>
                    <h2 className=' text-white sm:text-6xl text-3xl font-bold      leading-tight uppercase'>Affiliate and Marketing Cooperation</h2>

                </div>

            </section>


            <section className=' pb-12 text-white'>

                <div className=' max-w-[1170px] my-10  flex   sm:flex-row flex-col gap-3  justify-between py-5 items-center mx-auto px-3'>

                    <div className=' sm:w-6/12 mx-auto w-12/12'>

                        <h1 className=' text-3xl uppercase font-semibold'>Affiliate publisher</h1>
                        <p className=' pt-4'>Do you have consistent traffic on your website? Do you have friends or followers that you want to recommend products to and get rewarded with commission? If you answered yes to any of the questions above, then a G2A affiliate partnership might be just what you are looking for!

                        </p>
                        <div className=' flex pt-2 justify-between items-center'>
                            <p className=' m-0 text-sm'>For website publishers:
                            </p>
                            <p className=' m-0 text-sm'>For G2A Goldmine affiliate partnership:

                            </p>
                        </div>

                        <div className=' flex   gap-3 pt-3'>
                            <Button className="bg-secondary px-8 rounded-sm text-white">Send a message</Button>
                            <Button className="bg-secondary px-8 rounded-sm text-white">Read more</Button>


                        </div>
                    </div>

                    <div className=' sm:w-6/12 mx-auto w-12/12'>
                       <img src="./images/goldmine.png" className='  mx-auto' alt='' /> 
                    </div>



                </div>



                <div className=' max-w-[1170px] mt-4 flex   sm:flex-row flex-col gap-3  justify-between py-5 items-center mx-auto px-3'>
                    <div className=' sm:w-6/12 mx-auto w-12/12'>
                        <img src='https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2020/06/influencers.png' className='  mx-auto' alt='' />
                    </div>
                    <div className=' sm:w-6/12 mx-auto w-12/12'>

                        <h1 className=' text-3xl uppercase font-semibold'>Influencers and content creators</h1>
                        <p>
                            G2A empowers the gaming community through partnerships and sponsorships with highly engaging content creators and influencers. Are you are a streamer, YouTuber or a gaming influencer? Excellent – let’s work together!


                        </p>


                        <div className=' flex   gap-3 pt-3'>
                            {/* <Button label={'Send a message'} className={' bg-secondary rounded-sm px-8 text-white'} /> */}
                            <Button className="bg-secondary px-8 rounded-sm text-white">Read More</Button>
                        </div>
                    </div>





                </div>


                <div className=' max-w-[1170px] mt-4 flex   sm:flex-row flex-col gap-3  justify-between py-5 items-center mx-auto px-3'>

                    <div className=' sm:w-6/12 mx-auto w-12/12'>

                        <h1 className=' text-3xl uppercase font-semibold'>Marketing partnerships
                        </h1>
                        <p>
                            Do you want to create or participate in G2A’s marketing campaigns? If you have talent and interest in engaging and entertaining users, contact us for more information.



                        </p>


                        <div className=' flex   gap-3 pt-3'>
                            {/* <Button label={'Send a message'} className={' bg-secondary rounded-sm px-8 text-white'} /> */}
                            <Button label={'Send  message'} className={' bg-secondary px-8 rounded-sm text-white'} />
                        </div>
                    </div>


                    <div className=' sm:w-6/12 mx-auto w-12/12'>
                        <img src={'https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2020/06/marketingpartnership.png'} className='  mx-auto' alt='' />
                    </div>




                </div>


                <div className=' max-w-[1170px] mt-4 flex   sm:flex-row flex-col gap-3  justify-between py-5 items-center mx-auto px-3'>
                    <div className=' sm:w-6/12 mx-auto w-12/12'>
                        <img src={'https://g2acowebproddata.blob.core.windows.net/g2acowebproddata/2020/06/partners_wall-690x400.jpg'} className='  mx-auto' alt='' />
                    </div>
                    <div className=' sm:w-6/12 mx-auto w-12/12'>

                        <h1 className=' text-3xl uppercase font-semibold'>Marketing partnerships
                        </h1>
                        <p>
                            Do you want to create or participate in G2A’s marketing campaigns? If you have talent and interest in engaging and entertaining users, contact us for more information.



                        </p>


                        <div className=' flex   gap-3 pt-3'>
                            {/* <Button label={'Send a message'} className={' bg-secondary rounded-sm px-8 text-white'} /> */}
                            <Button className="bg-secondary px-8 rounded-sm text-white">Send a message</Button>

                        </div>
                    </div>







                </div>

            </section>

        </>
    )
}

export default Partnerships
