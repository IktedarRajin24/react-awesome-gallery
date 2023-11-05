/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../Header/Header";
import SingleImage from "../SingleImage/SingleImage";
import AddImage from "../AddImage/AddImage";

const Gallery = ({ galleryImages, onSetImages, onSetGalleryImages }) => {
  const [isChecked, setIsChecked] = useState([]);
  const [dragItemIndex, setDragItemIndex] = useState();
  const [dragOverItemIndex, setDragOverItemIndex] = useState();

  const handleChecked = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setIsChecked((isChecked) => [...isChecked, parseInt(value)]);
    } else {
      setIsChecked(isChecked.filter((id) => id !== parseInt(value)));
    }
  };
  const handleDelete = async () => {
    const newImages = galleryImages.filter(
      (item) => !isChecked.includes(item.id)
    );
    onSetGalleryImages(newImages);
    setIsChecked([]);
  };

  const handleDragStart = (index) => {
    setDragItemIndex(index);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = () => {
    const newImages = [...galleryImages];
    const dragItem = newImages.splice(dragItemIndex, 1);
    newImages.splice(dragOverItemIndex, 0, dragItem[0]);
    onSetGalleryImages(newImages);
    console.log(newImages);
  };

  const handleDragEnter = (index) => {
    setDragOverItemIndex(index);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragOverItemIndex(null);
  };

  const handleDragEnd = (event) => {
    event.preventDefault();
    setDragItemIndex(null);
    setDragOverItemIndex(null);
  };

  return (
    <div className="bg-white md:w-8/12 w-11/12 min-h-screen mx-auto py-2 md:rounded-xl rounded-md">
      <Header isChecked={isChecked} onDelete={handleDelete} />
      <hr />

      <div className="image-container grid md:grid-cols-5 grid-cols-3 md:gap-5 gap-2 my-10 w-11/12 max-h-full mx-auto">
        {galleryImages.map((image, index) => (
          <SingleImage
            key={index}
            image={image}
            onCheck={handleChecked}
            galleryImages={galleryImages}
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragEnter={() => handleDragEnter(index)}
            onDragLeave={(e) => handleDragLeave(e)}
            onDragEnd={(e) => handleDragEnd(e)}
          />
        ))}
        <AddImage onSetImages={onSetImages} />
      </div>
    </div>
  );
};

export default Gallery;
