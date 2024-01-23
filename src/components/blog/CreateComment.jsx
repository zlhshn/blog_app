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

  return (
    <form>
      <div>
        <label htmlFor="OrderNotes" className="sr-only">
          Order notes
        </label>

        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <textarea
            id="OrderNotes"
            className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
            rows="4"
            placeholder="Enter any additional order notes..."
            name="comment"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></textarea>

          <div className="flex items-center justify-end gap-2 bg-white p-3">
            {/* <button
              type="button"
              className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
            >
              Clear
            </button> */}

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
