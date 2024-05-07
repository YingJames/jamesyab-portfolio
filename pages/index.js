import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Navigation from '@/components/Navigation';
import { Button } from 'flowbite-react';
import Footer from '@/components/Footer';

import HeroSection from '@/components/HomeSections/HeroSection';
import AboutSection from '@/components/HomeSections/AboutSection';

import githubLogo from '@/public/github-mark.svg'
import jyphotoPic from '@/public/project_images/jyab_photo.png';
import usfSoarPic from '@/public/project_images/usfsoar_cover.jpeg';
import stockAnalyzerPic from '@/public/project_images/stock_analyzer.svg';
import rushPic from '@/public/project_images/rush.svg';
import forceGraphPic from '@/public/project_images/force_graph_generator.svg'

export default function Home() {

  return (
    <>
      <Head>
        <title>James Yab Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <Navigation />
        </header>
        <HeroSection />
        <AboutSection />
        <div id="work" className="section--container">
          <h2 className="section--title">Work</h2>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://jasmine-yab.com/" target="_blank">
              <Image className="rounded-t-lg" src={jyphotoPic} alt="Jasmine Yab Photography" width={500} height={300} />
            </a>
            <div className="p-5">
              <a href="https://jasmine-yab.com/" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Jasmine Yab Photography</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Designed and developed a visually captivating wedding photography website through UI/UX principles using Webflow and later transitioned to ShowIt, accurately translating the client&apos;s vision into an engaging user experience optimized for an intuitive online presence.</p>
              <a href="https://jasmine-yab.com/" target="_blank" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                Website Link
                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={styles["section--container"]}>
          <h2 className="section--title">Projects</h2>


          <div
              className="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" src={githubLogo} alt={"github logo"}/>
            <Image
              className="w-28 h-28 mb-2 rounded-full border-4 border-black"
              src={"https://github.com/YingJames.png"}
              alt={"github profile image"}
              width={100}
              height={100}
              unoptimized
            />
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Check out my Github!</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">I have other projects too, showcasing my skills in various areas like web development, as well as lower level systems level programming like when making
              <a
                href={"https://github.com/YingJames/the-rapid-unix-shell"}
                className="font-medium items-center text-blue-600 hover:underline"
              > my RUSH shell program
              </a> written in C.
            </p>
            <p>Please don&apos;t complain if my code looks like this: 🍝</p>
            <a href="https://force-graph-generator.netlify.app/" target="_blank"
               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              My Github Profile
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                   fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>

          <div
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://github.com/usfsoar/NSL_23-24_PayloadEECS" target="_blank">
              <Image className="rounded-t-lg" src={usfSoarPic} alt="USF SOAR" width={500} height={300}/>
            </a>
            <div className="p-5">
              <a href="https://github.com/usfsoar/NSL_23-24_PayloadEECS" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">USF SOAR - NASA
                  Student Launch Program</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">As a member of the multidisciplinary team
                for the NASA Student Launch program,
                I actively collaborated through issue tracking, contributing code fixes, enhancements, and feature
                requests for
                the Arduino embedded C++ code and Python ground station frontend.</p>
              <a href="https://github.com/usfsoar/NSL_23-24_PayloadEECS" target="_blank"
                 className="inline-flex font-medium items-center text-blue-600 hover:underline">
                Github Repo
                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                </svg>
              </a>
            </div>
          </div>


          <div
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://github.com/YingJames/StockAnalyzer" target="_blank">
              <Image className="rounded-t-lg" src={stockAnalyzerPic} alt="Stock Analyzer" width={500} height={300}/>
            </a>
            <div className="p-5">
              <a href="https://github.com/YingJames/StockAnalyzer" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Stock Analyzer</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">The application was built using .NET C#
                and Windows Form UI Component Library
                The application allows analyzing and visualizing stock data to identify candlestick patterns. </p>
              <a href="https://github.com/YingJames/StockAnalyzer" target="_blank"
                 className="inline-flex font-medium items-center text-blue-600 hover:underline">
                Github Repo
                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                </svg>
              </a>
            </div>
          </div>


          <div
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://github.com/YingJames/the-rapid-unix-shell" target="_blank">
              <Image className="rounded-t-lg" src={rushPic} alt="RUSH" width={500} height={300}/>
            </a>
            <div className="p-5">
              <a href="https://github.com/YingJames/the-rapid-unix-shell" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Rapid Unix
                  Shell</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">RUSH is a custom Unix shell
                implementation designed for a Unix-based system.
                This project aims to implement basic shell functionalities, including parallel execution, handling
                built-in commands, and managing command execution paths.
              </p>
              <a href="https://github.com/YingJames/the-rapid-unix-shell" target="_blank"
                 className="inline-flex font-medium items-center text-blue-600 hover:underline">
                Github Repo
                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                </svg>
              </a>
            </div>
          </div>


          <div
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://github.com/YingJames/ForceGraphGenerator" target="_blank">
              <Image className="rounded-t-lg" src={forceGraphPic} alt="RUSH" width={500} height={300}/>
            </a>
            <div className="p-5">
              <a href="https://github.com/YingJames/ForceGraphGenerator" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Force Graph Data
                  Structure Visualizer</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Force Graph Generator is a project that allows users to create a force directed graph using a textbox as
                user input,
                which represents the edge list. This tool is beneficial for visualizing complex networks and
                understanding their structures.
              </p>
              <div className="flex justify-around">
                <a href="https://force-graph-generator.netlify.app/" target="_blank"
                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Try it now
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                       fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
                <a href="https://github.com/YingJames/ForceGraphGenerator" target="_blank"
                   className="inline-flex font-medium items-center text-blue-600 hover:underline">
                  Github Repo
                  <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>


        </div>
      </main>
      <Footer/>
    </>
  )
}
