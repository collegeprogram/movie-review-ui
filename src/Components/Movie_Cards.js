import Image from "next/image";

function Movie_Cards() {
  const movies = [
    {
      movieName: "Inception",
      moviePoster: "/assets/images/inception.jpg",
      movieReleaseYear: { date: "16 July", year: 2010 },
      rating: 4,
    },
    {
        movieName: "3 Idiots",
        moviePoster: "/assets/images/idiots.jpg",
        movieReleaseYear: {date: "25 December", year: 2009},
        rating: 4.3, 
    },
    {
      movieName: "Bangalore Days",
      moviePoster: "/assets/images/bangalore-days.jpg",
      movieReleaseYear: { date: "30 May", year: 2014 },
      rating: 3.5,
    },
      {
        movieName: "Chak De! India",
        moviePoster: "/assets/images/chak-de-india.jpg",
        movieReleaseYear: {date: "10 August", year: 2007},
        rating: 4.3,
      },
      {
        movieName: "Andhadhun",
        moviePoster: "/assets/images/andhadhun.jpg",
        movieReleaseYear: {date: "5 October", year: 2018},
        rating: 3.7,
      },
  ];


  return (
    <div className="movie-grid">
      {movies.map((movie,index)=>(
        <div key={index} className="movie-card">
            <Image
            src={movie.moviePoster}
            alt={movie.movieName}
            width={300}
            height={450}
            className="movie-poster"
          />
          <h2 className="movie-title">{movie.movieName}</h2>
          <p className="movie-release">
            Release Date: {movie.movieReleaseYear.date}, {movie.movieReleaseYear.year}
          </p>
          <p className="movie-rating">Rating: {movie.rating}⭐</p>
        </div>
      ))}
    </div>
  );
}

export default Movie_Cards;
