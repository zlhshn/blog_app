import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../service/useBlogCalls";
import BlogCard from "../components/blog/BlogCard";

const MyBlog = () => {
  const { user } = useSelector((state) => state.auth);
  const { userBlog } = useSelector((state) => state.blog);
  const { getUserBlog } = useBlogCalls();
  console.log(userBlog);

  useEffect(() => {
    getUserBlog("blogs", user._id);
  }, []);

  return (
    <div className="m-40">
      {userBlog.map((blog) => (
        <BlogCard blog={blog} />
      ))}
    </div>
  );
};

export default MyBlog;
