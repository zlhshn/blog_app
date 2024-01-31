import React, { useState } from "react";
import useBlogCalls from "../../service/useBlogCalls";
import { useSelector } from "react-redux";
import { toastWarn } from "../../helper/ToastNotify";


const CreateComment = ({ _id }) => {
  const { postComment } = useBlogCalls();
  const [value, setValue] = useState("");
  const { user } = useSelector((state) => state.auth);

  const commentInfo = {
    blogId: _id,
    comment: value,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment("comments", commentInfo);
    setValue("");
  };

  const handleTextareaClick = () => {
    if (!user) {
      toastWarn("Please login to add a comment.");
    }
  };

  return (
    <form>
      <div>
       

        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 my-7 mx-2">
          <textarea
            id="comment"
            className="w-full resize-none border-none align-top p-3 focus:ring-0 sm:text-sm placeholder:font-badScript  outline-none"
            rows="4"
            placeholder="Enter Your Comments..."
            name="comment"
            value={value}
            onClick={handleTextareaClick}
            onChange={(e) => setValue(e.target.value)}
          ></textarea>

          <div className="flex items-center justify-end gap-2 bg-white p-3">
          
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={!user}
              className={`rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700     ${
                !user ? 'opacity-50 cursor-not-allowed' : ''
              } : ''
            }`}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateComment;
