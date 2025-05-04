import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());


const Categories = () => {
    const categories = use(categoryPromise);
  return (
    <section>
      <h1 className="text-lg text-center text-gray-500 font-bold">
        Categories ({categories.length})
      </h1>
      <div className="grid grid-cols-1 mt-5 mb-5">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className="btn bg-gray-50 border-none mt-3"
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Categories;
