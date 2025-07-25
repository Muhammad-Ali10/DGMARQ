import { BlogCard } from "@/components";

const FooterBlogs = () => {
  
    const blogs = [
        { Image: "./images/Blog1.png" },
        { Image: "./images/Blog2.png" },
        { Image: "./images/Blog3.png" },
        { Image: "./images/Blog4.png" },
    ]

    return (
        <section className="max-w-[1440px] mx-auto px-4 md:px-6 xl:px-0 py-8">
            <div className="mb-5 px-4">
                <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-white">Our Latest Blogs</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {blogs.map((item, index) => (
                    <BlogCard key={index} image={item.Image} />
                ))}
            </div>
        </section>
    );
};

export default FooterBlogs;
