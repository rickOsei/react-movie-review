import React, { Component } from "react";
import Loading from "./Loading";

const key = "9WouZZwa9H2ftdsaUazlM23fIRtgrBVr";
const url = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${key}`;

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      Loading: true,
    };
  }

  componentDidMount() {
    fetch(url)
      .then((response) => response.json())
      .then((reviews) => {
        this.setState({ Loading: false });
        this.setState({ movies: reviews.results });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <main className="container">
          <div className="m-title">
            <h2 className="heading">movies review</h2>
            <div className="underline"></div>
          </div>
          <article className="menu">
            {this.state.movies.map((review, index) => {
              return <Movies key={index} {...review} />;
            })}
          </article>
        </main>
      </>
    );
  }
}

const Movies = ({
  display_title,
  mpaa_rating,
  critics_pick,
  byline,
  headline,
  summary_short,
  publication_date,
}) => {
  return (
    <div className="movie">
      <div className="title">
        <h2>{display_title}</h2>
      </div>
      <div className="details">
        <h4 className="rating">{mpaa_rating || "Unrated"}</h4>
        <h4 className="genre">{critics_pick}</h4>
        <h4 className="direct">{publication_date}</h4>
      </div>
      <p className="info">{summary_short}</p>
      <h4 className="byline">
        <span>by</span> {byline}
      </h4>

      <h4 className="headline">{headline}</h4>
    </div>
  );
};
