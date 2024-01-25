import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useBlogCalls from "../service/useBlogCalls";
import { useSelector } from "react-redux";
import BlogIcon from "../components/blog/BlogIcon";
import Comments from "../components/blog/Comments";
import CreateComment from "../components/blog/CreateComment";
import NewBlogCard from "../components/NewBlogCard";
import Modal from "../components/Modal";
import { toastSuccess } from "../helper/ToastNotify";

const Detail = () => {
  const { id } = useParams();
  const { detail } = useSelector((state) => state.blog);
  const { user } = useSelector((state) => state.auth);
  const { getDetail, deleteBlog } = useBlogCalls();
  const [open, setOpen] = useState(false);
const navigate = useNavigate()
  const {
    comments,
    createdAt,
    image,
    title,
    content,
    countOfVisitors,
    userId,
    _id,
    likes,
    categoryId,
  } = detail;


  const handleDelete =()=>{

    deleteBlog("blogs", _id) 
    navigate("/myblog")
    toastSuccess("Blog is deleted")
  }

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
      {userId?._id === user?._id && (
        <div className=" m-2">
          <button
            onClick={
              () => setOpen(true)
            }
            className="bg-red-500 p-2 rounded-md"
          >
            UPDATE
          </button>
          <button
            className="bg-red-500 p-2 rounded-md"
            onClick={handleDelete}
          >
            DELETE
          </button>
        </div>
      )}
      <Modal
        open={open}
        setOpen={setOpen}
        title={title}
        image={image}
        content={content}
        categoryId={categoryId}
        _id={_id}
      />

      {userId?._id !== user?._id && (
        <div className="m-2">
          <CreateComment _id={_id} />
          <div>
            {comments?.map((item) => (
              <Comments item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
