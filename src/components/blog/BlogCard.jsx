import React from "react";
import { CommentIcon, EyeIcon, LikeIcon } from "../../assets/icons/icons";
import { useSelector } from "react-redux";
import useBlogCalls from "../../service/useBlogCalls";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate()
  const { title, content, _id, image, createdAt,likes,comments,countOfVisitors
   

  } = blog;
 
  const {user} = useSelector((state)=>state.auth)
  const {likeOrUnlike}=useBlogCalls()
  return (
    <>
      <div className="col-span-12 p-2 bg-white ">
        <div className=" flex gap-x-2 ">
          <div className="flex-1 w-[100%] ">
            <img className=" w-[100%] h-[100%]" src={image} alt="" />
          </div>
          <div className="flex-1">
            <h3 className="font-vibes">{title}</h3>
            <p
              className="font-montserrat line-clamp-1"
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
            <p className="font-light">
              Published Date:
              {new Date(createdAt).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              })}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-2">
              <p className="flex cursor-pointer"  onClick={() => user ? likeOrUnlike(_id) : navigate('/login')}>
                  <LikeIcon />
                  <span>{likes.length}</span>
                </p>
                <p className="flex">
                  <CommentIcon />
                  <span>{comments.length}</span>
                </p>
                <p className="flex">
                  <EyeIcon />
                  <span>{countOfVisitors
.length}</span>
                </p>
              </div>
              <button className="bg-red-400 rounded-md text-white px-3 py-2 button "
               onClick={() => navigate(`/detail/${_id}`)}>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
