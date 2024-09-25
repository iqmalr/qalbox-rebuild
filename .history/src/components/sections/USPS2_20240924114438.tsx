import { CustomContainer } from "../CustomContainer";
import { FadeIn } from "../FadeIn";

export const USPS = () => {
  return (
    <CustomContainer className="relative z-10 max-w-[720px] space-y-12 py-36 font-bold text-white">
      <FadeIn className="flex flex-col">
        <div className="text-40">Must Watch!</div>
        <div className="text-21">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
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
