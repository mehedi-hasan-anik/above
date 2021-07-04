import React, { useContext } from "react";
import { userContext } from "../../App";
import "./PhotoGallary.css";
import SinglePhoto from "../SinglePhoto";

function PhotoGallary() {
  const [photoItems, setPhotoItems] = useContext(userContext);
  return (
    <div className="row photo-gallary">
      {photoItems &&
        photoItems.map((item) => (
          <SinglePhoto key={item.id} name={item.title} photo={item.photo} />
        ))}
    </div>
  );
}

export default PhotoGallary;
