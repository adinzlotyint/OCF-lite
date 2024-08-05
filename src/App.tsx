import ConfigPanel from "./components/ConfigPanel";
import ContentContainer from "./components/ContentContainer";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grid xl:grid-rows-layout xl:grid-cols-[1fr_2fr] grid-rows-layout2 grid-cols-1 flex-grow">
        <div className="w-full xl:col-start-2 xl:row-start-1 col-start-1 row-start-1">
          <NavBar />
        </div>
        <div className="w-full xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-4 col-start-1 row-start-2">
          <ConfigPanel />
        </div>

        <div className="w-full xl:col-start-2 xl:row-start-2 xl:row-end-3 col-start-1 row-start-3">
          <ContentContainer />
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
