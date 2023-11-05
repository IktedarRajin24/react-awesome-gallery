/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Gallery from "./Components/Gallery/Gallery";

const images = [
  {
    id: 1,
    imageUrl: "/images/image-1.jpeg",
  },
  {
    id: 2,
    imageUrl: "/images/image-2.jpeg",
  },
  {
    id: 3,
    imageUrl: "/images/image-3.jpeg",
  },
  {
    id: 4,
    imageUrl: "/images/image-4.jpeg",
  },
  {
    id: 5,
    imageUrl: "/images/image-5.jpeg",
  },
  {
    id: 6,
    imageUrl: "/images/image-6.jpeg",
  },
  {
    id: 7,
    imageUrl: "/images/image-7.jpeg",
  },
  {
    id: 8,
    imageUrl: "/images/image-8.jpeg",
  },
  {
    id: 9,
    imageUrl: "/images/image-9.jpeg",
  },
  {
    id: 10,
    imageUrl: "/images/image-10.jpeg",
  },
  {
    id: 11,
    imageUrl: "/images/image-11.jpeg",
  },
];

function App() {
  const [galleryImages, setGalleryImages] = useState(images);
  const handleAddImages = ({ target: { files } }) => {
    if (files) {
      const newImage = {
        id: Date.now(),
        imageUrl: URL.createObjectURL(files[0]),
      };
      setGalleryImages((current) => [...current, newImage]);
    }
  };

  return (
    <div className="bg-slate-400 py-5">
      <Gallery
        galleryImages={galleryImages}
        onSetImages={handleAddImages}
        onSetGalleryImages={setGalleryImages}
      />
    </div>
  );
}

export default App;
