import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Navigation from '@/components/Navigation';
import { Button } from 'flowbite-react';
import Footer from '@/components/Footer';

import HeroSection from '@/components/HomeSections/HeroSection';
import AboutSection from '@/components/HomeSections/AboutSection';
export default function Home() {

  return (
    <>
      <Head>
        <title>James Yab Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/aih5bul.css"></link>
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
        <Navigation />
        </header>
        <HeroSection />
        <AboutSection />
        <div id="work" className="section--container">
          <h2 className="section--title">Work</h2>
          <h3 className="work--title">Jasmine Yab Photography</h3>
          <Link href="/work/jyphoto">
            <Image src="/work1.png" alt="Jasmine Yab Photography" width={500} height={300} />
          </Link>
        </div>
        <div className={styles["section--container"]}>
          <h2 className="section--title">Personal Project</h2>
          <h3 className="work--title">ZapChat</h3>
          <Image src="/zapchat.png" alt="ZapChat" width={500} height={300} />
        </div>
      </main>
      <Footer />
    </>
  )
}
