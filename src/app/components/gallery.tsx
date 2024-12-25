import styles from "./gallery.module.css";

type PhotoGalleryProps = {
  images: string[];
};

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  return (
    <div className={styles.galleryContainer}>
      {images.map((image, index) => (
        <div key={index} className={styles.galleryItem}>
          <img
            src={image}
            alt={`Gallery item ${index + 1}`}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
