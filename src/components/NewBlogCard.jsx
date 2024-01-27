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
    <div className="flex flex-col gap-4 py-10 px-[2rem] md:px-[5rem] lg:px-[15rem] xl:px-[25rem]">
      <div>
        <label
          htmlFor="title"
          className="relative block rounded-md border bg-white border-gray-200 shadow-sm p-2 focus-within:border-[#00323B] focus-within:ring-1 focus-within:ring-border-[#00323B] "
        >
          <input
            type="text"
            id="title"
            className=" peer border-none bg-white placeholder-gray focus:border-transparent focus:outline-none focus:ring-0 "
            placeholder="Title"
            required
            onChange={handleChange}
            value={data.title || ""}
            name="title"
          />

         
        </label>
      </div>
      <div>
        <label
          htmlFor="image"
          className="relative bg-white block rounded-md border border-gray-200 shadow-sm p-2 focus-within:border-[#00323B] focus-within:ring-1 focus-within:ring-border-[#00323B]"
        >
          <input
            type="url"
            id="image"
            className="peer border-none bg-white bg-transparent placeholder-gray focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Image Url"
            onChange={handleChange}
            required
            value={data.image || ""}
            name="image"
          />

       
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
            className="mt-1.5 w-full px-2 h-10 rounded-lg border-gray-300 outline-none text-gray-700 sm:text-sm"
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
          value={text || data.content || "" }
          onTextChange={handleEditorChange}
          name="content"
          style={{ height: "320px", outline:"none" }}
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
