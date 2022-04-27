import Head from "next/head";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
// import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food Ordering App</title>
        <meta name="description" content="Best Pizza Shop In our Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList/>
      
      
    </div>
  );
}
