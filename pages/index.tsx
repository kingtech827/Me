import type { NextPage } from "next";
import Head from "next/head";
import React, { useState, useEffect } from "react";

//Components
import { Layout } from "../src/components/layout/Layout";
import { Hero } from "../src/components/hero/Hero";
import { About } from "../src/components/about/About";
import { Projects } from "../src/components/projects/Projects";
import { Certificates } from "../src/components/Certificates/certificate";
import { SplashScreen } from "../src/components/splashscreen/SplashScreen";
import { Banner } from "../src/components/banner/Banner";
import { Contact } from "../src/components/contact/Contact";
import { PageTransition } from "../src/components/pagetransition/PageTransition";
import { Experience } from "../src/components/experience/Experience";
const Home: NextPage = () => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      if (count === 100) {
        return;
      }
      setCount(count + 1);
    }, 10);
  }, [count]);

  return (
    <>
      <Head>
        <title>Pavlo Chohlo</title>
        
      </Head>
      {count < 99 ? (
        <SplashScreen count={count} />
      ) : (
        <Layout>
          <PageTransition>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Certificates />
            <Banner />
            <Contact />
          </PageTransition>
        </Layout>
      )}
    </>
  );
};

export default Home;
