export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  {
    poster:
      "https://res.cloudinary.com/dr79rpzsv/image/upload/v1727237368/qalbox/MuhdMultiverse_Featured_Large_dikfse.jpg",
    name: "MuhdMultiverse",
  },
  {
    poster:
      "https://res.cloudinary.com/dr79rpzsv/image/upload/v1727237366/qalbox/MuhdMultiverse_Thumbnail_Large_Ai_dlujfj.avif",
    name: "MuhdMultiverse AI",
  },
  {
    poster:
      "https://res.cloudinary.com/dr79rpzsv/image/upload/v1727237365/qalbox/KnowingHim_Kids_Main_Thumbail_L_ytvw4s.avif",
    name: "KnowingHim_Kids_Main",
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
export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
