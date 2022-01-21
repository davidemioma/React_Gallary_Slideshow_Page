import classes from "./GallariaItem.module.css";
import { Link } from "react-router-dom";

function GallariaItem(props) {
  return (
    <Link to={`/detail/${props.link}`}>
      <div className={classes.item}>
        <img src={props.image} alt="" />
        <span>
          <h1>{props.name}</h1>
          <p>{props.artistName}</p>
        </span>
      </div>
    </Link>
  );
}

export default GallariaItem;
