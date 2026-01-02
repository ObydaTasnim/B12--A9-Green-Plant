// src/pages/Home.jsx
import HeroSection from "../components/home/HeroSection";
import TopPlants from "../components/home/TopPlants";
import CareTips from "../components/home/CareTips";
import Experts from "../components/home/Experts";
import EcoDecor from "../components/home/EcoDecor";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TopPlants />
      <CareTips />
      <Experts />
      <EcoDecor />
    </div>
  );
};

export default Home;
