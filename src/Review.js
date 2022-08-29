import React, { Component } from "react";

const key = "9WouZZwa9H2ftdsaUazlM23fIRtgrBVr";
const url = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${key}`;

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(url)
      .then((response) => response.json())
      .then((reviews) => {
        console.log(reviews);
      })
      .catch((error) => console.log(error));
  }
  render() {
    return <div>Review</div>;
  }
}
