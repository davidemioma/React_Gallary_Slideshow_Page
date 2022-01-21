import classes from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className={classes.header}>
      <nav className={`container ${classes.nav}`}>
        <Link to="/">galleria.</Link>
        <p>start slideshow</p>
      </nav>
    </header>
  );
}

export default Nav;
