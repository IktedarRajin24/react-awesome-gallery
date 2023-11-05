/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Header = ({ isChecked, onDelete }) => {
  return (
    <h1 className="py-2 px-5 md:text-xl text-md font-semibold">
      {isChecked.length > 0 ? (
        <div className="flex justify-between">
          <p>
            {/* <input type="checkbox" className="me-3" /> */}
            {isChecked.length} items selected
          </p>
          <button className="text-red-500" onClick={onDelete}>
            Delete
          </button>
        </div>
      ) : (
        <p>Gallery</p>
      )}
    </h1>
  );
};

export default Header;
