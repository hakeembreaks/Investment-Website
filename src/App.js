import "./App.css";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

import Invest from "./main/invest/Invest";
import Jeeter from "./main/jeeter/Jeeter";
import Stray from "./main/stray/Stray";
import Belle from "./main/belle/Belle";
import Works from "./main/works/Works";
import Footer from "./main/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Invest />
      <Jeeter />
      <Stray />
      <Belle />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
