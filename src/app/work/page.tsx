import Image from "next/image";
import styles from "../page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Working Principles</h1>
        <br />
        <p>
          I am interested in doing work that engages with societal functions in
          a way that is tangible, useful, and perhaps a bit unconventional. I
          want to make things that solve problems. I want to feel intellectually
          challenged.
        </p>
        <br />
        <p>
          I am good at following systems and learning new ones. I am happy to do
          repetitive or tedious work as long as it is in a space that feels
          interesting/alive, like a shop or a farm.
        </p>
        <br />
        <p>
          I have previous work experience in software, fabrication, and physical
          trades. I have worked in fabrication shops, in the field, and on
          crews. I care about doing good work, being a dependable team member,
          and understanding systems.
        </p>
      </div>
    </main>
  );
}
