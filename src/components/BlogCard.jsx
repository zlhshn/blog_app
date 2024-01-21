import React from "react";
import { CommentIcon, EyeIcon, LikeIcon } from "../assets/icons/icons";

const BlogCard = () => {
  return (
    <>
      {[1, 2, 3, 4].map((item) => (
        <>
          {" "}
          <div className="col-span-6 p-2 bg-white">
            <div className="flex gap-x-2 ">
              <div className="w-[100%] ">
                <img
                  className="h-[100%]"
                  src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-vibes">Lorem ipsum dolor sit amet.</h3>
                <p className="font-montserrat">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Praesentium veritatis quis eveniet ad placeat officia.
                </p>
                <p className="font-light">Lorem, ipsum dolor.</p>
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center gap-2">
                    <p className="flex">
                      <LikeIcon />
                      <span>2</span>
                    </p>
                    <p className="flex">
                      <CommentIcon />
                      <span>3</span>
                    </p>
                    <p className="flex">
                      <EyeIcon />
                      <span>1</span>
                    </p>
                  </div>
                  <button className="bg-red-400 rounded-md text-white px-3 py-2 button">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default BlogCard;
