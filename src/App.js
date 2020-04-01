import React from 'react';

import Navigation from './components/navigation';
import Footer from './components/footer';
function App({children}) {
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
