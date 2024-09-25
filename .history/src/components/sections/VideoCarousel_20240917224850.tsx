import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Movie,
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
} from "../../data/movies";

export const VideoCarousel = () => {
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.66], [2, 1.5, 1]);
  return (
    <div className="bg-background pb-8">
      <div ref={carouselWrapperRef} className="h-[300vh] overflow-clip">
        <div className="sticky top-0 flex h-screen items-center">
          <div className="relative left-1/2 mb-5 flex -translate-x-1/2 gap-5">
            <div className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl">
              <img
                className="h-full w-full object-cover"
                src={movies[0]?.poster}
                alt={movies[0]?.name}
              />
            </div>
            <motion.div
              style={{ scale }}
              className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl"
            >
              <img
                className="h-full w-full object-cover"
                src={movies[1].poster}
                alt={movies[1].name}
              />
            </motion.div>
            <div className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl">
              <img
                className="h-full w-full object-cover"
                src={movies[2].poster}
                alt={movies[2].name}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <SmallVideoCarousel movies={randomMoviesSet1} />
        <div className="[--carousel-offset:-32px] [--duration:68s]">
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </div>
    </div>
  );
};

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="overflow-clip">
      <div className="relative left-[var(--carousel-offset,0px)] flex animate-carousel-move gap-3">
        {movies.map((movie, index) => (
          <div
            className="aspect-video w-[23vw] shrink-0"
            key={`${movie.name}-${index}`}
          >
            <img
              className="h-full w-full rounded-xl object-cover"
              src={movie.poster}
              alt={movie.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
