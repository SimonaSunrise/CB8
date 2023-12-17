import GalleryItem from "../GalleryItem/GalleryItem";
import "./index.css";

const Gallery = ({ GalleryObj }) => {
  return (
    <div className="Gallery">
      <h3>Gallery </h3>
      <div className="Gallery__Cont">
        {GalleryObj.map((item) => (
          <GalleryItem GalleryItemObj={item} img key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default Gallery;
