import Accordian from "./components/Accordian/index.jsx";
import ImageSlider from "./components/imageSlider/index.jsx";
import LoadMore from "./components/load-more-data/index.jsx";
import QrGenrator from "./components/qr-genrator/index.jsx";
import RandomColor from "./components/random-color/index.jsx";
import StarRating from "./components/star-rating/index.jsx";
import menus from "./components/tree-view/data.js";
import TreeView from "./components/tree-view/index.jsx";

const App = () => {
  return (
    <>
      {/* <Accordian />
      <RandomColor />
      <StarRating noOfStars={10} />
      <ImageSlider limit={10} />
       <LoadMore />
        <TreeView menus={menus} />*/}

      <QrGenrator />
    </>
  );
};

export default App;
