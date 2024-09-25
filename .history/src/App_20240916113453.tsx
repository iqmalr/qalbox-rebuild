import { CustomContainer } from "./components/CustomContainer";
import { Headers } from "./components/Headers";
import { Hero } from "./components/sections/Hero";
import { USPS } from "./components/sections/USPS";

function App() {
  return (
    <>
      <Headers />
      <main>
        <Hero />
        <USPS />
        <div>
          <CustomContainer>3 cols layout</CustomContainer>
        </div>
        <div>
          <CustomContainer>Carousel with poster</CustomContainer>
        </div>
      </main>
    </>
  );
}

export default App;
