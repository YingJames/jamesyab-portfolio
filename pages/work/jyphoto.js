import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/jyphoto.module.css';
import Navigation from '@/components/Navigation';
import jyphoto from '@/public/project_images/jyab_photo.png';
import { BiLinkAlt } from 'react-icons/bi';

export default function JYPhoto() {
  return (
    <>
    <Head>
      <title>About My Work</title>
      <meta name="description" content="Jasmine Yab Photography" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <header>
        <Navigation />
      </header>
      <section className="section--container">
        <h1 className="title">About <br></br><span className={styles.highlight}>Jasmine Yab Photography</span></h1>
        <div className={styles["thumbnail--container"]}>
          <Image src={jyphoto} alt="Jasmine Yab Photography" width={500} height={300} />
        </div>
      </section>
      <section className="section--container">
        <h2 className="section--title">Overview</h2>
        <p className="section--paragraph">
        Throughout the course of this project, I collaborated with my sibling in order to develop a website for her wedding photography enterprise. Her primary objective was to establish a visually appealing platform that could display her portfolio of work, while simultaneously providing a means for prospective clients to contact her. Additionally, she expressed a desire for the ability to personally manage website updates. To accomplish these objectives, I undertook the responsibility of designing and implementing the site&apos;s themes, pages, and blog layouts, utilizing the Webflow CMS. Additionally, I integrated an Instagram feed by utilizing Zapier, which facilitated the automatic updates of her most recent Instagram posts to the website.
        </p>
      </section>
      <section className="section--container">
        <h2 className="section--title">Technologies</h2>
        <ul className="section--list">
          <li>Webflow</li>
          <li>Javascript</li>
          <li>Zapier</li>
        </ul>
      </section>
      <section className="section--container">
        <h2 className="section--title">Links</h2>
        <p>Please keep in mind that this website is archived. Some links on the site may not work as intended.</p>
        <Link href="https://port-6fa415.webflow.io/" target="_blank" rel="noopener noreferrer" className="inline-flex link">
          <BiLinkAlt size={20} className="mr-1"/>
          Jasmine Yab Photography
        </Link>
      </section>
    </main>
      
    </>
  )
}