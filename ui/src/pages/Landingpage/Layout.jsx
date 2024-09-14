import React, { useState } from "react";
import { Content } from "./Content";
import { FilterNav } from "./FilterNav";
import Sidebar from "./Sidebar";

export const Layout = () => {
  const [filter, setFilter] = useState("all");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 px-1 mt-16 md:max-w-[73%] w-full mx-auto">
      <Sidebar onFilterChange={handleFilterChange} />
      <div className="md:col-span-3 col-span-4 md:px-3">
        <FilterNav />
        <Content filter={filter} />
      </div>
    </div>
  );
};
