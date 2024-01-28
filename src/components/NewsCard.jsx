import React from "react";
import {  useNavigate } from "react-router-dom";

const NewsCard = ({ item }) => {
  const { image, _id, title } = item;
  const navigate = useNavigate()
  console.log(item);
  return (
    <div
      className="col-span-12 p-2 flex justify-between h-[100px] items-center gap-4"
      onClick={() => navigate(`/detail/${_id}`)}
    >
      <div className="w-[45%]">
        <img
          src={image || ""}
          alt="newsImage"
          className="h-[100px] w-[300px] rounded-md"
        />
      </div>
      <div className="line-clamp-3 flex-grow w-[60%] mb-3">{title}</div>
    </div>
  );
};

export default NewsCard;
