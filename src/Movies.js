import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();
  console.log(movies);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <section className="movies">
      {movies?.map((movie) => {
        const {
          imdbID: id,
          Poster: poster,
          Title: title,
          Type: type,
          Year: year,
        } = movie;

        return <Link to={`/movies/${id}`} key={id} className="movie">
            <article>
                <img src={poster} alt={title} />
                <div className="movie-info">
                    <h3 className="title">{title}</h3>
                    <div className="data">
                        <span>{type}</span>
                        <span>{year}</span>
                    </div>
                </div>
                <div className="movie-buttons">
                    <button className="btn play">Play</button>
                    <button className="btn watchlist">+ Watchlist</button>
                </div>
            </article>
        </Link>;
      })}
    </section>
  );
};

export default Movies;
