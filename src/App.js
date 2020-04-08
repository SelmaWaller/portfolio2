import React, { useEffect } from "react";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
function App({ children }) {
  useEffect(() => {
    document.title = "Portfolio | Selma Waller";
  }, []);

  return (
    <>
      <Navigation />
      <div className="wave-solid"></div>
      <div className="wave-transparent"></div>
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}

export default App;
