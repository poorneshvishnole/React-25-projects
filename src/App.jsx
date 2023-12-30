import Accordian from "./components/Accordian/index.jsx";
import RandomColor from "./components/random-color/index.jsx";
import StarRating from "./components/star-rating/index.jsx";

const App = () => {
  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating noOfStars={10} />
    </>
  );
};

export default App;
