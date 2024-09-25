export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  {
    poster: "/scr/assets/posters/MuhdMultiverse_Featured_Large.jpg",
    name: "MuhdMultiverse",
  },
  {
    poster: "/scr/assets/posters/MuhdMultiverse_Featured_Large.jpg",
    name: "Family man",
  },
  {
    poster: "/scr/assets/posters/MuhdMultiverse_Featured_Large.jpg",
    name: "Laboratory",
  },
  { poster: "/posters/napoleon.webp", name: "Napoleon" },
  {
    poster: "/scr/assets/posters/MuhdMultiverse_Featured_Large.jpg",
    name: "Person in Darkness",
  },
  {
    poster: "/posters/MuhdMultiverse_Featured_Large.jpg",
    name: "Scary Building",
  },
  { poster: "/posters/stars.webp", name: "Stars" },
];

// export const ads = [
//   {
//     poster: "/posters/ads1",
//     name: "Ads1",
//   },
//   { poster: "/posters/ads2", name: "Ads2" },
//   { poster: "/posters/ads3", name: "Ads3" },
//   { poster: "/posters/ads4", name: "Ads4" },
// ];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
