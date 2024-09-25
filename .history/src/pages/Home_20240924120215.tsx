import Footer from "../components/Footer";
import { Headers } from "../components/Headers";
import { Hero } from "../components/sections/Hero";
import { USPS2 } from "../components/sections/USPS2";
import { VideoCarousel } from "../components/sections/VideoCarousel";

function Home() {
  return (
    <>
      <Headers />
      <main>
        <div className="relative z-10 bg-background">
          <Hero />
          <USPS2 />
          <div className="h-100vh" />
        </div>
        {/* <div>
          <CustomContainer>3 cols layout</CustomContainer>
        </div> */}
        <VideoCarousel />

        <Footer />
      </main>
    </>
  );
}

export default Home;
