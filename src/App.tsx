import ConfigPanel from "./components/ConfigPanel/ConfigPanel";
import ContentContainer from "./components/ContentPanel/ContentContainer";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      {/* Flex container to locate Footer under all the other components */}
      <div className="flex flex-col min-h-screen">
        {/* Grid layout Cols-2 Rows-2 for resolutions higher than xl, otherwise Cols-1 Rows-3*/}
        {/* "layout" and "layout2" are custom grid templates, added in tailwind.config.js */}
        <div className="grid 2xl:grid-rows-layout 2xl:grid-cols-[1fr_2fr] grid-rows-layout2 grid-cols-1 flex-grow">
          <div className="w-full 2xl:col-start-2 2xl:row-start-1 col-start-1 row-start-1">
            <NavBar />
          </div>
          <div className="w-full 2xl:col-start-1 2xl:col-end-2 2xl:row-start-1 2xl:row-end-4 col-start-1 row-start-2">
            <ConfigPanel />
          </div>
          <div className="w-full 2xl:col-start-2 2xl:row-start-2 2xl:row-end-4 col-start-1 row-start-3 flex flex-col h-full">
            <ContentContainer />
          </div>
        </div>
        <div className="w-full mt-8">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;