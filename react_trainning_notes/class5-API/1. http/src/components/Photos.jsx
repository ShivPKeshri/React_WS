import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => setPhotos(response.data))
      .catch((error) => {
        console.log(error);
      });
  };

  // const onClickHandler = () => {
  //   fetchData();
  // };

  return (
    <div>
      {/* <button onClick={onClickHandler} className="btn btn-primary btn-block">
        Get Photos
      </button> */}
      <h2 className="text-center">All Photos</h2>
      <div class="row">
        {photos.map((photo) => (
          <Photo data={photo} />
        ))}
      </div>
    </div>
  );
};
export default Photos;
