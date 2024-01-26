import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../service/useBlogCalls";
import BlogCard from "../components/blog/BlogCard";
import avatar from "../assets/icons/avatar.png"

const MyBlog = () => {
  const { user } = useSelector((state) => state.auth);
  const { userBlog } = useSelector((state) => state.blog);
  const { getUserBlog } = useBlogCalls();
  console.log(userBlog);

  console.log(user);
  useEffect(() => {
    getUserBlog("blogs", user._id);
  }, []);

  return (
    <div className="grid grid-cols-12  gap-1 min-h-[85vh]">
      <div className=" col-span-8">
        {userBlog.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>

      <div className=" my-3 col-span-4 p-2 ">
        <div className="border bg-homeBg p-4 ">
          <div className="m-auto">
            <img src={(user.image) || avatar} alt="" className="h-[300px]" />
          </div>
          <div className="flex flex-col gap-3 ">
            <p>
              {user.firstName} {user.lastName}
            </p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
