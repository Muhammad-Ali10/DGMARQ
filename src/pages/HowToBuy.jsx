import { Search } from "lucide-react";
import bgimage from '../assets/Supportbg.jpg'

const HowToBuy = () => {

    const cards = [
        { title: "Buying", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/4528ac63ec6c88c11d3ca92984748f85.png" },
        { title: "Digital Items", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/9e798bb562a8c832097696a9a659b07b.png" },
        { title: "Problem Solving", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/43219efae6cb2dee88e539c00e0764ca.png" },
        { title: "Payments", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/77c9e596bc4716ac7eb0e1291374bcc2.png" },
        { title: "Services", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/47944f7ae165db08219389854907658a.png" },
        { title: "GAccount", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/10fb2de61cb55320c16ea50d1885762f.png" },
        { title: "For Developers", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/329412f395822ed3826014651ecd830d.png" },
    ]; 

    return (
        <>
            <div
                className="bg-cover bg-support_bg bg-center sm:h-[55vh] h-[50vh]  text-white"
       style={{ backgroundImage: `url(${bgimage})` }}
            >
                <div className="h-full flex flex-col justify-center items-center  bg-opacity-50">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">How can we help you?</h1>

                    <div className=' px-3 w-full'>
                        <div className="w-full mx-auto relative max-w-2xl">
                            <input
                                type="text"
                                placeholder="Enter a keyword"
                                className="w-full px-4 py-3 pl-12 text-black text-md rounded shadow outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <div className=' absolute top-3.5 left-3'>
                                <Search color='black' size={20} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className=' flex sm:flex-row flex-col text-white'>
                <div className=' sm:w-8/12 w-12/12'>
                    <div className=' pt-5  w-10/12 mx-auto'>
                        <ul className=' flex items-center gap-2'>
                            <li className=' text-gray-500'>
                                Buyer FAQ
                            </li>
                            <li className=' text-gray-500'>
                                Buying
                            </li>
                            <li className=' text-white  font-semibold'>
                                How can I buy a digital item on G2A.COM?
                            </li>
                        </ul>



                        <h2 className=' pt-4 text-4xl font-semibold text-white'>How can I buy a digital item on G2A.COM?
                        </h2>


                        <div className=' py-5'>
                            <img src='https://i.ytimg.com/vi/Cf65D016_D8/hqdefault.jpg' className=' mx-auto' alt='' />
                        </div>


                        <p className=' text-sm'>You just found out about our website and you’re not sure how things work on G2A.COM? Look no further, here’s how you can buy a digital item on our marketplace!

                        </p>


                        <div className=' py-2'>

                            <h2 className=' text-white text-2xl font-semibold'>How do I search for digital items on G2A.COM?

                            </h2>
                            <p className=' pt-2 text-sm'>First, take a look around to figure out what you want to buy. Are you interested in a specific title? A gift card, perhaps? You can find everything you need using categories and/or the search bar on our main page G2A.COM.

                            </p>




                            <h2 className=' text-white text-2xl pt-3 font-semibold'>I found what I want to buy, what do I do now?



                            </h2>
                            <p className=' pt-2 text-sm'>Now that you’ve found what you were looking for, you should check the details of the item to make sure that you're getting the right version for the right platform and region. Read these articles to find out more:



                            </p>
                            <p className=' pt-2 text-sm'>All set? Awesome! Now, just add the item to your cart. You can either pick the Selected Offer (just click on the blue "Add to cart" button) or scroll down for a list of available offers where you can choose the best one by clicking the blue cart button right next to it.





                            </p>

                        </div>

                        <div className=' py-2'>
                            <img src='https://supporthub-prod.s3-eu-west-1.amazonaws.com/supporthub_gallery%2F2023%2F2%2F23%2F1760b1ba95cda1e6bb4d90d03e042a01.png' alt='' />
                        </div>
                        <div className=' py-2'>
                            <img src='https://supporthub-prod.s3-eu-west-1.amazonaws.com/supporthub_gallery%2F2023%2F2%2F23%2F8770468016d70d1a491bc12fe026969e.JPG' alt='' />
                        </div>

                        <div className=' py-2'>
                            <p>You can also decide to purchase with the G2A Plus discount by clicking on the "Subscribe and buy" or "Buy with G2A Plus", if you wish to get an even lower price thanks to our membership program.

                            </p>
                        </div>


                        <div className=' py-2'>
                            <img src='https://supporthub-prod.s3-eu-west-1.amazonaws.com/supporthub_gallery%2F2023%2F2%2F23%2F1760b1ba95cda1e6bb4d90d03e042a01.png' alt='' />
                        </div>


                        <div className=' py-4'>
                            <div className=' px-4 border bg-gray-100 py-8 flex justify-between items-center'>
                                <h2 className='text-black font-semibold text-2xl'>Was this helpfull?</h2>

                                <div className=' flex gap-2 items-center'>
                                    <button className=' bg-white border border-blue-500 px-4 text-sm text-blue-500 rounded-sm py-1'>Yes</button>
                                    <button className=' bg-white border border-blue-500 px-4 text-sm text-blue-500 rounded-sm py-1'>No</button>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
                <div className=' sm:w-4/12 w-12/12'>
                    <div className=' pt-3 h-full  border-l p-4'>
                        <h1 className=' text-2xl pt-4 font-semibold text-center'>Search by category</h1>

                        <div className='  grid grid-cols-2 pt-3'>
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center  p-3 gap-2 justify-start   rounded-md hover:shadow-lg transition"
                                >
                                    <img
                                        src={card.icon}
                                        alt={card.title}
                                        className="w-14 h-14"
                                    />
                                    <h4 className=" font-normal">{card.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowToBuy