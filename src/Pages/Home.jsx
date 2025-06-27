import BestSeller from "../Components/BestSeller";
import Hero from "../components/Hero";
import LatestCollection from "../Components/LatestCollection";
import NewsLetterBox from "../components/NewsLetterBox";
import OurPolicies from "../components/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicies />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
