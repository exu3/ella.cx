import Image from "next/image";
import styles from "./gallery.module.css";

type PhotoGalleryProps = {
  images: string[];
};

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  return (
    <div className={styles.galleryContainer}>
      {images.map((image, index) => (
        <div key={index} className={styles.galleryItem}>
          <Image
            src={image}
            alt={image}
            className={styles.image}
            width={300}
            height={300}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
