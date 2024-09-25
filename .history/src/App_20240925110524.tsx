import { lazy } from "react";
const Home = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.default })),
);
function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
