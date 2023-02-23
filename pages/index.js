import Head from "next/head";
import Image from "next/image";

export default function Home({ gh }) {
  return (
    <div>
      <Head>
        <title>ella.cx</title>
        <link rel="icon" href="https://github.com/exu3.png" />
      </Head>

      <main>
        <h1>Greetings, wanderer.</h1>
        <p>It appears as though you have stumbled upon my website.</p>

        <Image src={gh.avatar_url} alt="exu3" width={200} height={200} />
      </main>

      <footer></footer>
    </div>
  );
}

export async function getStaticProps(context) {
  const ghData = await fetch("https://api.github.com/users/exu3");
  const gh = await ghData.json();
  return {
    props: {
      gh,
    },
  };
}
