import Slider from "../../components/Slider/Slider";
import Category from "../../components/Category/Category";
import TuitionTypes from "../../components/TutionTypes/TuitionTypes";
import Stats from "../../components/Stats/Stats";
import Subscribe from "../../components/Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Slider />
      <Stats />
      <Category />
      <TuitionTypes />
      <Subscribe />
    </div>
  );
};

export default Home;
