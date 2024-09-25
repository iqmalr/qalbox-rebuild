import { CustomContainer } from "./components/CustomContainer";
import { Headers } from "./components/Headers";
import { Hero } from "./components/sections/hero";

function App() {
  return (
    <>
      <Headers />
      <main>
        <Hero />
        <div>
          <CustomContainer>usps</CustomContainer>
        </div>
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
