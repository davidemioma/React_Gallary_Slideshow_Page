import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import Details from "../components/GallariaDetails/Details";
import Nav from "../components/Header/Nav";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { gallariaActions } from "../store/index-redux";
import Modal from "../components/UI/Modal";
import SlideShow from "../components/UI/SlideShow";

function GallariaDetails() {
  const dispatch = useDispatch();

  const gallaria = useSelector((state) => state.gallaria.images);

  const params = useParams();

  const pathId = params.pathId;

  const gallary = gallaria[pathId];

  useEffect(() => {
    dispatch(gallariaActions.setCurrentImageIndex(pathId));
  }, [pathId, dispatch]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Fragment>
      <Nav />

      <Details
        imgSmall={gallary.images.hero.small}
        imgLarge={gallary.images.hero.large}
        name={gallary.name}
        artistName={gallary.artist.name}
        artistImg={gallary.artist.image}
        year={gallary.year}
        description={gallary.description}
        source={gallary.source}
        onClick={openModal}
      />

      {modalIsOpen && (
        <Modal onClick={closeModal} image={gallary.images.gallery} />
      )}

      <SlideShow name={gallary.name} artistName={gallary.artist.name} />
    </Fragment>
  );
}

export default GallariaDetails;
