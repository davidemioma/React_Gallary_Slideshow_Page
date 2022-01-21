import { Fragment } from "react";
import GallariaList from "../components/GallariaThumbnails/GallariaList";
import Nav from "../components/Header/Nav";

function Gallaria() {
  return (
    <Fragment>
      <Nav />

      <div className="container">
        <GallariaList />
      </div>
    </Fragment>
  );
}

export default Gallaria;
