import { LikeIcon } from "../../assets/icons/icons";
import { EyeIcon } from "../../assets/icons/icons";
import { CommentIcon } from "../../assets/icons/icons";
import { toastWarn } from "../../helper/ToastNotify";
import { useSelector } from "react-redux";
import useBlogCalls from "../../service/useBlogCalls";

const BlogIcon = ({ _id, likes, comments, countOfVisitors }) => {
  const { user } = useSelector((state) => state.auth);
  const { postLike } = useBlogCalls();

  return (
  <>
      <p
        className="flex cursor-pointer"
        onClick={() => (user ? postLike(_id) : toastWarn("You must Login"))}
      >
        <span
          className={`cursor-pointer hover:text-gray-400 ${
            likes?.includes(user._id) && "text-red-500"
          }`}
        >
          {LikeIcon}
        </span>
        <span>{likes?.length}</span>
      </p>
      <p className="flex">
        <span>{CommentIcon}</span>
        <span>{comments?.length}</span>
      </p>
      <p className="flex">
        <span> {EyeIcon}</span>
        <span>{countOfVisitors}</span>
      </p></>
   
  );
};

export default BlogIcon;
