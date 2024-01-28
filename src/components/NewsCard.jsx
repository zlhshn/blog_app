import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ item }) => {
  const { image_url
    , 
    link
    , title } = item;
  return (
    <div className="col-span-12 p-2 flex justify-between h-[100px] items-center gap-2">
      <div className="w-[30%]">
        <Link to={
link
}>
          {" "}
          <img
            src={image_url
              || ""}
            alt="newsImage"
            className="h-[80px] w-[300px] rounded-md"
          />{" "}
        </Link>
      </div>
      <div className="line-clamp-3 flex-grow w-[60%] mb-3">{title}</div>
    </div>
  );
};

export default NewsCard;
