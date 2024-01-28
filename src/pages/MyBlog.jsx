import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../service/useBlogCalls";
import BlogCard from "../components/blog/BlogCard";
import avatar from "../assets/icons/avatar.png";

const MyBlog = () => {
  const { user } = useSelector((state) => state.auth);
  const { userBlog } = useSelector((state) => state.blog);
  const { getUserBlog } = useBlogCalls();
 
  useEffect(() => {
    getUserBlog("blogs", user._id);
  }, []);


  return (
    <div className="grid grid-cols-12 m-auto bg-homeBg lg:px-[7rem] gap-1 min-h-[90vh] ">
      <div className=" my-3 mx-3 col-span-12 sm:col-span-3  p-2 bg-[#6c9197]  border-[3px] rounded-2xl">
        <div className="">
          <div className="flex justify-center">
            <img
              src={user.image || avatar}
              alt=""
              className="h-[250px] text-center w-[250px]  rounded-full"
            />
          </div>
          <div className="flex flex-col gap-3 mt-6 font-montserrat text-lg text-white font-semibold">
            <p className="">
              <span className="font-bold text-[#846488]">Username:</span>{" "}
              {user.username}
            </p>
            <p>
              <span className="font-bold text-[#846488]">Full Name:</span>{" "}
              {user.firstName} {user.lastName}
            </p>

            <p>
              {" "}
              <span className="font-bold text-[#846488]">Email:</span>{" "}
              {user.email}
            </p>
            <p>
              <span className="font-bold text-[#846488]">Bio:</span> {user.bio}
            </p>

            <p>
              {" "}
              <span className="font-bold text-[#846488]">
                Create account:
              </span>{" "}
              {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-9">
        {userBlog.length === 0 ? (
          <p className="text-center font-dancing mt-10 font-extrabold text-red-600 text-2xl">You don't have any blocks</p>
        ) : (
          userBlog.map((blog) =><div key={blog._id}> <BlogCard blog={blog} /></div>)
        )}
      </div>
    </div>
  );
};

export default MyBlog;
