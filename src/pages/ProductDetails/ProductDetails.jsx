import React, { useEffect, useState } from 'react'
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Base_url } from '../../utils/Base_url'
import { useDispatch, useSelector } from 'react-redux'
import { toast, } from 'react-toastify'
import { addToCart } from '../../store/productSlice'
import { FaStar } from 'react-icons/fa'
import WriteReview from './WriteReview'

const ProductDetails = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {

  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [rating, setRatings] = useState([]);
  const [overall,setOverall] = useState({});
  const { userInfo } = useSelector((state) => state.next);
  console.log(userInfo);
  const images = products?.images || [];
  const totalImages = images.length;
  const [curr, setCurr] = useState(0);
  const prev = () => {
    if (totalImages === 0) return;
    setCurr((curr) => (curr === 0 ? totalImages - 1 : curr - 1));
  };

  const next = () => {
    if (totalImages === 0) return;
    setCurr((curr) => (curr === totalImages - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const goToSlide = (index) => {
    setCurr(index);
  };


  console.log(products, 'producs');

  useEffect(() => {

    axios.get(`${Base_url}/products/get/${id}`).then((res) => {

      console.log(res, 'ratings');


      setProducts(res?.data?.data)

    }).catch((res) => {

    });
    axios
      .get(`${Base_url}/rating/getByProduct/${id}`)
      .then((res) => {
        console.log(res);
        setRatings(res?.data?.data);
      })
      .catch((error) => { });

      axios
      .get(`${Base_url}/rating/getOverall/${id}`)
      .then((res) => {
        console.log(res);
        setOverall(res?.data?.data);
      })
      .catch((error) => { });



  }, [])


  const navigate = useNavigate();


  const dispatch = useDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);
 const [openSide,setOpenSide] = useState(false);

  const handleWhitelist = async () => {
    if (userInfo) {

      try {
        const response = await axios.post(`${Base_url}/wishlist/add`, {
          productId: products?._id,
          userId: userInfo?._id,
        });
        if (response.data?.status === 200) {
          toast.success(response?.data?.message);
        } else {
          toast.success(response?.data?.message);
        }
      } catch (error) {
        console.error('Error adding to wishlist:', error?.response?.data?.message);
        toast.error(error?.response?.data?.message)
      }

    } else {
      toast.error('Please register your account');
      navigate('/register')
    }

  };

console.log("product",products)


  return (
    <>

      <section className=' py-14'>
        <div className="max-w-[1170px] mx-auto text-white  p-4">
          {/* Product Title */}
          <div className=' flex sm:flex-row gap-5 flex-col  justify-between '>
            <h1 className="text-3xl font-bold text-white">
              {products?.title}
            </h1>
            <div onClick={handleWhitelist} className=' bg-gray-200 w-12 h-12 cursor-pointer rounded-full flex justify-center items-center'>
              <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="indexes__StyledWishlistHeart-vomwzh-2 fUnRFQ"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.0521 3.05014C4.78562 0.316619 9.21779 0.316619 11.9513 3.05014C11.968 3.06688 11.9847 3.08369 12.0012 3.10055C12.0177 3.08369 12.0344 3.06689 12.0511 3.05014C14.7846 0.316619 19.2168 0.316619 21.9503 3.05014C24.6838 5.78367 24.6838 10.2158 21.9503 12.9494L12.7073 22.1924C12.5198 22.3799 12.2654 22.4853 12.0001 22.4853C11.7349 22.4852 11.4805 22.3799 11.293 22.1923L2.0521 12.9494C2.05207 12.9493 2.05205 12.9493 2.05202 12.9493C-0.681428 10.2158 -0.681402 5.78364 2.0521 3.05014ZM10.5371 4.46436C8.58462 2.51188 5.41879 2.51188 3.46631 4.46436C1.51383 6.41683 1.51383 9.58267 3.46631 11.5351L3.46639 11.5352L12.0003 20.071L20.5361 11.5351C22.4886 9.58267 22.4886 6.41683 20.5361 4.46436C18.5836 2.51188 15.4178 2.51188 13.4653 4.46436C13.2255 4.70415 13.0163 4.96306 12.8344 5.23719C12.6491 5.5164 12.3363 5.68425 12.0012 5.68425C11.6661 5.68425 11.3533 5.5164 11.168 5.23719C10.9861 4.96316 10.776 4.70323 10.5371 4.46436Z" fill="currentColor"></path></svg>
            </div>
          </div>
          {/* Rating */}
          <div className="flex mb-8 items-center mt-2 text-white">
            {/* <span className="text-sm font-medium mr-1">4.75</span> */}
            <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
            <div key={index}>
              <FaStar
                className={index < overall?.overallRating ? 'text-white' : 'text-gray-300'}
                size={20}
              />
            </div>
          ))}
            </div>
            <span className="text-sm ml-2 text-white">({overall?.overallRating} reviews)</span>
          </div>

          <div className=' flex md:flex-row flex-col gap-5 justify-between '>

            {/* Product Image */}
            <div className=' md:w-6/12 w-11/12'>
              <div className="overflow-hidden relative  ">
                <div
                  className="flex  transition-transform ease-out duration-500"
                  style={{ transform: `translateX(-${curr * 100}%)` }}
                >
                  {products?.images?.map((image, i) => {
                    console.log(image, "slider image============>>>>>>>>>>>>>>");
                    return (
                      <div key={i} className="flex-none h-80 rounded-lg overflow-hidden w-full">
                        <img
                          //   onClick={openSlider}
                          src={image}
                          alt=""
                          className="w-full h-full cursor-pointer object-contain  object-center"
                        />
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={prev}
                  className=" w-12 h-16 shadow  absolute left-0 top-32 flex  justify-center items-center bg-white/80 text-white hover:bg-white"
                >
                  <TfiAngleLeft size={20} className="" />
                </button>
                <button
                  onClick={next}
                  className=" w-12 h-16  absolute right-0 top-32 flex justify-center items-center shadow bg-white/80 text-white hover:bg-white"
                >
                  <TfiAngleRight size={20} />
                </button>
                {/* </div> */}
              </div>
              <div className=" mt-5 ">
                <div className="flex items-center justify-center gap-2">
                  {products?.images?.map((_, i) => (
                    <div
                      key={i}
                      onClick={() => goToSlide(i)}
                      className={`
              transition-all w-20 p-2 h-20 border overflow-hidden 
              ${curr === i ? " w-20 h-20  border-orange-400 " : "bg-opacity-50"}
            `}
                    >
                      <img
                        src={_}
                        alt=""
                        className=" w-full h-full   object-center  "
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-4 space-y-3">
              <div className=' flex  items-center gap-2'>
                <p className='  m-0 w-11 text-white  flex justify-center items-center rounded-sm h-11 bg-black'>
                  <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.668 7.158a4.395 4.395 0 00-.906-1.38 4.214 4.214 0 00-1.327-.935 3.936 3.936 0 00-1.632-.343 3.9 3.9 0 00-1.606.335 4.053 4.053 0 00-1.309.908A4.454 4.454 0 0016 7.104a4.76 4.76 0 00-.368 1.671l-2.71 3.969h-.028a3.135 3.135 0 00-1.658.481l-4.925-3.059a3.264 3.264 0 00-.799-1.926c-.474-.554-1.085-.898-1.821-1.044a3.381 3.381 0 00-1.282.064c-.404.1-.78.281-1.102.527a3.4 3.4 0 00-.836.927c-.226.366-.37.778-.42 1.207-.081.445-.064.882.043 1.299.11.426.28.808.513 1.153a3.16 3.16 0 002.038 1.336c.313.063.608.063.905.017.286-.056.573-.127.842-.228l5.302 3.088a3.296 3.296 0 001.047 2.08c.602.553 1.32.834 2.153.834.448 0 .862-.09 1.255-.273a3.52 3.52 0 001.023-.726c.287-.299.52-.654.698-1.063.171-.4.262-.835.262-1.298l3.64-2.943h.028c.582 0 1.13-.11 1.631-.336a3.972 3.972 0 001.328-.926c.377-.39.682-.853.905-1.38A4.224 4.224 0 0024 8.858a4.14 4.14 0 00-.332-1.698v-.002zm-3.856-.245c-.502 0-.933.191-1.292.572-.36.381-.538.835-.538 1.362 0 .526.18.972.538 1.344.359.372.79.563 1.292.563.501 0 .941-.191 1.309-.563.367-.372.556-.826.556-1.344 0-.527-.189-.98-.556-1.362a1.76 1.76 0 00-1.31-.572zM2.034 9.308c.53-.525 1.351-.6 1.965-.18h-.003l1.462.843a2.462 2.462 0 00-.834-1.443 2.232 2.232 0 00-1.497-.564c-.655 0-1.22.236-1.687.707a2.406 2.406 0 00-.698 1.745c0 .69.231 1.279.698 1.761.467.483 1.023.726 1.687.726.288 0 .573-.063.844-.181l-1.453-.817a1.481 1.481 0 01-.673-.571 1.621 1.621 0 01-.259-.908c0-.444.143-.82.448-1.118zm12.547 8.528a2.234 2.234 0 01-1.677.707 2.264 2.264 0 01-1.525-.564c-.44-.37-.698-.852-.798-1.442l1.453.846c.233.181.52.273.87.273.431 0 .79-.155 1.077-.453.287-.299.446-.7.44-1.117 0-.343-.09-.644-.26-.906a1.475 1.475 0 00-.673-.574l-1.426-.817c.25-.117.538-.18.843-.18.662 0 1.219.245 1.677.726.458.482.682 1.071.682 1.761 0 .689-.226 1.27-.683 1.742v-.002zm5.23-6.047c.8 0 1.471-.28 2.027-.844.547-.563.824-1.262.833-2.087 0-.828-.278-1.535-.835-2.11-.556-.57-1.23-.86-2.025-.86a2.591 2.591 0 00-1.094.227 2.888 2.888 0 00-1.516 1.588 3.109 3.109 0 00-.215 1.153c-.002.395.07.787.215 1.154.138.35.346.668.611.934.268.265.564.464.905.618.342.155.708.227 1.095.227z" fill="currentColor"></path></svg>
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Platform:</strong> {products?.platform?.title}
                </p>
              </div>
              <div className=' flex  items-center gap-2'>
                <p className='  m-0 w-11  text-gray-400       flex justify-center items-center rounded-sm h-11 border border-gray-200'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5em" height="1.5em" fill="currentColor"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" stroke-miterlimit="10"><path d="M6 12l4 4 8-8"></path><circle cx="12" cy="12" r="11"></circle></g></svg>                            </p>
                <p className="text-sm text-gray-600">
                  <strong>Can activate in:</strong> United States
                </p>
              </div>
              <div className=' flex  items-center gap-2'>
                <p className='  m-0 w-11  text-gray-400       flex justify-center items-center rounded-sm h-11 border border-gray-200'>
                  <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.417 23H3v-2.58c0-1.4.79-2.68 2.047-3.292 1.468-.715 3.707-1.461 6.661-1.461 2.955 0 5.194.746 6.662 1.46a3.655 3.655 0 012.047 3.293V23zM16.75 6.042c0 2.784-2.257 5.958-5.042 5.958-2.784 0-5.041-3.174-5.041-5.958a5.041 5.041 0 1110.083 0z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>                           </p>
                <p className="text-sm text-gray-600">
                  <strong>Type:</strong> {products?.type}
                </p>
              </div>
              <div className=' flex  items-center gap-2'>
                <p className='  m-0 w-11  text-gray-400   flex justify-center items-center rounded-sm h-11 border border-gray-200'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.5em" height="1.5em" fill="currentColor"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="none" stroke-miterlimit="10"><path d="M5.11 3.425L6.722 4.75l1.645 1.756-.404 2.74-2.594 1.312L4 11.726l.667 1.138 1.307 1.4.706 2.473-1.963 1.647-.359 1.528M20.32 4.805l-1.477.838-3 .357-2.284-1.838-.62-1.813L12.127 1M19.007 12.903l-.928 2.098-.954 2.151-1.763 1.641-2.339.15-1.394-1.69.468-2.17-.403-2.143 1.593-1.997 2.227-.782 2.358.564 1.135 2.178z"></path><circle cx="12" cy="12" r="11"></circle></g></svg></p>                            <p className="text-sm text-gray-600">
                  <strong>Versions:</strong> <span className=' uppercase'> {products?.region?.title}</span>
                </p>
              </div>
              <hr />
              <p className=' text-gray-500 text-sm'>Forced to go rogue. Hunted from within. This is Call of Duty: Black Ops 6.</p>
              {/* <span className=' text-secondary font-semibold'>Read more</span> */}
            </div>



            {/* Price and Buttons */}
            <div className="mt-6 flex md:w-5/12 w-11/12 h-64  relative border p-4 flex-col space-y-2">
              <div className=' flex gap-2'>
                <Link to={`/store-products/${products?.sellerId?._id}`} className=' relative'>
                  <img src={products?.sellerId?.logo} className=' w-16 h-16 object-cover  border border-secondary p-0.5 object-center rounded-full' alt='' />
                  <div className=' absolute -top-3 left-0 text-secondary'>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.39 5.544l-.91-1.776-.878 1.792L9.9 9.032l-4.048.608-2.06.309 1.53 1.414 2.923 2.703-.765 3.733-.417 2.034 1.85-.942 3.587-1.826 3.587 1.826 1.85.942-.417-2.034-.765-3.733 2.924-2.703 1.524-1.409-2.052-.314-3.974-.608-1.787-3.488z" fill="currentColor" stroke="#FAFAFA"></path></svg>
                  </div>
                </Link>
                <div>
                  <p className=' text-black font-semibold m-0'>{products?.sellerId?.companyName}</p>
                  <span className=' text-sm text-black font-bold'>97%  <span className='  text-sm  text-gray-500 font-normal'>Positive feedback</span> | <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className=' text-gray-500' width="1em" height="1em" fill="currentColor" font-size="16"><path d="M6 22a1 1 0 100-2 1 1 0 000 2zm14 0a1 1 0 100-2 1 1 0 000 2zm1.238-12.19L20 16H6L4 1H1m3.667 5H13" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><path d="M16.529 4.47a.75.75 0 10-1.06 1.06l2 2a.748.748 0 001.06 0l5-5a.75.75 0 00-1.06-1.06l-4.47 4.47-1.47-1.47z" fill="currentColor"></path><path d="M23.099 6.02a1 1 0 00-1.18.78 4 4 0 11-3.12-4.72 1 1 0 00.4-1.961 6 6 0 104.68 7.081 1.001 1.001 0 00-.78-1.18z" fill="currentColor"></path></svg> 8635 </span>

                </div>
              </div>
              <div className="text-3xl pt-3 font-bold text-gray-800">${products?.discountPrice}</div>
              <div className="text-sm text-gray-500">
                Save <span className="font-semibold text-green-600">${products?.actualPrice - products}</span> with G2A Plus
              </div>
              <button onClick={() => {
                setOpenSide(true)
                dispatch(
                  addToCart({
                    _id: products?._id,
                    image: products?.images[0],
                    description: products?.description,
                    title: products?.title,
                    quantity: 1,
                    price: products?.discountPrice,
                    gst:products?.gst,
                    actualPrice:products?.actualPrice
                  })
                )
 
                toast.success('Product add to cart successfuly!')
              }} className=" bg-secondary text-black py-2 w-full rounded-md hover:bg-blue-700">
                Add to Cart
              </button>
              <span className=' absolute -top-5 text-gray-500 bg-white'>OFFER FROM BUSINESS SELLER</span>
            </div>
          </div>


        </div>
      </section>

      <section className=' max-w-[1170px] mx-auto pb-12'>
        <h1 className=' text-2xl font-semibold pb-4 text-black'>Product description</h1>
        <p className=' text-gray-400'>{products?.description}</p>

      </section>

      <div className="bg-white px-3  max-w-[1170px] mx-auto">
        <h2 className="text-2xl font-bold mb-2">Reviews</h2>
        <p className="text-gray-600 mb-4">
          Check what our customers think of this title
        </p>

        {/* Overall Rating */}
        <div className="flex md:flex-row flex-col border  rounded-md flex-wrap justify-between items-center border-b pb-4 mb-4">

          <div className=" sm:w-7/12 w-12/12 p-4 flex sm:flex-row flex-col gap-4">
            <div className=''>
              <h2 className=' font-semibold text-black'>Overall item rating</h2>
              <div className=' flex  items-center py-2 gap-3'>
                <div className="text-5xl font-bold text-black">{overall?.overallRating}</div>
                <div>
                  <div className=' flex gap-1 items-center'>
                    <FaStar className=' text-yellow-500' size={20} />
                    <FaStar className=' text-yellow-500' size={20} />
                    <FaStar className=' text-yellow-500' size={20} />
                    <FaStar className=' text-yellow-500' size={20} />
                    <FaStar className=' text-yellow-500' size={20} />
                  </div>
                  <div className="text-black text-sm   font-medium  pt-1">{overall?.totalRatings} reviews</div>
                </div>
              </div>
              <div>

              
              </div>
            </div>
            <div className=' sm:w-5/12 w-12/12'>
              <div className=' py-1  flex  items-center justify-between'>
                <h2 className=' font-semibold text-black'>Rating</h2>
                <p className=' text-sm text-gray-500'>Select a row to filter reviews</p>
              </div>
              <div className=' flex flex-col gap-2'>
              {[5, 4, 3, 2, 1].map((star, index) => {
  const ratingCount = overall?.ratingCounts?.[star] || 0;
  const totalRatings = overall?.totalRatings || 1;

  return (
    <div key={index} className="flex items-center gap-2 mb-2">
      <span className="text-black font-bold items-center flex gap-2">
        {star} <FaStar className="text-yellow-500" />
      </span>
      <div className="w-full bg-gray-300 rounded h-3">
        <div
          className="bg-black h-3 rounded"
          style={{ width: `${(ratingCount / totalRatings) * 100}%` }}
        ></div>
      </div>
      <span className="text-gray-600 text-sm">{ratingCount}</span>
    </div>
  );
})}
              </div>
            </div>

          </div>



          <div className=' bg-[#F2F8FE] px-8 py-10 h-full sm:w-4/12 w-12/12'>
            <h2 className=' font-semibold text-lg text-black'>Review this item</h2>
            <p className="text-sm text-gray-500 mt-1">
              Get a 5% discount on your next purchase as a thank you
            </p>
            <button onClick={() => setIsOpenModal(true)} className="bg-blue text-white w-full px-4 py-2 mt-2 rounded-sm hover:bg-blue-600">
              Review item
            </button>
            {/* <p className='text-[12px] pt-1'>Signed-in customers with at least 1 purchase can review
          </p> */}
          </div>
        </div>


        {/* Reviews List */}
        <div>
          {rating?.map((review) => (
            <div
              key={review.id}
              className="border rounded-lg p-4 mb-4 flex sm:flex-row flex-col gap-4 sm:h-32 h-auto flex-wrap justify-between items-start"
            >
              <div>
                <h4 className="">{review?.user?.username}</h4>
                <p className="text-sm text-gray-500">
                  Reviewed on: {review?.date}
                </p>

              </div>
              <div className=' flex flex-col justify-between items-center h-full'>
                <div className=' flex justify-between gap-2'>
                  <ul className=' m-0 flex gap-1'>
                    
                  {[...Array(5)].map((_, index) => (
            <li key={index}>
              <FaStar
                className={index < review.rating ? 'text-yellow-500' : 'text-gray-300'}
                size={18}
              />
            </li>
          ))}
                  </ul>
                  
                  <p className="text-sm text-gray-500 flex  gap-2">{review?.platform}  <img src='https://static.g2a.com/_/pc-drmGaming/steam.svg' className=' w-4 h-4' alt='' /> </p>

                </div>
                <div>
                  <p className=' text-black'>{review?.review}</p>
                </div>
                <div className=' flex  items-center gap-2'>
                  <p className="text-sm text-black">
                    {review.recommendation ? "Recommends this item" : "Doesn't recommend this item"}
                  </p>
                  {review.verified && (
                    <span className="text-sm text-green-500 flex items-center gap-1 mt-1">
                      <span className="material-icons flex  items-center gap-1"> <p className=' m-0 text-black'>Yes</p> <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                      >
                        <g
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeMiterlimit={10}
                        >
                          <path d="M6 12l4 4 8-8" />
                          <circle cx={12} cy={12} r={11} />
                        </g>
                      </svg>
                      </span>

                    </span>
                  )}
                </div>
              </div>
              <div className=" h-full flex flex-col justify-between items-center">
                <div></div>
                <div className=' flex text-sm  items-center gap-1'>
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    fill="currentColor"
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
                  Verified purchase
                </div>
              </div>


            </div>
          ))}
        </div>
      </div>

      <WriteReview rating={rating}
        setRatings={setRatings} setIsModalOpen={setIsOpenModal} getData={products} isModalOpen={isOpenModal} />

    </>
  )
}

export default ProductDetails
