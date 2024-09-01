import PropTypes from "prop-types";
import { useState } from "react";

const Search = ({ setSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const getSearch = (e) => {
    e.preventDefault();
    setSearch(searchValue);
  };
  return (
    <div className="navbar-center ">
      <form
        onSubmit={getSearch}
        className="flex"
      >
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            name="input"
            autoComplete="off"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <button
          className="btn"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
