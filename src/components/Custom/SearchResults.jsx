import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ results }) => {
  return (
    <>
    {results?.length===0?null:
     <div className="absolute bg-white  right-0 shadow-lg rounded-lg  w-full mt-2 z-50">
     <div className="p-4">
       <h3 className="text-lg font-bold mb-4">Product Results</h3>
       <div className="flex flex-col overflow-y-auto  space-y-4 pb-2 scrollbar-thin scrollbar-thumb-gray-300">
         {results.map((product, index) => (
           <Link to={`/product-details/${product._id}`}
             key={index}
             className=" w-full   flex flex-row   border-b overflow-hidden shadow-sm"
           >
             <div className="block p-3 w-24 h-24 ">
               <img
                 src={product?.images?.[0]}
                 alt={product.name}
                 className="  w-full h-full rounded-lg  object-cover"
               />
             </div>
             <div className="p-2  w-full flex justify-between ">
               <div className="  w-96">
               <p className=" uppercase text-[12px]  text-gray-500 pb-1">OFFER from 1 seller</p>
               <p className="text-sm font-semibold truncate">{product.title}</p>
               </div>
               <p>
               {product.discountPrice ? (
                 <div>
                <p className="text-lg font-bold m-0 text-black">{product?.discountPrice}</p>

                   <p className="text-gray-500 line-through text-xs">
                     Rs.{product.actualPrice}
                   </p>
                 </div>
               ) : (
                 <p className="text-gray-800 font-bold text-sm">
                   Rs.{product.actualPrice}
                 </p>
               )}
               {product?.gst ?
              <button className=" w-10 text-[12px] rounded-md  text-red-500 bg-[#FAE9E7] border border-red-500">${product?.gst}</button> : null
            }
               </p>
             </div>
           </Link>
         ))}
       </div>
     
     </div>
   </div>
    }
   
    </>
    
  );
};

export default SearchResults;
