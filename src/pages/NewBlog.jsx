import React, { useState } from "react";
import { Editor } from "primereact/editor";
import { InputText } from "primereact/inputtext";

export default function NewBlog() {




  return (
    <div className="flex flex-col gap-4 p-40">
      <div>
        <label
          htmlFor="title"
          className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="text"
            id="title"
            className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Title"
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Title
          </span>
        </label>
      </div>
      <div>
        <label
          htmlFor="image"
          className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="url"
            id="image"
            className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Image Url"
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Image
          </span>
        </label>
      </div>
      <div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-900"
          ></label>

          <select
            name="Categories"
            id="category"
            className="mt-1.5 w-full px-1 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
          >
            <option value="">Please select</option>
            <option value="JM">John Mayer</option>
            <option value="SRV">Stevie Ray Vaughn</option>
            <option value="JH">Jimi Hendrix</option>
            <option value="BBK">B.B King</option>
            <option value="AK">Albert King</option>
            <option value="BG">Buddy Guy</option>
            <option value="EC">Eric Clapton</option>
          </select>
        </div>
      </div>
      <div className="card">
        <Editor
          // value={text}
          style={{ height: "320px" }}
        />
      </div>

      <div className="">
        <button className="bg-purple-400 px-3 py-1 rounded-md text-white m-2">
          DRAFT
        </button>
        <button className="bg-purple-400 px-3 py-1 rounded-md text-white ">
          PUBLİSHED
        </button>
      </div>
    </div>
  );
}
