// import { ads } from "../../data/movies";
import ads2 from "../../../public/posters/ads2.png";
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
          <img src={ads2} alt="" className="max-w-[100px]" />
          {/* {ad && (
            <>
              <img src={ad.poster} alt={ad.name} width={300} height={200} />
              <p>{ad.name}</p>
            </>
          )} */}
        </div>

        {/* New Original movie every month - always ad-free. */}
      </FadeIn>
      <FadeIn className="text-40">
        Stream on the Qalbox app on your device, smart TVs, consoles, or sticks.
      </FadeIn>
      <FadeIn className="text-40">
        Watch in 4K HDR video with immersive Spatial Audio.
      </FadeIn>
      <FadeIn className="text-40">
        Share a single subscription with up to five people.
      </FadeIn>
    </CustomContainer>
  );
};
