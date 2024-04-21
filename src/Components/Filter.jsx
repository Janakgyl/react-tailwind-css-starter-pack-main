import React from "react";
import Card from "./Card";

function Filter(props) {
  const categories = props.categories;
  const category = props.category;
  const setCategory = props.setCategory;


  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div>
      <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">
        {categories.map((category) => {
          return (
            <div key={category.id} className="pr-3 font-bold text-1xl">
              <button onClick={()=>filterHandler(category.title)}>{category.title}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
