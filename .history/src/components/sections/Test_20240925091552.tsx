// import MuxPlayer from "@mux/mux-player-react";
import { useEffect, useRef, useState } from "react";
export const Test = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            if (videoRef.current) {
              videoRef.current.play(); // Autoplay ketika terlihat
            }
          } else {
            setIsIntersecting(false);
            if (videoRef.current) {
              videoRef.current.pause(); // Pause jika tidak terlihat
            }
          }
        });
      },
      { threshold: 0.5 }, // Setiap 50% dari video terlihat
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  return (
    <section id="hero" className="hero-section">
      <div className="content">
        <h1>Welcome to Our Landing Page</h1>
        <p>Experience the best of our services</p>
      </div>
      <video
        ref={videoRef}
        src="../../../assets/Hero.mp4"
        muted
        playsInline
        className="background-video"
        loop
      ></video>
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
