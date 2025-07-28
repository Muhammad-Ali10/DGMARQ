import { Link } from "react-router-dom"


const Footer = () => { 
    return (
        <div className="flex flex-col w-full  text-white">
            <div className=" w-full py-10 bg-[#07173D] ">
            <div className="max-w-1260  flex flex-col md:flex-row justify-between items-center w-full m-auto">
                <h3 >Payment methods:</h3>
                <img src="./images/payments.png" alt="payments" className="w-full max-w-[460px]" />
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 max-w-1260 p-5 md:py-6 xl:py-13 m-auto">
                <div className="flex flex-col">
                    <h3 className="text-base font-poppins font-semibold uppercase pb-4">About</h3>
                    <Link to="/about-company" className="font-poppins font-normal text-sm leading-7 underline ">Company</Link>
                    <Link to="/marketplace" className="font-poppins font-normal text-sm leading-7 underline ">Marketplace</Link>
                    <Link to="/security" className="font-poppins font-normal text-sm leading-7 underline ">Security</Link>
                    <Link to="/careers" className="font-poppins font-normal text-sm leading-7 underline ">Careers</Link>
                    <Link to="/contactus" className="font-poppins font-normal text-sm leading-7 underline ">Contact</Link>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-base font-poppins font-semibold uppercase pb-4">For buyers</h3>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">Buyer support</Link>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">How to buy</Link>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">Buy with DGMARQ Plus</Link>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">Earn ith DGMARQ Goldmine</Link>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">Gaming news  </Link>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-base font-poppins font-semibold uppercase pb-4">For Seller</h3>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">Seller support</Link>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">How to Sell</Link>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">Import via API</Link>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">Try out DGMARQ Ads</Link>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">Partnership program</Link>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">Creator Partnership</Link>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-base font-poppins font-semibold uppercase pb-4">Support</h3>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">Terms and conditions</Link>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">Privacy and cookie Policy</Link>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">Digital Services Act</Link>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">Refund Policy</Link>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">Category map </Link>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">Creator Partnership</Link>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-base font-poppins font-semibold uppercase pb-4">Media</h3>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline "><span className="no-underline">DGMARQ</span> News - gaming and trends</Link>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline "><span className="no-underline">DGMARQ</span>insights - business and tech</Link>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">Press releases</Link>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">Media Partnership</Link>
                    <Link to="/" className="font-poppins font-normal text-sm leading-7 underline ">Corporate site</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer