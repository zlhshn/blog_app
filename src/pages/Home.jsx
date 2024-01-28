import { useSelector } from "react-redux";
import BlogCard from "../components/blog/BlogCard";
import NewsCard from "../components/NewsCard";
import useBlogCalls from "../service/useBlogCalls";
import { useEffect } from "react";
import React, { useState } from "react";
import { Paginator } from "primereact/paginator";
import { Calendar } from "primereact/calendar";
import { useNavigate } from "react-router-dom";
import { all } from "axios";

const Home = ({ showButton, setShowButton }) => {
  const { blogs, totalBlogs, category, news, allBlogs } = useSelector(
    (state) => state.blog
  );

  const { getBlog, getCategories, getNews, getAllBlogs } = useBlogCalls();
  const [date, setDate] = useState(new Date());
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(3);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const api_key = process.env.REACT_APP_NEWS_API_KEY;

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };
  useEffect(() => {
    getBlog(`blogs?page=${first / rows + 1}&limit=3&search[title]=${search}`);
    getCategories("categories");
    getAllBlogs("blogs");
    getNews(`news?apiKey=${api_key}&country=tr`);
  }, [first, rows, search]);

 
  return (
    <div className="mx-[.5rem]">
      <div className="grid grid-cols-12  gap-1">
        <div className="col-span-12 sm:col-span-3  lg:col-span-2 p-2 rounded-md bg-homeBg mt-2  ">
          <div className="relative bg-homeBg">
            <label htmlFor="Search" className="sr-only">
              Search
            </label>

            <input
              type="text"
              id="Search"
              placeholder="Search..."
              value={search}
              className="w-full bg-homeBg rounded-md border border-[#578188]  outline-none py-2.5  ps-2 pe-10 shadow-md sm:text-sm"
              onChange={(e) => handleChange(e)}
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
            <p className="font-grace font-semibold text-2xl m-auto tracking-wider text-center ">
              Categories
            </p>

            <p
              className="border border-b-1 border-b-gray-400 font-grace tracking-wider text-2xl "
              onClick={() => getBlog(`blogs?page=${first / rows + 1}&limit=3`)}
            >
              All
            </p>
            {category.map((item) => (
              <p
                key={item._id}
                className="border border-b-1 border-b-gray-400 font-grace  mt-2 tracking-wider text-2xl"
                onClick={() =>
                  getBlog(
                    `blogs?page=${
                      first / rows + 1
                    }&limit=3&filter[categoryId]=${item._id}`
                  )
                }
              >
                {item.name}
              </p>
            ))}
          </div>

          <div className="bg-homeBg mt-4 p-2 hidden sm:block ">
            <p className="font-grace font-extrabold text-2xl mb-2 gap-2 text-center">
              Latest Posts
            </p>
            {allBlogs.slice(-3).map((item) => (
              <div
                key={item._id}
                className="flex  flex-col  gap-3 border border-b-1 border-b-gray-400"
                onClick={() => navigate(`/detail/${item._id}`)}
              >
                <div className="mt-2 w-full  flex-1 items-center">
                  <img
                    src={item.image}
                    alt="image"
                    className="h-[130px] w-full cursor-pointer"
                  />
                </div>
                <div className=" text-[15px] h-[30%] font-montserrat mt-2 flex-1">
                  <div className="w-full ">
                    <p className="line-clamp-3"  dangerouslySetInnerHTML={{ __html: item.content }}></p>
                    <p className=" font-montserrat font-semibold  text-end mb-3">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 sm:col-span-9 lg:col-span-7 bg-[#daece8]  mt-2  rounded-md relative ">
          <div className="grid grid-cols-12 gap-2 mb-40">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} first={first} rows={rows} />
            ))}
          </div>
          <div className="">
            <div className="card absolute bottom-0 w-full  bg-homeBg rounded-md  ">
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

        <div className="hidden lg:block lg:col-span-3 bg-homeBg p-1 mt-2 rounded-md ">
          <div className="flex justify-center w-full">
            <Calendar
              value={date}
              onChange={(e) => setDate(e.value)}
              inline
              style={{ padding: "1rem", overflowX: "hidden" }}
            />
          </div>
          <div className=" mt-8">
            <h3 className="mx-3 my-10 text-center font-grace tracking-wider font-semibold text-2xl">
              MOST VİEWED BLOGS
            </h3>
            <div className="grid gap-8 ">
              {allBlogs
                .filter((item) => item.hasOwnProperty("countOfVisitors"))
                .sort((a, b) => b.countOfVisitors - a.countOfVisitors)
                .slice(0, 6)
                .map((item) => (
                  <div key={item._id}>
                    <NewsCard item={item} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
