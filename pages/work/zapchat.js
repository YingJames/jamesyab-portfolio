import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/jyphoto.module.css';
import Navigation from '@/components/Navigation';
import zapchatPhoto from '@/public/project_images/zapchat.png';
import { BiLinkAlt } from 'react-icons/bi';

export default function Zapchat() {
  return (
    <>
    <Head>
      <title>About My Work</title>
      <meta name="description" content="Zapchat" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <header>
        <Navigation />
      </header>
      <section className="section--container">
        <h1 className="title">About <br></br><span className={styles.highlight}>Zapchat</span></h1>
        <div className={styles["thumbnail--container"]}>
          <Image src={zapchatPhoto} alt="Zapchat" width={500} height={300} />
        </div>
      </section>
      <section className="section--container">
        <h2 className="section--title">Overview</h2>
        <p className="section--paragraph">
        Zapchat is a web application that allows users to communicate with each other in real-time. Users can create accounts and send messages to other users. The application was developed as a personal project to learn more about React.js and Firebase. The application was developed over the course of a few weeks, and was deployed using Firebase Hosting.The application utilizes Firebase for authentication and database management.
        </p>
        <p className="section--paragraph">
            This video demonstrates the application&apos;s messaging functionality. The video was recorded using the application&apos;s development environment.
        </p>
        <video className="section--video" controls>
            <source src="https://user-images.githubusercontent.com/21976362/219696671-53b776a0-3433-4b53-a104-2fbca6ded26f.mp4" type="video/mp4" />
        </video>
      </section>
      <section className="section--container">
        <h2 className="section--title">Technologies</h2>
        <ul className="section--list">
          <li>Firebase</li>
          <li>React.js</li>
          <li>TailwindCSS</li>
        </ul>
      </section>
      <section className="section--container">
        <h2 className="section--title">Links</h2>
        <Link href="https://github.com/YingJames/ZapChat" target="_blank" rel="noopener noreferrer" className="inline-flex link">
          <BiLinkAlt size={20} className="mr-1"/>
          Zapchat Github Repository
        </Link>
      </section>
    </main>
      
    </>
  )
}