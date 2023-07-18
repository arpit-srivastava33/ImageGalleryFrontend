import React from "react";
import {AiFillDelete} from "react-icons/ai";

const Grid = ({ photos }) => {
    const handleClick=()=>{
        console.log("Clicked");
    }
  return (
    <>
      <h1>Our Gallery</h1>
      <div className="grid">
        {photos.map(({ photo, _id }) => (
          <div key={_id} className="grid__item">
            <img
              src={`http://localhost:5000/uploads/${photo}`}
              alt="grid_image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;