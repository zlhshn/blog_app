import { useSelector } from "react-redux";
import BlogCard from "../components/blog/BlogCard";
import NewsCard from "../components/NewsCard";
import useBlogCalls from "../service/useBlogCalls";
import { useEffect } from "react";
import React, { useState } from "react";
import { Paginator } from "primereact/paginator";

const Home = ({ showButton, setShowButton }) => {
  const { blogs, totalBlogs, category } = useSelector((state) => state.blog);
  const { getBlog, getCategories, filterBlog,searchBlog } = useBlogCalls();

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
  const [search, setSearch] = useState("");
console.log(blogs);

const handleChange=(e)=>{

 setSearch(e.target.value)
// searchBlog("blogs",search)

}
  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };
  useEffect(() => {
    getBlog(`blogs?page=${first / rows + 1}&limit=4&search[title]=${search}`);
    getCategories("categories");
  }, [first, rows,search]);

  return (
    <div className="mx-[1rem]">
      <div className="grid grid-cols-12  gap-1">
        <div className="col-span-2 p-2 rounded-md bg-homeBg mt-2  ">
          <div className="relative bg-homeBg">
            <label htmlFor="Search" className="sr-only">
              Search
            </label>

            <input
              type="text"
              id="Search"
              placeholder="Search..."
              value={search}
              className="w-full bg-homeBg rounded-md border-gray-200 py-2.5  ps-2 pe-10 shadow-sm sm:text-sm"
              onChange={(e)=>handleChange(e)}
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
              </button>
            </span>
          </div>

          <div className="bg-homeBg mt-2 p-2">
            <p className="font-grace font-semibold text-2xl m-auto ">Categories</p>

            <p
              className="border border-b-1 border-b-gray-400 font-grace text-xl "
              onClick={() => getBlog(`blogs?page=${first / rows + 1}&limit=5`)}
            >
              All
            </p>
            {category.map((item) => (
              <p
                key={item._id}
                className="border border-b-1 border-b-gray-400 font-grace text-xl mt-2"
                onClick={() => filterBlog("blogs", item._id)}
              >
                {item.name}
              </p>
            ))}
          </div>

          <div className="bg-homeBg mt-2 p-2">
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

        <div className="col-span-7 bg-[#daece8]  mt-2 rounded-md relative ">
          <div className="grid grid-cols-12 gap-2">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} first={first} rows={rows}/>
            ))}
          </div>
          <div>
        <div className="card absolute bottom-0 w-full  bg-homeBg rounded-md ">
          <Paginator
            first={first}
            rows={rows}
            totalRecords={totalBlogs}
            onPageChange={onPageChange}
            className="bg-homeBg rounded-md "
          />
        </div>
      </div>
        </div>
        <div className="col-span-3 bg-homeBg p-2 mt-2 rounded-md">
          <h3 className="mx-3">NEWS</h3>
          <div className="grid grid-cols-12 gap-2">
            {[1, 2, 3, 4].map((item, i) => (
              <NewsCard key={i} />
            ))}
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default Home;
