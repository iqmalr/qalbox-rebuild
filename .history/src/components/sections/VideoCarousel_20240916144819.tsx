import { movies } from "../../data/movies";

export const VideoCarousel = () => {
  return (
    <div className="bg-background">
      <div>
        <div>
          <img src={movies[0].poster} alt={movies[0].name} />
        </div>
      </div>
      <div>carousel</div>
      <div>carousel</div>
    </div>
  );
};
