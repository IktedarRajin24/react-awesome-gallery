/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";

const AddImage = ({ onSetImages }) => {
  return (
    <div className="md:h-52 h-24">
      <input type="file" className="hidden file-input" onChange={onSetImages} />
      <button
        className="flex flex-col justify-center items-center border-2 border-slate-500 border-dashed rounded-xl bg-gray-100 hover:brightness-75 w-full h-full"
        onClick={() => document.querySelector(".file-input").click()}
      >
        <PhotoIcon className="md:w-10 w-7 text-slate-500" />

        <p className="md:text-xl text-slate-500">Add Images</p>
        {/* <img src={image} alt="" /> */}
      </button>
    </div>
  );
};

export default AddImage;
