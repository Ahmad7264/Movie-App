import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error.show) {
    return (
      <div className="error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          Back to movies
        </Link>
      </div>
    );
  }
  const {
    Poster: poster,
    Title: title,

    Plot: plot,
    Year: year,
  } = movie;
  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          Back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
