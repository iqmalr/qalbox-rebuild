export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  { poster: "/posters/airplane.webp", name: "Airplane" },
  {
    poster: "/posters/family-man.webp",
    name: "Family man",
  },
  {
    poster: "/posters/laboratory.webp",
    name: "Laboratory",
  },
  { poster: "/posters/napoleon.webp", name: "Napoleon" },
  {
    poster: "/posters/person-in-darkness.webp",
    name: "Person in Darkness",
  },
  {
    poster: "/posters/scary-building.webp",
    name: "Scary Building",
  },
  { poster: "/posters/stars.webp", name: "Stars" },
];

export const ads = [
  {
    poster: "/posters/ads1",
    name: "Ads1",
  },
  { poster: "/posters/ads2", name: "Ads2" },
  { poster: "/posters/ads3", name: "Ads3" },
  { poster: "/posters/ads4", name: "Ads4" },
];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
