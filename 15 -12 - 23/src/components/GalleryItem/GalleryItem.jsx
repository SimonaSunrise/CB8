import "./index.css";

const GalleryItem = ({ GalleryItemObj }) => {
  return (
    <div className="GalleryItem">
      <img src={GalleryItemObj.img} alt={GalleryItemObj.title} />
    </div>
  );
};

export default GalleryItem;
