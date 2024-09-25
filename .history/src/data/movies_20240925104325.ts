export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  {
    poster: "/src/assets/posters/MuhdMultiverse_Featured_Large.png",
    name: "MuhdMultiverse",
  },
  {
    poster: "/src/assets/posters/MuhdMultiverse_Thumbnail_Large_Ai.png",
    name: "Family man",
  },
  {
    poster: "/src/assets/posters/KnowingHim_Kids_Main_Thumbail_L.png",
    name: "Laboratory",
  },
  {
    poster: "/src/assets/posters/Me&MyMasjid_Featured_Image_Large.png",
    name: "Napoleon",
  },
  {
    poster:
      "/src/assets/posters/Knowing-Him-(SAW)Miracles-of-Prophet-(SAW)_Thumbnail_Large.png",
    name: "Person in Darkness",
  },
  {
    poster:
      "/src/assets/posters/RevelationsSurah_Episodic_Large_QBOri_Surah_Al-Alaq_v2.png",
    name: "Scary Building",
  },
  {
    poster:
      "/src/assets/posters/RevelationsSurah_Episodic_Large_QBOri_Surah_Al-Kafirun_v2.png",
    name: "Stars",
  },
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
