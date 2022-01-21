import GallariaItem from "./GallariaItem";
import { useSelector } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function GallariaList() {
  const gallaria = useSelector((state) => state.gallaria.images);

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 764: 2, 1024: 4 }}>
      <Masonry gutter="2rem">
        {gallaria.map((item) => (
          <GallariaItem
            key={item.id}
            link={item.position}
            name={item.name}
            artistName={item.artist.name}
            image={item.images.thumbnail}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default GallariaList;
