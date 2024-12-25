import Image from "next/image";
import styles from "./page.module.css";
import PhotoGallery from "./components/gallery";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <p>Ella is a maker of things, based somewhere in Vermont.</p>
        <p>Currently studying engineering at the University of Vermont.</p>
        <p>
          Experienced in sustainable trail building, carpentry, growing
          veg/fruit/poultry, web programming, and fabrication.
        </p>
        {/*  <br />
        <p>Employable for summer 2025.</p>*/}
      </div>
      <div>
        <PhotoGallery
          images={[
            "gallery/woodford.png",
            "/gallery/grout-pond.JPG",
            "/gallery/wood-heart.JPG",
            "gallery/copperbowl.jpg",
            "/gallery/splitflap.JPG",
            "/gallery/waterjet.JPG",
            "gallery/bad-apple-orpheus.JPG",
            "gallery/assemble-acrylic.JPG",
            "/gallery/fyde-car.JPG",
            "/gallery/sourdough.JPG",
          ]}
        />
      </div>
    </main>
  );
}
