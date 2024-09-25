import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "../Button";
import { CustomContainer } from "../CustomContainer";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 0]);
  return (
    <div className="relative h-[200vh] bg-background text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="bg-black absolute -top-[--header-height] left-0 h-[200vh] w-full"
      >
        <img
          src="https://app.muslimpro.com/qalbox/_next/image?url=https%3A%2F%2Fdownload.muslimpro.com%2Fimages%2Fqalbox%2Fen%2Ffeatured%2Flarge%2FWomen%2520in%2520the%2520Quran%2520and%2520the%2520Blessed%2520Household%2520of%2520the%2520Prophet_Featured_Image_Large.jpg&w=3840&q=100"
          alt="Women in the Quran and the Blessed Household of the Prophet"
          className="sticky top-0 h-screen w-full object-cover"
        />
      </motion.div>
      <CustomContainer className="relative z-10 flex min-h-[--hero-height] flex-col justify-end pb-7">
        <h1 className="mb-10 text-72 font-bold">
          Assalamualaikum
          <br />
          from Qalbox.
        </h1>
        <Button className="mb-16" size="large">
          Large Button
        </Button>
        <p className="font-semibold">Watch on Muslim Pro.</p>
      </CustomContainer>
    </div>
  );
};
