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
import avatar from "../../src/assets/icons/avatar.png";

const Detail = () => {
  const { id } = useParams();
  const { detail } = useSelector((state) => state.blog);
 
  const { user } = useSelector((state) => state.auth);
  const { getDetail, deleteBlog } = useBlogCalls();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
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

  console.log(user);

  const handleDelete = () => {
    deleteBlog("blogs", _id);
    navigate("/myblog");
    toastSuccess("Blog is deleted");
  };

  useEffect(() => {
    getDetail("blogs", id);
  }, []);

  return (
    <div className="bg-[#e6e1e6]  flex flex-col gap-4  m-auto ">
      <div className="px-[5rem] sm:px-[35rem]  py-[5rem] w-[100%]">
        <div className="m-auto mb-10 w-[100%] text-center">
          <img src={image} alt="image" className="w-[100%] rounded-3xl  h-[300px]" />
        </div>

        <div className="flex">
          <p>
            <img  src={avatar || (user && user.image)} alt="" className="w-10 h-10 rounded-full" />
          </p>
          <p>
            <h1>{user.username}</h1>
            <h3> {new Date(createdAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                })}</h3>
          </p>
        </div>
        <div className="text-center font-vibes m-7 text-xl font-semibold ">
          {title}
        </div>

        <div className="text-justify font-badScript my-5">{content}</div>

        <div className="flex ">
          <BlogIcon
            likes={likes}
            comments={comments}
            countOfVisitors={countOfVisitors}
            _id={_id}
          />
        </div>
        {userId?._id === user?._id && (
          <div className="mt-10 me-3">
            <button
              onClick={() => setOpen(true)}
              className="bg-[#846488] p-2 rounded-md m-3 text-white"
            >
              UPDATE
            </button>
            <button
              className="bg-[#846488] p-2 rounded-md m-3 text-white"
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
            <div className="flex flex-col gap-6">
              {comments?.map((item) => (
                <Comments item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
