/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SingleImage = ({
  image,
  onCheck,
  galleryImages,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnter,
  onDragLeave,
}) => {
  const gridColumnValue =
    galleryImages[0].id === image.id ? "span 2 / span 2" : "auto";
  const gridRowValue = galleryImages[0].id === image.id ? "span 2" : "auto";
  return (
    <div
      className="bg-gray-100 brightness-95 border border-slate-300 rounded-xl cursor-grab hover:brightness-75 relative transition-transform"
      style={{ gridColumn: gridColumnValue, gridRow: gridRowValue }}
    >
      <div
        className="h-full"
        draggable
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
      >
        <input
          type="checkbox"
          className="absolute top-5 left-5 opacity-0 hover:opacity-100 checked:opacity-100 cursor-pointer"
          onChange={onCheck}
          value={image.id}
        />
        <img
          className="rounded-xl hover:bg-gray-200 h-full"
          key={image.id}
          src={image.imageUrl}
          alt="image"
        />
      </div>
    </div>
  );
};

export default SingleImage;
