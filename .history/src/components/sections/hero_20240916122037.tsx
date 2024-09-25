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
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="bg-background text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 h-[200vh] w-full"
      >
        {/* <img
          className="sticky top-0 h-screen w-full object-cover"
          src="https://app.muslimpro.com/qalbox/_next/image?url=https%3A%2F%2Fdownload.muslimpro.com%2Fimages%2Fqalbox%2Fen%2Ffeatured%2Flarge%2FWomen%2520in%2520the%2520Quran%2520and%2520the%2520Blessed%2520Household%2520of%2520the%2520Prophet_Featured_Image_Large.jpg&w=3840&q=100"
        /> */}
      </motion.div>
      <CustomContainer className="relative z-10 h-[--hero-height] pb-7">
        <motion.div
          className="flex h-full flex-col items-start justify-end"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}
        >
          <h1 className="mb-10 text-40 font-bold md:text-72">
            All Apple Originals. <br />
            Only on Apple TV+.
          </h1>
          <Button className="mb-16" size="large">
            Stream now
          </Button>
          <p className="font-semibold">Watch on the 📺 app.</p>
        </motion.div>
      </CustomContainer>
    </div>
  );
};
