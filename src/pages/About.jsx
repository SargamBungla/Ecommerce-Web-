import HeroSection from "../components/HeroSection";
import Trusted from "../components/Trusted";
import Services from "../components/Services";

// ✅ Koi import nahi chahiye — About mein Redux use nahi hota

export const About = () => {
  const data = {
    name: "SARGAM Ecommerce",
  };

  return (
    <>
      <HeroSection mydata={data} />
      <Services />
      <Trusted />
    </>
  );
};
