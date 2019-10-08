import React, { Component } from "react";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.onChange = this.onChange.bind(this);
    this.onChange = this.onSubmit.bind(this);
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { contentType: "application/json" },
      body:JSON.stringify(post)
    })
    .then(res=>res.json())
    .then(data=> console.log(data))
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body:</label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
            <br />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Postform;
