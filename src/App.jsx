import Accordian from "./components/Accordian/index.jsx";
import ImageSlider from "./components/imageSlider/index.jsx";
import LoadMore from "./components/load-more-data/index.jsx";
import RandomColor from "./components/random-color/index.jsx";
import StarRating from "./components/star-rating/index.jsx";

const App = () => {
  return (
    <>
      {/* <Accordian />
      <RandomColor />
      <StarRating noOfStars={10} />
      <ImageSlider limit={10} /> */}
      <LoadMore />
    </>
  );
};

export default App;
