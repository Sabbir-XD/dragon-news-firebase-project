import React, { Suspense } from "react";
import Categories from "../components/Catagories/Categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Categories />
      </Suspense>
    </div>
  );
};

export default LeftAside;
