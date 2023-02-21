import { memo } from "react";

const SearchBox = ({ action }) => {
  let searchTimeout;
  const handleChange = (e) => {
    clearInterval(searchTimeout);
    searchTimeout = setTimeout(() => {
      action(e.target.value);
    }, 300);
  };

  return (
    <div className="flex-auto flex flex-row gap-3 text-lg">
      <div className="flex-auto">
        <input onChange={handleChange} className="p-3 rounded-xl min-w-0 w-full" type="text" placeholder="Search by name..."></input>
      </div>
    </div>
  );
};
export default memo(SearchBox);
