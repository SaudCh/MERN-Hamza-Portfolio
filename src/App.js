import { useRef } from 'react';

import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import 'react-multi-carousel/lib/styles.css';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const bannerRef = useRef();

  return (
    <div className="font-main">
      <Header bannerRef={bannerRef} />
      <Banner ref={bannerRef} />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
