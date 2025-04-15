import Image from "next/image";

function Movie_Cards() {
  const movies = {
    movieName: "Inception",
    moviePoster: "/assets/images/inception.jpg",
    movieReleaseYear: { date: "16 July", year: 2010 },
    rating: 4,
  };

  return (
    <div className="movie-grid">
      <div className="movie-card">
        <Image
          src={movies.moviePoster}
          alt={movies.movieName}
          width={300}
          height={450}
          className="movie-poster"
        />
        <h2 className="movie-title">{movies.movieName}</h2>
        <p className="movie-release">
          Release Date: {movies.movieReleaseYear.date}, {movies.movieReleaseYear.year}
        </p>
        <p className="movie-rating">Rating: {movies.rating}⭐</p>
      </div>
    </div>
  );
}

export default Movie_Cards;
