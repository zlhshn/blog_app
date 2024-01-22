import { useSelector } from "react-redux";
import BlogCard from "../components/BlogCard";
import NewsCard from "../components/NewsCard";
import useBlogCalls from "../service/useBlogCalls";
import { useEffect } from "react";

const Home = () => {
  const { blogs } = useSelector((state) => state.blog);
  const { getBlog } = useBlogCalls();

  useEffect(() => {
    getBlog("blogs?page=1");
  }, []);

  return (
    <div className="mx-[5rem]">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-2 p-2">
          <div className="relative bg-[#F2E3D5]">
            <label htmlFor="Search" className="sr-only">
              {" "}
              Search{" "}
            </label>

            <input
              type="text"
              id="Search"
              placeholder="Search..."
              className="w-full bg-[#F2E3D5] rounded-md border-gray-200 py-2.5  ps-2 pe-10 shadow-sm sm:text-sm"
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700"
              >
                <span className="sr-only">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <searchIcon />
              </button>
            </span>
          </div>

          <div className="bg-[#F2E3D5] mt-2 p-2">
            <p className="font-vibes font-semibold m-auto ">Categories</p>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <p className="border border-b-1 border-b-gray-400">Categories</p>
            ))}
          </div>

          <div className="bg-[#F2E3D5] mt-2 p-2">
            <p className="font-grace font-extrabold mb-2">Latest Posts</p>
            {[1, 2, 3, 4, 5].map((item) => (
              <div className="flex  justify-center items-start gap-5">
                <div className=" text-[25px] font-bold font-montserrat mt-2">
                  {item}
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
                  <p className="border border-b-1 border-b-gray-400 font-montserrat font-semibold text-end">
                    Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-7 bg-[#F2E3D5] p-2 mt-2">
          <div className="grid grid-cols-12 gap-2">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
        <div className="col-span-3 bg-[#F2E3D5] p-2 mt-2">
          <h3 className="mx-3">NEWS</h3>
          <div className="grid grid-cols-12 gap-2">
            {[1, 2, 3, 4].map((item) => (
              <NewsCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
