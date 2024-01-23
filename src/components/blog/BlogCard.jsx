import React, { useState } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../../service/useBlogCalls";
import { useNavigate } from "react-router-dom";
import { LikeIcon } from "../../assets/icons/icons";
import { EyeIcon } from "../../assets/icons/icons";
import { CommentIcon } from "../../assets/icons/icons";
import {toastWarn} from  "../../helper/ToastNotify"
import Comments from "./Comments";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate()
  const  [comment,setComment]= useState(false)
  const { title, content, _id, image, createdAt,likes,comments,countOfVisitors
  } = blog;
  console.log(blog);
 
  const {user} = useSelector((state)=>state.auth)
  const {postLike}=useBlogCalls()

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
              <p className="flex cursor-pointer"  onClick={() => user ? postLike(_id) : toastWarn("You must Login")}>
              <span className={`cursor-pointer hover:text-gray-400 ${likes.includes(user._id) && 'text-red-500'}`} >{LikeIcon}
                </span> 
                  <span>{likes.length}</span>
                </p>
                <p className="flex">
                <span onClick={()=> user ? setComment(!comment): toastWarn("You must Login")}> {CommentIcon}</span>
                  <span>{comments.length}</span>
                </p>
                <p className="flex">
                <span> {EyeIcon}</span>
                  <span>{countOfVisitors}</span>
                </p>
              </div>
              <button className="bg-red-400 rounded-md text-white px-3 py-2 button "
               onClick={() => navigate(`/detail/${_id}`)}>
                Read More
              </button>
            </div>
            <div>
            {comment &&  <Comments/>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
