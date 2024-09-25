// import MuxPlayer from "@mux/mux-player-react";
import { useEffect, useRef } from "react";
// import videoSrc from "../../assets/Hero.mp4";
// import { CustomContainer } from "../CustomContainer";
export const Test = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

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

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);
  return (
    // <CustomContainer>
    //   <video width="100%" controls>
    //     <source src={videoSrc} type="video/mp4" />
    //     Browser Anda tidak mendukung tag video.
    //   </video>
    // </CustomContainer>
    <section ref={sectionRef} id="hero" className="hero-section">
      <div className="content">
        <h1>Welcome to Our Landing Page</h1>
        <p>Experience the best of our services</p>
      </div>
      <video
        ref={videoRef}
        src="/assets/Hero.mp4"
        muted
        playsInline
        loop
        className="background-video"
      />
    </section>
    // <MuxPlayer
    //   streamType="live"
    //   playbackId="02nE9gAvv01jozcxQbrcUBU6icz7vplp1ohralw6JsTTw"
    //   metadataVideoTitle="Placeholder (optional)"
    //   metadataViewerUserId="Placeholder (optional)"
    //   primaryColor="#FFFFFF"
    //   secondaryColor="#000000"
    // />
  );
};
