import { useEffect, useRef, useState } from "react";
import ConfigPanel from "./components/ConfigPanel/ConfigPanel";
import ContentContainer from "./components/ContentPanel/ContentContainer";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar/NavBar";
import ManualPage from "./components/ContentPanel/ManualPage";
import ContactPage from "./components/ContentPanel/ContactPage";
import { CombinedContexts } from "./hooks/CombinedContexts";

function App() {
  // 0 - reporting, 1 - manual, 2 - contact
  const [currPage, setCurrPage] = useState<0 | 1 | 2>(0);
  const isFirstRender = useRef(true); // Track first render
  const manualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else if (manualRef.current) {
      manualRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currPage]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="grid 2xl:grid-rows-layout 2xl:grid-cols-[1fr_2fr] grid-rows-layout2 grid-cols-1 flex-grow">
        <div className="w-full 2xl:col-start-2 2xl:row-start-1 col-start-1 row-start-1">
          <NavBar setPage={(page: 0 | 1 | 2) => setCurrPage(page)} />
        </div>
        <CombinedContexts>
          <div className="w-full 2xl:col-start-1 2xl:col-end-2 2xl:row-start-1 2xl:row-end-4 col-start-1 row-start-2">
            <ConfigPanel />
          </div>
          <div
            ref={manualRef}
            className="w-full 2xl:col-start-2 2xl:row-start-2 2xl:row-end-4 col-start-1 row-start-3 flex flex-col h-full"
          >
            {currPage === 0 && <ContentContainer />}
            {currPage === 1 && <ManualPage />}
            {currPage === 2 && <ContactPage />}
          </div>
        </CombinedContexts>
      </div>
      <div className="w-full mt-8">
        <Footer setPage={(page: 0 | 1 | 2) => setCurrPage(page)} />
      </div>
    </div>
  );
}

export default App;
