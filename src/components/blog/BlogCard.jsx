import { useNavigate } from "react-router-dom";
import BlogIcon from "./BlogIcon";
import { useSelector } from "react-redux";

const BlogCard = ({ blog, first, rows }) => {
  const navigate = useNavigate();
  const {user} =useSelector((state)=>state.auth)
  const {
    title,
    content,
    _id,
    image,
    createdAt,
    likes,
    comments,
    countOfVisitors,
    isPublish
  } = blog;
console.log(blog);

  return (
    <>
      <div className="col-span-12  bg-[#f7f5f7] border border-[#503a53] rounded-lg border-s-[15px] shadow-2xl m-6">
        <div className=" sm:flex justify-between items-center gap-x-2">
          <div className="flex-1 w-[100%] h-[310px] pe-4">
            <img className=" w-[100%] h-[100%] p-3" src={image} alt="" />
          </div>
          <div className="flex-1 relative p-1">
            <div className=" flex flex-col gap-5  ">
              <h3 className="font-dancing font-extrabold text-xl text-center mt-3">
                {title}
              </h3>

              <p
                className="font-badScript line-clamp-5 text-[18px] font-medium"
                dangerouslySetInnerHTML={{ __html: content }}
              ></p>

              <p className="font-light text-sm text-gray-400 mt-4 mb-3">
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
              <p className="font-vibes text-xl mb-4 text-[#846488]">{user && isPublish && "Published"}</p>
              <p className="font-vibes text-xl mb-8 text-[#846488]">{user && !isPublish && "Drafted"}</p>

              <div className="flex justify-between px-2 items-center absolute bottom-1 w-full">
                <div className="flex justify-between items-center gap-2">
                  <BlogIcon
                    likes={likes}
                    comments={comments}
                    countOfVisitors={countOfVisitors}
                    _id={_id}
                    first={first}
                    rows={rows}
                  />
                </div>
                <button
                  className="bg-[#846488] font-dancing text-lg font-extrabold rounded-md text-white  px-3 py-1 button "
                  onClick={() => navigate(`/detail/${_id}`)}
                >
                  Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
