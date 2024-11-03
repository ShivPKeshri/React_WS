import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => console.log(error));
  };

  //   onClickHandler = () => {
  //     this.fetchData();
  //   };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.onClickHandler}>Get Data</button> */}
        <h2 className="text-center">All Posts</h2>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <Post key={post.id} data={post} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Posts;
