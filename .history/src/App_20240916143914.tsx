import { CustomContainer } from "./components/CustomContainer";
import { Headers } from "./components/Headers";
import { Hero } from "./components/sections/Hero";
import { USPS } from "./components/sections/USPS";
import { VideoCarousel } from "./components/sections/VideoCarousel";

function App() {
  return (
    <>
      <Headers />
      <main>
        <div className="bg-background">
          <Hero />
          <USPS />
        </div>
        <div>
          <CustomContainer>3 cols layout</CustomContainer>
        </div>
        <VideoCarousel />
      </main>
    </>
  );
}

export default App;
