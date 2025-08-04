import {
        ProductbyCategory,
    FooterBlogs
} from "@/components";



const RandomKeys = () => {
    return (
        <div className="flex flex-col  items-center justify-center gap-12 m-auto py-12 overflow-hidden">

            <div className="flex flex-col text-white font-poppins">
                <h3 className=" text-4xl -tracking-tight font-semibold text-center">Best Software</h3>
                <p className="text-base font-normal -tracking-tight text-center">For Home and Business</p>
            </div>
            <img src="./images/RandomKeybanner.png" alt="offerimage" className="max-w-1260 w-full mt-12" />

            <ProductbyCategory brandName="Try to catch one of our bestsellers!" />
            <ProductbyCategory brandName="Meet the champions!" />
            <ProductbyCategory brandName="How about 5 keys?" />
            <ProductbyCategory brandName="Single randoms are pretty great too!" />
            {/* Footer Blogs section starts here */}
            <FooterBlogs />
            {/* Footer Blogs section ends here */}
        </div>
    )
}

export default RandomKeys