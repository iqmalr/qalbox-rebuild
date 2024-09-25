// import { ads } from "../../data/movies";
import ads1 from "../../../public/posters/ads1.png";
import ads2 from "../../../public/posters/ads2.png";
import ads3 from "../../../public/posters/ads3.png";
import ads4 from "../../../public/posters/ads4.png";
import { CustomContainer } from "../CustomContainer";
import { FadeIn } from "../FadeIn";
export const USPS2 = () => {
  //   const ad = ads.find((item) => item.name === "Ads2");
  return (
    <CustomContainer className="bg-yellow-300 relative z-10 max-w-[860px] space-y-12 py-36 font-bold text-white">
      <FadeIn className="bg-blue-200 flex flex-row">
        <div className="bg-red-400 flex flex-col">
          <div className="mb-3 text-40">Must Watch!</div>
          <div className="text-21">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </div>
        </div>
        <div className="ad-item">
          <img src={ads1} alt="" className="max-w-[340px]" />
        </div>
      </FadeIn>
      <FadeIn className="bg-blue-200 flex flex-row-reverse">
        <div className="bg-red-400 flex flex-col">
          <div className="mb-3 text-40">
            Recite and Learn The Word of Allah.
          </div>
          <div className="text-21">
            Experience the Quran with Sheikh Mishary Rashid: Play, Learn,
            Memorize.
          </div>
        </div>
        <div className="ad-item">
          <img src={ads2} alt="" className="max-w-[340px]" />
        </div>
      </FadeIn>
      <FadeIn className="bg-blue-200 flex flex-row">
        <div className="bg-red-400 flex flex-col">
          <div className="mb-3 text-40">Watch everywhere.</div>
          <div className="text-21">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </div>
        </div>
        <div className="ad-item">
          <img src={ads3} alt="" className="max-w-[340px]" />
        </div>
      </FadeIn>
      <FadeIn className="bg-blue-200 flex flex-row-reverse">
        <div className="bg-red-400 flex flex-col">
          <div className="mb-3 text-40">Create profiles for kids.</div>
          <div className="text-21">
            Send kids on adventures with their favorite characters in a space
            made just for them free with your membership, in an Islamic
            environment.
          </div>
        </div>
        <div className="ad-item">
          <img src={ads4} alt="" className="max-w-[340px]" />
        </div>
      </FadeIn>
      {/* <FadeIn className="text-40">
        Stream on the Qalbox app on your device, smart TVs, consoles, or sticks.
      </FadeIn>
      <FadeIn className="text-40">
        Watch in 4K HDR video with immersive Spatial Audio.
      </FadeIn>
      <FadeIn className="text-40">
        Share a single subscription with up to five people.
      </FadeIn> */}
    </CustomContainer>
  );
};
