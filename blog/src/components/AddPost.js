import React, { useState } from "react";

function AddPost() {
  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
  });

  const fieldChanged = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const contentField = (e) => {
    setPost({ ...post, content: e.target.value });
  };

  const createPost = (e) => {
    e.preventDefault();
    console.log(post);
  };
  return (
    <div>
      <form action="" onSubmit={createPost}>
        <div className="container mx-auto  w-3/4  border border-gray-400 p-8  mt-12 flex flex-col space-y-3 shadow-lg bg-white ">
          {JSON.stringify(post)}
          <h3 className="mt-0"> What is going on your mind ?</h3>

          <div className="p-1">
            <label for="title" className=" block mb-2">
              Blog Title
            </label>

            <input
              type="text"
              id="title"
              placeholder="Enter here"
              className="border border-gray-400 w-full"
              name="title"
              onChange={fieldChanged}
            />
          </div>
          <div className="border border-gray-400 p-1">
            <label for="content"> Blog Content </label>

            <textarea
              name=""
              id="content"
              cols="30"
              rows="10"
              className="w-full"
              onChange={contentField}
            ></textarea>
          </div>
          <div className="border border-gray-400 p-1">
            <label for="category"> Blog Category </label>

            <select name="" id="" className="border border-gray-400 w-full">
              <option value="">Programming Languages with Fact</option>
              <option value="">GK</option>
              <option value="">Politics</option>
            </select>
          </div>
          <div class="mx-auto w-1/3 flex ">
            <button class=" createBtn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center  mx-auto mt-2">
              Create Blog
            </button>
            <button class=" resetBtn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-center  mx-auto mt-2">
              Reset Blog
            </button>
          </div>
        </div>
      </form>

      <div id="box"></div>
    </div>
  );
}

export default AddPost;
