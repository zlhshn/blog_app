import React, { useEffect, useState } from "react";
import { Editor } from "primereact/editor";
import useBlogCalls from "../service/useBlogCalls";
import { useSelector } from "react-redux";

const NewBlogCard = ({
  title: propTitle,
  image: propImage,
  content: propContent,
  categoryId: propCategoryId,
  _id,
}) => {
  const { postBlog, getCategories, putBlog } = useBlogCalls();
  const { category } = useSelector((state) => state.blog);

  const [text, setText] = useState("");
  const blogInfo = {
    title: propTitle || "",
    image: propImage || "",
    content: propContent || "",
    categoryId: propCategoryId || "",
    isPublish: "",
  };
  const [data, setData] = useState(blogInfo);

  useEffect(() => {
    getCategories("categories");
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleEditorChange = (e) => {
    setText(e.htmlValue);
    setData((prevData) => ({ ...prevData, content: e.htmlValue }));
  };

  const handleSubmit = (isPublish) => {
    if (_id) {
      putBlog("blogs", _id,{ ...data, isPublish });
  
    } else {
      postBlog("blogs", { ...data, isPublish });

    }
  };

  return (
    <div className="flex flex-col gap-4 px-[5rem] md:px-[15rem]">
      <div>
        <label
          htmlFor="title"
          className="relative block rounded-md border border-gray-200 shadow-sm p-2 focus-within:border-[#00323B] focus-within:ring-1 focus-within:ring-border-[#00323B] "
        >
          <input
            type="text"
            id="title"
            className=" peer border-none bg-transparent placeholder-transparent  bg-homeBg focus:border-transparent focus:outline-none focus:ring-0 "
            placeholder="Title"
            onChange={handleChange}
            value={data.title || ""}
            name="title"
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2  bg-homeBg  p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Title
          </span>
        </label>
      </div>
      <div>
        <label
          htmlFor="image"
          className="relative block rounded-md border border-gray-200 shadow-sm p-2 focus-within:border-[#00323B] focus-within:ring-1 focus-within:ring-border-[#00323B]"
        >
          <input
            type="url"
            id="image"
            className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Image Url"
            onChange={handleChange}
            value={data.image || ""}
            name="image"
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2  bg-homeBg  p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Image
          </span>
        </label>
      </div>
      <div>
        <div>
          <label
            htmlFor="categoryId"
            className="block text-sm font-medium text-gray-900"
          ></label>

          <select
            name="categoryId"
            id="categoryId"
            onChange={handleChange}
            value={data.categoryId || ""}
            className="mt-1.5 w-full px-1 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
          >
            {" "}
            <option value="">Please select</option>
            {category.map((item) => (
              <option value={item._id}>{item.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="card">
        <Editor
          value={text || data.content || ""}
          onTextChange={handleEditorChange}
          name="content"
          style={{ height: "320px" }}
        />
      </div>

      <div className="">
        <button
          className="bg-[#86688a] px-3 py-1 rounded-md text-white m-2"
          onClick={() => handleSubmit(false)}
        >
          DRAFT
        </button>
        <button
          className="bg-[#86688a] px-3 py-1 rounded-md text-white "
          onClick={() => handleSubmit(true)}
        >
          PUBLİSHED
        </button>
      </div>

      <></>
    </div>
  );
};

export default NewBlogCard;
