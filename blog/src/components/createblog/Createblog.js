import React from "react";
import { useState } from "react";
import { Toast } from "reactstrap";

function Createblog() {
  //Add the item functionality

  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState([]);

  //add the items function

  const addItem = () => {
    if (!inputdata) {
      alert("plz fill the data");
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setItems([...items, myNewInputData]);

      setInputData("");
    }
  };

  //Delete Items
  const deleteItem = (index) => {
    const updateItems = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updateItems);
  };

  return (
    <div className="">
      <div className="bg-slate-900 w-full  p-2">
        <h1 className=" ml-5 text-white mb-4 pt-16">
          Create Your Own Blog Here !!
        </h1>

        <div className=" text-center bg-white  ml-5 mb-4 rounded-md w-1/3">
          <textarea
            type="text"
            placeholder="✍️ Create a Blog"
            className=" outline-none w-full "
            id=""
            name="title"
            value={inputdata}
            onChange={(e) => setInputData(e.target.value)}
          />
          {/* <i class=" text-black fa fa-plus cursor-pointer" onClick={addItem}></i> */}

          {/* Show Items */}
        </div>

        <button
          class=" createBtn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center  mx-auto mt-2 ml-5"
          onClick={addItem}
        >
          Create Blog
        </button>
      </div>

      <div className="showItems  text-black w-2/5 ml-8">
        {items.map((curElem) => {
          return (
            <div
              className="eachItem flex flex-col bg-white mb-4 justify-between items-baseline p-1  h-auto"
              key={curElem.id}
            >
              <h3>{curElem.name}</h3>
              <div className="btn flex space-x-5 mr-2">
                <i class="  fa fa-edit cursor-pointer text-green-700"></i>
                <i
                  class=" text-red-700 fa fa-trash cursor-pointer"
                  onClick={() => deleteItem(curElem.id)}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Createblog;
