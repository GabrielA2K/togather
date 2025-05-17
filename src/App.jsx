import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Nav from "./components/Nav/Nav";
import Hero from "./sections/Hero/Hero";
import Purpose from "./sections/Purpose/Purpose";
import Activities from "./sections/Activities/Activities";
import Impact from "./sections/Impact/Impact";
import Donation from "./sections/Donation/Donation";
import Footer from "./components/Footer/Footer";

import "./App.css";


function App() {
  const [curSection, setSection] = useState("");

  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [purposeRef, purposeInView] = useInView({ threshold: 0.2 });
  const [activitiesRef, activitiesInView] = useInView({ threshold: 0.3 });
  const [impactRef, impactInView] = useInView({ threshold: 0.3 });
  const [donationRef, donationInView] = useInView({ threshold: 0.3 });

  const [demoRef, demoInView] = useInView({ threshold: 0.2 });
  const [testRef, testInView] = useInView({ threshold: 1 });

  useEffect(() => {
    setSection((prev) => {
      switch (true) {
        case heroInView:
          return "hero";
        case purposeInView:
          return "purpose";
        case activitiesInView:
          return "activities";
        case demoInView:
          return "demo-card";
        case impactInView:
          return "impact";
        case donationInView:
          return "donation";
        default:
          return prev;
      }
    });
    console.log(curSection);
  }, [heroInView, purposeInView, activitiesInView, demoInView, impactInView, donationInView]);

  
  return (
    <>
      {/* Viewport Background Gradient Blur */}
      <div className="blob b1"></div>
      <div className="blob b2"></div>
      <div className="blob b3"></div>
      <div className="blob b4"></div>

      <Nav section={curSection} />
      <Hero ref={heroRef} inView={heroInView} />
      <Purpose ref={purposeRef} inView={purposeInView} />
      <Activities ref={activitiesRef} inView={activitiesInView} demoRef={demoRef} demoInView={demoInView}/>
      <Impact ref={impactRef} inView={impactInView} />
      <Donation ref={donationRef} inView={donationInView} />
      <br /><br />
      <Footer />
    </>
  );
}

export default App;
