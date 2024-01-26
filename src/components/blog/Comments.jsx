
import avatar from "../../assets/icons/avatar.png"

const Comments = ({ item }) => {
  const { createdAt, userId, comment } = item;

  return (
    <div className=" border-b border-b-1 border-gray-300 my-5">
      <div className="flex justify-start items-center">
        <img alt="Man" src={avatar} className="h-10 w-10 rounded-full object-cover" />
        <div className="ml-4">
          <p className="font-great text-xl">{userId.username}</p>
          <h5 className="font-great text-lg  text-gray-500">
            {new Date(createdAt).toLocaleDateString("en-US")}
          </h5>
        </div>
      </div>
      <p>{comment}</p>
    </div>
  );
};
export default Comments;
