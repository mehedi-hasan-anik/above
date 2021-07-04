import React, { useContext, useEffect } from "react";
import { userContext } from "../../App";
import "./PhotoGallary.css";
import SinglePhoto from "../SinglePhoto";
import workData from "../../data/work-area.json";

function PhotoGallary() {
  const [photoItems, setPhotoItems] = useContext(userContext);
  useEffect(() => {
    setPhotoItems(workData.slice(0, 8));
  }, []);

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
