import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://veritoot.com">Veritoot</a>
        </h1>

        <p className={styles.description}>
          So, obviously this is Next.js boilerplate. Waiting for the domain to
          carry over.{" "}
        </p>

        <p className={styles.description}>
          Eventually this will be the home to two projects:{" "}
        </p>

        <p className={styles.description}>
          Veritoot - a verification-as-a-service application for the Mastodon
          and other federated networks that is geared towards reliability and
          transparency.{" "}
        </p>

        <p className={styles.description}>
          OpenVeritoot - The software needed to host your own
          verification-as-a-service for Mastodon.{" "}
        </p>

        <p className={styles.description}>
          More details to come, just wanted to get this out there.{" "}
        </p>

        <hr />
        <h2>What the heck is this?</h2>
        <p className={styles.description}>
          {" "}
          Right now, there's no "verified user" status on Mastodon - by design.
          But you can link your #mastodon account is associated with a
          particular website, by putting a link into the HTML of that site.{" "}
        </p>

        <p className={styles.description}>
          #OpenVeritoot will be a system that sets up a DB & site for a third
          party to verify you are who you say you are by setting up a site
          containing that link. #Veritoot is the first service using
          #OpenVeritoot.
        </p>

        <p className={styles.description}>
          #OpenVeritoot will be a system that sets up a DB & site for a third
          party to verify you are who you say you are by setting up a site
          containing that link. #Veritoot is the first service using
          #OpenVeritoot.
        </p>

        <p className={styles.description}>
          So for example, let's say that @cotterpin@mastodon.doozer is claiming
          that THEY are Cotterpin Doozer, but so is
          @convincingjohn@mastodon.fraggle.{" "}
        </p>

        <p className={styles.description}>
          #Veritoot (or other #OpenVeritoot service) can set up a link on their
          verification site: http://[servicename]/[verifying
          party]/@cotterpin@mastadon.doozer, which contains the "rel=me" code,
          this shows up in the bio as a green link, thus if you trust the
          service and the verifying party, you can trust that @cotterpin is
          Cotterpin Doozer.
        </p>

        <p className={styles.description}>
          You can get more granular too, and even have professional
          qualifications.{" "}
        </p>

        <p className={styles.description}>
          Assume the service is Veritoot and the verifying party is "Doozer
          University". Doozer University not only qualifies that Cotterpin is
          who she says she is, but also that she has expertise in the following
          areas: Architecture, Civil Engineering, Fraggle Relations.
        </p>

        <p className={styles.description}>
          Those qualifications could be added on as a query string, and only
          when they match the qualifications in the DB is the rel=me link shown.
        </p>
      </main>
    </div>
  );
}
