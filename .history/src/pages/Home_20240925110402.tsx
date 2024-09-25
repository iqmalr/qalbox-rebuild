import { lazy } from "react";
// import Footer from "../components/Footer";
// import { Headers } from "../components/Headers";
// import { Hero } from "../components/sections/Hero";

// import { USPS } from "../components/sections/USPS";
// import { VideoCarousel } from "../components/sections/VideoCarousel";
// const CustomContainer = lazy(() =>
//   import("../CustomContainer").then((module) => ({
//     default: module.CustomContainer,
//   })),
// );
const Headers = lazy(() =>
  import("../components/Headers").then((module) => ({
    default: module.Headers,
  })),
);
const Hero = lazy(() =>
  import("../components/sections/Hero").then((module) => ({
    default: module.Hero,
  })),
);
const USPS = lazy(() =>
  import("../components/sections/USPS").then((module) => ({
    default: module.USPS,
  })),
);
const VideoCarousel = lazy(() =>
  import("../components/sections/VideoCarousel").then((module) => ({
    default: module.VideoCarousel,
  })),
);
const Footer = lazy(() =>
  import("../components/Footer").then((module) => ({
    default: module.Footer,
  })),
);
function Home() {
  return (
    <>
      <Headers />
      <main>
        <div className="relative z-10 bg-background">
          <Hero />
          <USPS />
          <div className="h-100vh" />
        </div>
        <VideoCarousel />
        <Footer />
      </main>
    </>
  );
}

export default Home;
