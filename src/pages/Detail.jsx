import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useBlogCalls from "../service/useBlogCalls";
import { useSelector } from "react-redux";
import Comments from "../components/blog/Comments";
import CreateComment from "../components/blog/CreateComment";
import Modal from "../components/Modal";
import { toastSuccess } from "../helper/ToastNotify";

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
    userId,
    _id,
    categoryId,
  } = detail;

  const handleDelete = () => {
    deleteBlog("blogs", _id);
    navigate("/myblog");
    toastSuccess("Blog is deleted");
  };

  useEffect(() => {
    getDetail("blogs", id);
  }, []);

  return (
    <div className="bg-[#e6e1e6]  flex flex-col gap-4 py-5 m-auto x min-h-[85vh]">
      <div className="px-[3rem]  w-[100%] lg:px-[10rem] xl:px-[20rem] ">
        <div className="m-auto mb-10 w-[100%] text-center">
          <img
            src={image}
            alt="image"
            className="w-[100%] rounded-3xl  h-[380px]"
          />
        </div>

        <div className="flex gap-2 items-center">
          <p className="w-10 h-10 bg-main rounded-full text-white flex justify-center items-center text-lg">
            {userId?.username.slice(0, 1)}
          </p>
          <p>
            <h1>{userId?.username}</h1>
            <h3>
              {" "}
              {new Date(createdAt).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h3>
          </p>
        </div>
        <div className="text-center  m-7 text-xl  font-bold">
          {title}
        </div>

        <div
          className="text-justify font-sans my-5"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>

        {userId?._id === user?._id && (
          <div className="mt-10">
            <button
              onClick={() => setOpen(true)}
              className="bg-[#846488] p-2 rounded-md m-3 text-white"
            >
              UPDATE
            </button>
            <button
              className="bg-[#846488] p-2 rounded-md mx-3 text-white"
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
                <div key={item._id}>
                  <Comments item={item} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
