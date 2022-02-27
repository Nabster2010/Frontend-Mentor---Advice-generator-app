import Head from "next/head";
import Quote from "../components/Quote";

export default function Home() {
  return (
    <div className="bg-darkGrayishBlue min-h-screen grid place-items-center">
      <Head>
        <title>Frontend Mentor | Advice generator app</title>
        <meta name="description" content="Advice generator app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-manrope max-w-lg ">
        <Quote />
      </main>
    </div>
  );
}
