import classes from "./SlideShow.module.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

function SlideShow(props) {
  const gallaria = useSelector((state) => state.gallaria.images);

  const params = useParams();

  const pathId = params.pathId;

  const currentImage = gallaria[pathId];

  const navigate = useNavigate();

  const ncp = currentImage.position + 1;

  const percentage = (ncp / gallaria.length) * 100;

  const handlePrevImage = () => {
    if (currentImage.isFirst) return;

    navigate(`/detail/${currentImage.position - 1}`, { push: true });
  };

  const handleNextImage = () => {
    if (currentImage.isLast) return;

    navigate(`/detail/${currentImage.position + 1}`, { push: true });
  };

  return (
    <div>
      <div className={classes.bar}>
        <div style={{ width: `${percentage}%` }}></div>
      </div>

      <div className={`container ${classes.details}`}>
        <span className={classes.names}>
          <h3>{props.name}</h3>
          <p>{props.artistName}</p>
        </span>

        <span className={classes.controls}>
          <button onClick={handlePrevImage}>
            <img src={"/static/images/shared/icon-back-button.svg"} alt="" />
          </button>

          <button onClick={handleNextImage}>
            <img src={"/static/images/shared/icon-next-button.svg"} alt="" />
          </button>
        </span>
      </div>
    </div>
  );
}

export default SlideShow;
