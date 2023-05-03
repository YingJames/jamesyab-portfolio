import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'flowbite-react';
import profilePic from '@/public/profile.png';

export default function HeroSection() {
    return (
        <section className="section--container">
<div className={styles.hero}>
            {/* Hero Container */}
            <div className={styles["hero--title-container"]}>
                <h1 className="title">I&apos;m <span className={styles.highlight}><br></br>James Yab</span></h1>
                <h2 className="subtitle">Frontend Web Developer and <br></br>Software Engineer</h2>
            </div>

            {/* Portrait Container */}
            <div className={styles["hero--portrait-container"]}>
                <Image className="rounded-md" src={profilePic} alt="James Yab" width={200} height={200} />
            </div>

            {/* Description Container */}
            <div className={styles["hero--desc-container"]}>
                <div className={styles["my-description"]}>
                    <p><span className="dropcap">I</span> am passionate about creating engaging and user-friendly experiences that meet the needs of  users.</p>
                    <p>&emsp;I have 2 years of experience as a Freelance Web developer, working with Webflow. I have experience in Python, React, Next.js, and C</p>
                </div>

                <div className={styles["call-to-work"]}>
                    <Link href="/contact"><Button size="md">Contact me</Button></Link>
                </div>
            </div>

        </div>
        </section>
        
    )

}