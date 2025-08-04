import React from 'react'
import { Search } from 'lucide-react'
import {PopularTopics} from "@/components"
import { Button } from '@/components/ui/button'
import bgimage from '../../assets/Supportbg.jpg'
import { Input } from '@/components/ui/input'
const BuyerSupport = () => {

    const cards = [
        { title: "Buying", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/4528ac63ec6c88c11d3ca92984748f85.png" },
        { title: "Digital Items", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/9e798bb562a8c832097696a9a659b07b.png" },
        { title: "Problem Solving", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/43219efae6cb2dee88e539c00e0764ca.png" },
        { title: "Payments", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/77c9e596bc4716ac7eb0e1291374bcc2.png" },
        { title: "G2A Services", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/47944f7ae165db08219389854907658a.png" },
        { title: "G2A Account", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/10fb2de61cb55320c16ea50d1885762f.png" },
        { title: "For Developers", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/329412f395822ed3826014651ecd830d.png" },
      ];


      const cards2 = [
        { title: "How to contact the seller?", icon: "https://i.ytimg.com/vi/mu-YHtwTawc/sddefault.jpg" },
        { title: "I purchased a digital item- how I claim it?", icon: "https://i.ytimg.com/vi/q0ikwOb_i30/sddefault.jpg" },
      ];

  return (
    <>

     <div
      className="bg-cover bg-center sm:h-[70vh] h-[50vh] text-white"
       style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="h-full flex flex-col justify-center items-center bg-black/50 bg-opacity-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">How can we help you?</h1>
        <div className="flex  mb-8">
          <button className="px-6 py-2 bg-white text-black    hover:bg-gray-100">
            I'm buying
          </button>
          <button className="px-6 py-2  border  text-white    bg-transparent hover:bg-white  hover:text-black">
            I'm selling
          </button>
        </div>
        <div className=' px-4 w-full'>
        <div className=" bg-white flex items-center  w-full relative mx-auto max-w-2xl">
          <Input
            type="text"
            placeholder="Enter a keyword"
            className="w-full px-4 py-3 pl-12 text-black text-md rounded shadow outline-none focus:ring-2 focus:ring-blue-600"
          />
          <div className=' absolute  left-3'>
          <Search color='black' size={20}  />

          </div>
        </div>
        </div>
      </div>
    </div>


    <div className="py-10">
      <div className="max-w-[1170px] px-3 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-row items-center  p-3 gap-2 justify-start bg-white  border-2  rounded-md hover:shadow-lg transition"
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

    <PopularTopics/>


    <div className="py-10">
         <h1 className=' text-center font-semibold text-4xl mb-4 text-gray-800'>Video Guides</h1>
      <div className="max-w-[1170px] px-3 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {cards2.map((card, index) => (
          <div
            key={index}
            className="flex flex-row  gap-4  p-3  justify-start bg-white  border-2  rounded-md hover:shadow-lg transition"
          >
            <div className=' w-44'>
            <img
              src={card.icon}
              alt={card.title}
              className="w-full"
            />
            </div>
            <div>
            <h4 className=" font-normal">{card.title}</h4>
            <span className=' text-gray-400 pt-4 text-sm'>01:20 MIN</span>
            </div>
          </div>
        ))}
      </div>
      <div className=' flex justify-center items-center pt-10'>
        <Button className= 'bg-blue-500  w-40 py-2 rounded-sm'>see all</Button>
      </div>
    </div>

     <div className=' bg-activate_bg bg-center flex justify-center items-center h-[50vh] bg-cover'>
        <div className=' max-w-4xl mx-auto'>
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">Want to activate your item?</h1>
         <div className=' flex  max-w-[1170px] gap-2 items-center'>
            <div className=' w-full'>
              <Input className=' outline-none  w-full rounded-sm p-2' placeholder='Type platform name' /> 
            </div>
           <Button className=' bg-blue-500 px-4 py-2 whitespace-nowrap text-white rounded-md'>Get the guide</Button>
         </div>
        </div>
     </div>
      

    </>
  )
}

export default BuyerSupport