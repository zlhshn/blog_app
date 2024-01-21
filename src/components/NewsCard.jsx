import React from "react";

const NewsCard = () => {
  return (
    <div className="col-span-12 p-2 flex h-[100px] gap-2">
      <div>
        <img
          src="https://image.hurimg.com/i/hurriyet/75/866x494/65a2616101672dff2ee341a3.jpg"
          alt=""
          className="h-[100%]"
        
        />
      </div>
      <div className="line-clamp-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </div>
    </div>
  );
};

export default NewsCard;
