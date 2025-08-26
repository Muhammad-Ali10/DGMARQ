import ProductSection from '@/components/Custom/ProductSection';
import LoadingCard from '@/components/Custom/LoadingCard';
import { useUpcommingGamesQuery } from '@/hooks/useHomeQuery';
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux'
import { toast, } from 'react-toastify'
import { addToCart } from '../../../store/productSlice'
const UpcomingGames = () => {

    const dispatch = useDispatch()

    const { data, isPending, error } = useUpcommingGamesQuery(1, 6);

    const upcoming = data?.data || [];

    console.log(upcoming);

    const isSkeleton = isPending || upcoming.length === 0;
    const skeletonArray = Array.from({ length: 6 });


 
    return (
        <div className="flex flex-col items-center max-w-1260 w-full justify-center pt-12 gap-6 " id="upcoming-games">

            <h3 className="font-poppins font-semibold text-4xl -tracking-tight text-center text-white mt-9">New and upcoming releases</h3>

            <div className={`hidden lg:flex flex-row w-full justify-between items-end relative bg-white rounded-21 pb-10 h-[411px]  text-white bg-cover bg-center`} style={{ backgroundImage: `url(${upcoming[0]?.banner})` }}>
                <div className=" w-full lg:10 xl:pl-20 ">
                    <h3 className="max-w-[284px] w-full font-poppins font-bold text-xl">{upcoming[0]?.productId.title}</h3>
                    <div className="flex max-w-[350px] w-full justify-between items-center mt-10">
                        <h3 className="text-2xl font-poppins font-semibold">${upcoming[0]?.productId.actualPrice}</h3>
                        <Button  onClick={() => {
                                        dispatch(
                                          addToCart({
                                            _id: upcoming[0]?.productId._id,
                                            image: upcoming[0]?.productId?.images[0],
                                            title: upcoming[0]?.productId.title,
                                            quantity: 1,
                                            gst: upcoming[0]?.productId.gst,
                                            actualPrice: upcoming[0]?.productId.actualPrice
                                          })
                                        )
                        
                                        toast.success('Product add to cart successfuly!')
                                      }}
                        
                        className="text-xs font-medium font-poppins bg-primary cursor-pointer">
                            Add to cart
                        </Button>
                    </div>
                </div>
                <div className="w-full max-w-[344px] absolute lg:right-5 xl:right-10">
                    <h3 className="max-w-[284px] w-full font-poppins font-bold text-xl">{upcoming[1]?.productId.title}</h3>
                    <div className="flex flex-row max-w-[350px] w-full justify-between items-center mt-10">
                        <h3 className="text-2xl font-poppins font-semibold">${upcoming[1]?.productId.actualPrice}</h3>
                        <Button
                         onClick={() => {
                                        dispatch(
                                          addToCart({
                                            _id: upcoming[1]?.productId._id,
                                            image: upcoming[1]?.productId?.images[0],
                                            title: upcoming[1]?.productId.title,
                                            quantity: 1,
                                            gst: upcoming[1]?.productId.gst,
                                            actualPrice: upcoming[1]?.productId.actualPrice
                                          })
                                        )
                        
                                        toast.success('Product add to cart successfuly!')
                                      }} className="text-xs font-medium font-poppins bg-primary cursor-pointer">
                            Add to cart
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex lg:hidden flex-col w-full justify-between items-center relative bg-white rounded-21  p-0">
                <div className="flex flex-col  justify-end w-full  bg-cover bg-start bg-no-repeat text-white pb-4 pt-30 pl-10"  style={{ backgroundImage: `url(${upcoming[2]?.banner})` }}>
                    <h3 className="max-w-[284px] w-full font-poppins font-bold text-">{upcoming[0]?.productId.title}</h3>
                    <div className="flex max-w-[350px] w-full justify-between items-center mt-10">
                        <h3 className="text-xl font-poppins font-semibold">$ {upcoming[0]?.productId.actualPrice}</h3>
                        <Button onClick={() => {
                                        dispatch(
                                          addToCart({
                                            _id: upcoming[0]?.productId._id,
                                            image: upcoming[0]?.productId?.images[0],
                                            title: upcoming[0]?.productId.title,
                                            quantity: 1,
                                            gst: upcoming[0]?.productId.gst,
                                            actualPrice: upcoming[0]?.productId.actualPrice
                                          })
                                        )
                        
                                        toast.success('Product add to cart successfuly!')
                                      }} 
                        
                        className="text-xs font-medium font-poppins bg-primary cursor-pointer">
                            Add to cart
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col  w-full bg-cover b bg-no-repeat bg-center  text-white pb-4 pt-30 pl-12"  style={{ backgroundImage: `url(${upcoming[5]?.banner})` }}>
                    <div className=" max-w-[344px] w-full ">
                        <h3 className="max-w-[284px] w-full font-poppins font-bold text-xl">{upcoming[1]?.productId.title}</h3>
                        <div className="flex max-w-[350px] w-full justify-between items-center mt-10">
                            <h3 className="text-xl font-poppins font-semibold">$ {upcoming[1]?.productId.actualPrice}</h3>
                            <Button  onClick={() => {
                                        dispatch(
                                          addToCart({
                                            _id: upcoming[1]?.productId._id,
                                            image: upcoming[1]?.productId?.images[0],
                                            title: upcoming[1]?.productId.title,
                                            quantity: 1,
                                            gst: upcoming[1]?.productId.gst,
                                            actualPrice: upcoming[1]?.productId.actualPrice
                                          })
                                        )
                        
                                        toast.success('Product add to cart successfuly!')
                                      }} 
                            className="text-xs font-medium font-poppins bg-primary cursor-pointer">
                                Add to cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-white font-poppins gap-2.5">
                <h3 className=" text-4xl -tracking-tight font-semibold text-center">Upcoming games</h3>
                <p className="text-base font-normal -tracking-tight text-center">Can’t wait to play your game? Preorder the key now and experience it on day one!</p>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center w-full gap-2.5 md:gap-[15px]">
                {isSkeleton ? (
                    skeletonArray.map((_, index) => <LoadingCard key={index} />)
                ) : (
                    upcoming.map((product) => (
                        <ProductSection key={product._id} data={product.productId} />
                    ))
                )}

            </div>

            <Button className="text-base font-normal font-poppins tracking-tight text-[#F05F00] bg-[#F05F00]/10 border border-[#F05F00]">
                Show More
            </Button>
        </div>
    )
}

export default UpcomingGames