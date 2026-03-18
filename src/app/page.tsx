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
          I make home in Huntington, VT and do work that relates to societal
          functions in ways that are sometimes unconventional.
        </p>
        {/* <br />
        <p>
          On paper, I study Engineering, but my interests are broad. I have
          experience in agriculture, energy systems, fabrication, carpentry,
          environmental conservation, and computer programming.
          
        </p>
        <br />
        <p>
          You can reach me by electronic mail addressed to me at this domain.
        </p> */}
      </div>
      <div>
        <PhotoGallery
          images={[
            "/gallery/woodford.png",
            "/gallery/grout-pond.JPG",
            "/gallery/wood-heart.JPG",
            "/gallery/copperbowl.jpg",
            "/gallery/waterjet.JPG",
            "/gallery/bad-apple-orpheus.JPG",
            "/gallery/peas.JPG",
            "/gallery/timberline.png",
          ]}
        />
      </div>
    </main>
  );
}
