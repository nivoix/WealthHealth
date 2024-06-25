import "regenerator-runtime/runtime";
import { useState } from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="filter-menu">
      <label htmlFor="searchInput"></label>
      Search :
      <input
        id="searchInput"
        aria-label="searchInput"
        name="searchInput"
        type="text"
        className="search-input"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default GlobalFilter;
