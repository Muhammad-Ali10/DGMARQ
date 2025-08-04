import React from 'react'
import { Search } from 'lucide-react';
import bgimage from '../assets/Supportbg.jpg'


const StaySafe = () => {

    const cards = [
        { title: "Buying", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/4528ac63ec6c88c11d3ca92984748f85.png" },
        { title: "Digital Items", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/9e798bb562a8c832097696a9a659b07b.png" },
        { title: "Problem Solving", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/43219efae6cb2dee88e539c00e0764ca.png" },
        { title: "Payments", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/77c9e596bc4716ac7eb0e1291374bcc2.png" },
        { title: "G2A Services", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/47944f7ae165db08219389854907658a.png" },
        { title: "G2A Account", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/10fb2de61cb55320c16ea50d1885762f.png" },
        { title: "For Developers", icon: "https://supporthub-prod.s3-eu-west-1.amazonaws.com/329412f395822ed3826014651ecd830d.png" },
      ];

  return (
    <>

     <div
          className="bg-cover  bg-center sm:h-[55vh] h-[50vh] text-white"
          style={{ backgroundImage: `url(${bgimage})` }}
        >
          <div className="h-full flex flex-col justify-center items-center bg-black/50 bg-opacity-50">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Stay Safe?</h1>
           
          <div className=' px-3 w-full'>
          <div className="w-full mx-auto relative max-w-2xl">
              <input
                type="text"
                placeholder="Enter a keyword"
                className="w-full px-4 py-3 pl-12 text-black text-md rounded shadow outline-none focus:ring-2 focus:ring-blue-600"
              />
              <div className=' absolute top-3.5 left-3'>
              <Search color='black' size={20}  />
    
              </div>
            </div>
          </div>
          </div>
        </div>


        <div className=' flex sm:flex-row flex-col text-white'>
            <div className=' sm:w-8/12 w-12/12
            '>
            <div className=' pt-5  w-10/12 mx-auto'>
            <ul className=' flex items-center gap-2'>
                    <li className=' text-gray-500'>
                    Buyer FAQ    
                    </li>
                    <li className=' text-gray-500'>
                    Buying
                    </li>
                    <li className=' text-blue-500 font-semibold'>
                    How can I buy a digital item on G2A.COM?
                    </li>
                </ul>



                <h2 className=' pt-4 text-4xl font-semibold'> I found something shady with G2A’s logo on it. What should I do?

                </h2>

                <p>G2A.COM is a fully legit marketplace that has been serving millions of users for 10 years now. We worked hard to establish ourselves as a trusted, reliable digital marketplace. Unfortunately, every well-known company sometimes faces situations in which their trademarks are used without their consent and knowledge. This happens to us as well. Our logo has at times been illegally used for fraudulent purposes. This is why we have created the following guide with a few simple rules to help you stay safe online at all times.

</p>


                <div  className=' py-5'>
                    <img src='https://supporthub-prod.s3-eu-west-1.amazonaws.com/supporthub_gallery%2F2019%2F3%2F11%2Ff2a07e5ff61ba3f7c178c7daa8bd90ba.jpg' className=' mx-auto' alt='' />
                </div>


                <h2 className=' pt-4 text-4xl font-semibold'> What are the most common types of scams and how can you avoid them?



</h2>

<h1 className=' pt-2  text-3xl font-semibold'>A) Fake websites</h1>

<p>Some websites may look very similar to ours and yet not be related to G2A.COM in any way. Be careful, as using these sites might compromise your sensitive data, such as credit card details or personal information. It is easy to tell a legit site from a fake one based on their domains.



</p>


<h1 className=' pt-2  text-3xl font-semibold'>B) E-mail phishing

</h1>

<p>Be extremely careful when you receive a legitimate-looking e-mail requesting your personal data and/or containing suspicious attachments and links. This is most likely a phishing attempt. We will never send you any messages without your permission or ask for any sensitive details, such as login credentials or personal data. If you receive an e-mail with any questionable content, it is best to delete it straight away.





</p>



<h1 className=' pt-2  text-3xl font-semibold'>C) "G2A deals" outside G2A.COM


</h1>

<p>If someone pretending to be a G2A employee contacts you via e-mail, social media or a gaming platform and offers a transaction outside G2A.COM, watch out. This is a yet another attempt at an online scam. G2A employees never offer any deals outside the G2A Ecosystem and the ones available on our marketplace are from carefully verified sellers. To ensure your safety, purchase items directly on G2A.COM.







</p>


<h1 className=' pt-2  text-3xl font-semibold'>Is G2A.COM safe? Yes, it is. Why?




</h1>

<p>• G2A.COM is a trustworthy and reliable marketplace, that is why we have millions of users. We monitor auctions and verify keys using advanced algorithms that analyze and compare a massive amount of data at once. Additionally, over 100 people monitor G2A Marketplace to ensure that auctions and transactions are safe and secure.









</p>
<p>• G2A.COM has strict AML/KYC procedures for verifying its sellers. The onboarding procedure meets the highest industry standards and requires merchants to provide a wide variety of documentation to prove that their business is legal, including certificates of incorporation and tax identification numbers.











</p>



<p>• All keys on G2A.COM were generated by publishers and developers.













</p>


<p>But you can help us make it even more secure! If you have doubts or suspect someone is using G2A's logos without our permission to abuse our customers' trust, please contact us here.















</p>





<div className=' py-4'>
    <div className=' px-4 border bg-gray-100 py-8 flex justify-between items-center'>
        <h2 className=' font-semibold text-2xl text-black'>Was this helpfull?</h2>

        <div className=' flex gap-2 items-center'>
            <button className=' bg-white border border-blue-500 px-4 text-sm text-blue-500 rounded-sm py-1'>Yes</button>
            <button className=' bg-white border border-blue-500 px-4 text-sm text-blue-500 rounded-sm py-1'>No</button>
        </div>
    </div>
</div>



            </div>
                
            </div>
            <div className=' sm:w-4/12 w-12/12 text-black'>
              <div className=' pt-3 bg-gray-100 h-full  border-l p-4'>
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

export default StaySafe