import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingPage from "./screens/LandingPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
