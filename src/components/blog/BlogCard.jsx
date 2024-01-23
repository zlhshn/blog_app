import { useNavigate } from "react-router-dom";
import BlogIcon from "./BlogIcon";


const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const {
    title,
    content,
    _id,
    image,
    createdAt,
    likes,
    comments,
    countOfVisitors,
  } = blog;

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
              <BlogIcon
                likes={likes}
                comments={comments}
                countOfVisitors={countOfVisitors}
                _id={_id}
              />
              </div>
              <button
                className="bg-red-400 rounded-md text-white px-3 py-2 button "
                onClick={() => navigate(`/detail/${_id}`)}
              >
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
