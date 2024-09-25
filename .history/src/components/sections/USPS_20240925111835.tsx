import { lazy } from "react";

const CustomContainer = lazy(() =>
  import("../CustomContainer").then((module) => ({
    default: module.CustomContainer,
  })),
);
const FadeIn = lazy(() =>
  import("../FadeIn").then((module) => ({ default: module.FadeIn })),
);
export const USPS = () => {
  return (
    <CustomContainer className="relative z-10 mt-36 space-y-12 font-bold text-white">
      <FadeIn className="flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="mb-3 text-40">Create profiles for kids.</div>
          <div className="text-21">
            Send kids on adventures with their favorite characters in a space
            made just for them free with your membership, in an Islamic
            environment.
          </div>
        </div>
        <div className="ad-item">
          <img
            src="https://res.cloudinary.com/dr79rpzsv/image/upload/v1727237366/qalbox/ads4_tf5h74.png"
            alt=""
            className="max-w-[340px]"
            loading="lazy"
          />
        </div>
      </FadeIn>
      <FadeIn className="flex flex-row-reverse justify-between">
        <div className="flex flex-col">
          <div className="mb-3 text-40">
            Recite and Learn The Word of Allah.
          </div>
          <div className="text-21">
            Experience the Quran with Sheikh Mishary Rashid: Play, Learn,
            Memorize.
          </div>
        </div>
        <div className="ad-item">
          <img
            src="https://res.cloudinary.com/dr79rpzsv/image/upload/v1727237366/qalbox/ads2_enirhp.png"
            alt=""
            className="max-w-[340px]"
            loading="lazy"
          />
        </div>
      </FadeIn>
      <FadeIn className="flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="mb-3 text-40">Watch everywhere.</div>
          <div className="text-21">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </div>
        </div>
        <div className="ad-item">
          <img
            src="https://res.cloudinary.com/dr79rpzsv/image/upload/v1727237367/qalbox/ads3_i55p2b.png"
            alt=""
            className="max-w-[340px]"
            loading="lazy"
          />
        </div>
      </FadeIn>
      <FadeIn className="flex flex-row-reverse items-center justify-center">
        <div className="flex flex-col">
          <div className="mb-3 text-40">Must Watch!</div>
          <div className="text-21">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </div>
        </div>
        <div className="ad-item">
          <img
            src="https://res.cloudinary.com/dr79rpzsv/image/upload/v1727237365/qalbox/ads1_sxeas7.png"
            alt=""
            className="max-w-[340px]"
            loading="lazy"
          />
        </div>
      </FadeIn>
      <div className="h-10"></div>
    </CustomContainer>
  );
};
