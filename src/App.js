import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import "react-multi-carousel/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";

function Home() {
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

function App() {
  return (
    <Router>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
