import FeatureProduct from "../components/FeatureProduct";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import LoginButton from "../pages/LoginButton";

export const Home = () => {
  const data = {
    name: "SARGAM Store",
  };

  return (
    <>
      <HeroSection mydata={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};
