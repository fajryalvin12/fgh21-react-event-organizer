import React from "react";
import { FaSearch } from "react-icons/fa";

const FilterBar = ({ filteredEvents }) => {
  async function searchEvents(e) {
    e.preventDefault();
    const search = e.target.search.value;
    filteredEvents(search);
  }
  return (
    <>
      <form onSubmit={searchEvents} className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <label htmlFor="search" className="font-semibold text-xl">
            Search Event
          </label>
          <div className="flex items-center gap-4">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search here"
              className="input input-bordered w-full max-w-xs"
            />
            <button type="submit" className="btn btn-outline">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="form-control md:block hidden">
          <div className="font-semibold text-xl">Categories</div>
          <label className="label cursor-pointer">
            <span className="label-text">Music</span>
            <input type="checkbox" className="checkbox" />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Arts</span>
            <input type="checkbox" className="checkbox" />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Outdoors</span>
            <input type="checkbox" className="checkbox" />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Workshop</span>
            <input type="checkbox" className="checkbox" />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Sport</span>
            <input type="checkbox" className="checkbox" />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Festival</span>
            <input type="checkbox" className="checkbox" />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Fashion</span>
            <input type="checkbox" className="checkbox" />
          </label>
        </div>
      </form>
    </>
  );
};

export default FilterBar;
