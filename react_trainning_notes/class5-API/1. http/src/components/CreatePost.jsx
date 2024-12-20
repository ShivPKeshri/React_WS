import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {

  const onClickHandler = () => {
    let post = {
      userId: 1,
      title: "title 101",
      body: "body 101",
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Create Post</h1>
      <button onClick={ onClickHandler }  className="btn btn-primary">Send Data</button>
    </div>
  );
};
export default CreatePost;
