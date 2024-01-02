import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/Bs";
import "./style.css";

const ImageSlider = ({ limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (limit) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://picsum.photos/v2/list?page=1&limit=${limit}`
      );

      const data = await res.json();

      if (data) {
        setImages(data);

        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  useEffect(() => {
    fetchData(limit);
  }, [limit]);

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, i) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className={
                currentSlide === i
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : " current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              >
                {" "}
              </button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
