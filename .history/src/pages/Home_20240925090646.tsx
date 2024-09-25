import Footer from "../components/Footer";
import { Headers } from "../components/Headers";
import { Hero } from "../components/sections/Hero";
import { Test } from "../components/sections/Test";
import { USPS } from "../components/sections/USPS";
import { VideoCarousel } from "../components/sections/VideoCarousel";

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
        {/* <div>
          <CustomContainer>3 cols layout</CustomContainer>
        </div> */}
        <VideoCarousel />
        <Test />
        <Footer />
      </main>
    </>
  );
}

export default Home;
