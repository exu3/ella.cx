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
          functions in ways that are tangible, useful, and often a bit
          unconventional.
        </p>
        <br />
        <p>
          I have experience in carpentry, fabrication, agriculture, energy, and
          software development, and I am currently on a side quest in
          Engineering School in pursuit of a college degree.
        </p>
        <br />
        <p>
          You can reach me by electronic mail addressed to me at this domain. Or
          by calling my landline, the digits of which can be derived by
          integration of the following:
        </p>
        <br />
        <div
          style={{
            backgroundColor: "white",
            padding: "12px",
            width: "400px",
          }}
        >
          <Image
            alt="integral which computes digits of phone number"
            src="/landline-integral.png"
            width="342"
            height="53"
          />
        </div>
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
