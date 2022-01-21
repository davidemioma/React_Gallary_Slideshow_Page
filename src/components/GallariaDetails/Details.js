import classes from "./Details.module.css";

function Details(props) {
  return (
    <div className={`container ${classes.details}`}>
      <div className={classes.info}>
        <div className={classes.images}>
          <img className={classes.art_work_small} src={props.imgSmall} alt="" />

          <img className={classes.art_work_big} src={props.imgLarge} alt="" />

          <button onClick={props.onClick}>
            <img src={"/static/images/shared/icon-view-image.svg"} alt="" />
            view image
          </button>
        </div>

        <div className={classes.title}>
          <span>
            <h1>{props.name}</h1>
            <p>{props.artistName}</p>
          </span>

          <img src={props.artistImg} alt="" />
        </div>
      </div>

      <div className={classes.detail}>
        <h1>{props.year}</h1>

        <p>{props.description}</p>

        <a target="_blank" href={props.source}>
          go to source
        </a>
      </div>
    </div>
  );
}

export default Details;
