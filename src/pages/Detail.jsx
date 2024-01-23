import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useBlogCalls from "../service/useBlogCalls";
import { useSelector } from "react-redux";
import BlogIcon from "../components/blog/BlogIcon";
import Comments from "../components/blog/Comments";
import CreateComment from "../components/blog/CreateComment";

const Detail = () => {
  const { id } = useParams();
  const { detail } = useSelector((state) => state.blog);
  const { getDetail } = useBlogCalls();

  const {
    comments,
    createdAt,
    image,
    title,
    content,
    countOfVisitors,
    _id,
    likes,
  } = detail;

  useEffect(() => {
    getDetail("blogs", id);
  }, []);

  return (
    <>
      <div>
        <div>{title}</div>
        <img src={image} alt="" />
      </div>
      <div>{content}</div>

      <div className="flex ">
        <BlogIcon
          likes={likes}
          comments={comments}
          countOfVisitors={countOfVisitors}
          _id={_id}
        />
      </div>
      <CreateComment _id ={_id} />
      <div>
        {comments?.map((item) => (
          <Comments item={item} />
        ))}
      </div>
    </>
  );
};

export default Detail;
