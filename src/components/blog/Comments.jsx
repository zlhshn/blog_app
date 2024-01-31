
const Comments = ({ item }) => {
  const { createdAt, userId, comment } = item;

  return (
    <div className=" border-b border-b-1 border-gray-300 my-5">
      <div className="flex justify-start items-center">
      <p className="w-10 h-10 bg-purple-800 rounded-full text-white flex justify-center items-center text-2xl">
            {userId?.username.slice(0, 1)}
          </p>
        <div className="ml-4">
          <p className="font-great text-xl">{userId.username}</p>
          <h5 className="font-great text-lg  text-gray-500">
            {new Date(createdAt).toLocaleDateString("en-US")}
          </h5>
        </div>
      </div>
      <p className="mb-2">{comment}</p>
    </div>
  );
};
export default Comments;
