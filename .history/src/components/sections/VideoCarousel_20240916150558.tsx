import {
  Movie,
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
} from "../../data/movies";

export const VideoCarousel = () => {
  return (
    <div className="bg-background">
      <div className="mb-5 flex gap-5 overflow-clip">
        <div className="w-[60vw] shrink-0 overflow-clip rounded-2xl">
          <img
            className="h-full w-full object-cover"
            src={movies[0].poster}
            alt={movies[0].name}
          />
        </div>
        <div className="w-[60vw] shrink-0 overflow-clip rounded-2xl">
          <img
            className="h-full w-full object-cover"
            src={movies[1].poster}
            alt={movies[1].name}
          />
        </div>
        <div className="w-[60vw] shrink-0 overflow-clip rounded-2xl">
          <img
            className="h-full w-full object-cover"
            src={movies[2].poster}
            alt={movies[2].name}
          />
        </div>
      </div>
      <SmallVideoCarousel movies={randomMoviesSet1} />
      <SmallVideoCarousel movies={randomMoviesSet2} />
    </div>
  );
};

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="flex gap-3">
      {movies.map((movie, index) => (
        <div className="w-[23vw] shrink-0" key={`${movie.name}-${index}`}>
          <img
            className="h-full w-full rounded-xl object-cover"
            src={movie.poster}
            alt={movie.name}
          />
        </div>
      ))}
    </div>
  );
};
