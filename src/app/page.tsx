import Image from "next/image";
import styles from "./page.module.css";
import PhotoGallery from "./components/gallery";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>ella.cx</h1>
      <span className={styles.subtitle}>(a maker of things)</span>

      <div className={styles.header}>
        <p>
          I make home in Huntington, VT and do work that engages with societal
          functions in a way that is tangible, fun/interesting, and useful
          (sometimes in unconventional ways). I am currently on a side quest as
          an undergrad in the College of Engineering at UVM.
        </p>
        <br />
        <p>
          Have experience in carpentry, fabrication, agriculture, energy,
          software development, design, and trail building.
        </p>
      </div>
      <div>
        <PhotoGallery
          images={[
            "/gallery/woodford.png",
            "/gallery/grout-pond.JPG",
            "/gallery/wood-heart.JPG",
            "/gallery/copperbowl.jpg",
            "/gallery/splitflap.JPG",
            "/gallery/waterjet.JPG",
            "/gallery/bad-apple-orpheus.JPG",
            "/gallery/peas.JPG",
            "/gallery/sourdough.JPG",
          ]}
        />
      </div>
    </main>
  );
}
