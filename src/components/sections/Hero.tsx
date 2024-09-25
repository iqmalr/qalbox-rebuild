import { motion, useScroll, useTransform } from "framer-motion";
import { lazy, useEffect, useRef } from "react";
import videoSrc from "../../assets/Hero.mp4";
const CustomContainer = lazy(() =>
  import("../CustomContainer").then((module) => ({
    default: module.CustomContainer,
  })),
);
export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  useEffect(() => {
    const videoContainer = videoContainerRef.current;
    const video = videoRef.current;
    if (!videoContainer || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              console.error("Autoplay was prevented");
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(videoContainer);

    return () => {
      observer.unobserve(videoContainer);
    };
  }, []);
  return (
    <div className="relative bg-background text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 h-[200vh] w-full"
      >
        <video
          ref={videoRef}
          className="sticky top-0 h-screen w-full object-cover"
          src={videoSrc}
          muted
          playsInline
          loop
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
