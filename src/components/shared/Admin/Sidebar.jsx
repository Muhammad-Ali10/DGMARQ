import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";
const Sidebar = ({ side, closeSidebar }) => {
  return (
    <div
      className={` shadow-xl fixed top-20  sm:left-0 w-20 overflow-x-auto h-screen bg-[#000] z-10 transition-all`}
    >
      <i
        className="bi bi-x-lg absolute text-black top-4 right-4 sm:hidden block cursor-pointer text-lg"
        onClick={closeSidebar}
      ></i>
    
      <ul className=" pt-5 mx-2  m-0">
        <li className=" cursor-pointer">
         
        
          <Link to="/dashboard" className="text-lg capitalize">
             <div className=" w-10 h-10 text-white rounded-md bg-blue-500 flex  justify-center items-center">
             <svg

  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  fill="currentColor"
  css=""
>
  <path
    d="M6 22a1 1 0 100-2 1 1 0 000 2zm14 0a1 1 0 100-2 1 1 0 000 2zm1.238-12.19L20 16H6L4 1H1m3.667 5H13"
    stroke="currentColor"
    strokeWidth={2}
    strokeMiterlimit={10}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />
  <path
    d="M16.529 4.47a.75.75 0 10-1.06 1.06l2 2a.748.748 0 001.06 0l5-5a.75.75 0 00-1.06-1.06l-4.47 4.47-1.47-1.47z"
    fill="currentColor"
  />
  <path
    d="M23.099 6.02a1 1 0 00-1.18.78 4 4 0 11-3.12-4.72 1 1 0 00.4-1.961 6 6 0 104.68 7.081 1.001 1.001 0 00-.78-1.18z"
    fill="currentColor"
  />
</svg>

             </div>
             <p className=" m-0 text-white text-[13px]">Buying</p>
          </Link>
        </li>

        <li className=" pt-5 cursor-pointer">
         
        
          <Link to="/settings" className="text-lg capitalize">
             <div className=" w-10 h-10 text-white rounded-md bg-[rgba(33,33,33,0.8)]  flex  justify-center items-center">
             <svg
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  css=""
>
  <path
    d="M20.417 23H3v-2.58c0-1.4.79-2.68 2.047-3.292 1.468-.715 3.707-1.461 6.661-1.461 2.955 0 5.194.746 6.662 1.46a3.655 3.655 0 012.047 3.293V23zM16.75 6.042c0 2.784-2.257 5.958-5.042 5.958-2.784 0-5.041-3.174-5.041-5.958a5.041 5.041 0 1110.083 0z"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeMiterlimit={10}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>


             </div>
             <p className=" m-0 text-white text-[13px]">Account</p>
          </Link>
        </li>
      
      


       



      </ul>
      {side==='left-64 md:left-0'?
       <div className=" fixed  w-52 left-20 flex justify-between flex-col pb-5  h-screen bg-[#212121] top-0">
          

          <div>
          <ul className=" mt-28">
            <li className=" w-full bg-blue-500 py-3">
                <Link to={'/dashboard'} className=" px-3  text-white">
                    Dashboard
                </Link>
            </li>
          </ul>


          <ul className=" mt-10">
            <li className=" px-3">
                <p className=" text-gray-500 text-sm">ORDERS</p>
            </li>
            <li className=" w-full py-3">
                <Link to={'/keys'} className=" px-3  text-white">
                    Your keys
                </Link>
            </li>
            <li className=" w-full py-3">
                <Link to={'/order-history'} className=" px-3  text-white">
                    Order history
                </Link>
            </li>
            {/* <li className=" w-full py-3">
                <Link to={''} className=" px-3  text-white">
                    Rate transactions
                </Link>
            </li> */}
          </ul>
          </div>
          <Link to={`https://seller.dgmarq.com/seller-verification`} className=" mx-2.5">
            <button className="   capitalize border text-gray-300  w-full  border-gray-500 text-sm flex items-center  justify-between  px-4 py-3 rounded-md">become a seller <TbLogout size={25} className="" />            </button>
          </Link>
       </div>:null
      }
     
    </div>
  );
};
export default Sidebar;
