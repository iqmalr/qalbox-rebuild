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
    poster:
      "https://res.cloudinary.com/dr79rpzsv/image/upload/v1727237367/qalbox/Me_MyMasjid_Featured_Image_Large_ux1wvg.avif",
    name: "Me_MyMasjid",
  },
  {
    poster:
      "https://res.cloudinary.com/dr79rpzsv/image/upload/v1727237366/qalbox/Knowing-Him-_SAW_Miracles-of-Prophet-_SAW__Thumbnail_Large_wxogxf.avif",
    name: "Knowing-Him-_SAW",
  },
  {
    poster:
      "https://res.cloudinary.com/dr79rpzsv/image/upload/v1727237366/qalbox/RevelationsSurah_Episodic_Large_QBOri_Surah_Al-Alaq_v2_ymzlmb.avif",
    name: "Surah_Al-Alaq",
  },
  {
    poster:
      "https://res.cloudinary.com/dr79rpzsv/image/upload/v1727237367/qalbox/RevelationsSurah_Episodic_Large_QBOri_Surah_Al-Kafirun_v2_ssgmyj.avif",
    name: "Surah_Al-Kafirun",
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
