import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { movies } from "../../data/movies";
import { CustomContainer } from "../CustomContainer";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="relative bg-background text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 h-[200vh] w-full"
      >
        <img
          className="sticky top-0 h-screen w-full object-cover"
          src={movies[1].poster}
          loading="lazy"
        />
      </motion.div>
      <CustomContainer className="relative z-10 h-[--hero-height] pb-7">
        <motion.div
          className="flex h-full flex-col items-center justify-end text-center"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}
        >
          <h1 className="mb-5 text-40 font-bold md:text-72">
            The Heart of <br />
            Muslim Entertainment.
          </h1>
          <h1 className="mb-5">
            *After your free trial, enjoy both Qalbox and Muslim Pro from
            S$8.33/month onwards. Cancel anytime.
          </h1>
          <h1 className="mb-5">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h1>
          <div className="flex h-[58px] w-[480px] flex-row text-21">
            <div className="flex basis-3/4 items-center bg-white text-textBlack">
              <p className="p-5">Email Address</p>
              <p></p>
            </div>
            <button className="basis-1/4 bg-primary">Mulai</button>
          </div>
        </motion.div>
      </CustomContainer>
    </div>
  );
};