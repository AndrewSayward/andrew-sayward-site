import { useEffect, useRef } from "react";
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import gsap from 'gsap';

export default function About() {
  const boxRef = useRef(null);

  useEffect(() => {
      let tl = gsap.timeline();
      tl.from('.from-right', {duration: 1, opacity: 0, x: 200, ease:"power3.in"}, 'start')
      tl.from('.from-left', {duration: 1, ease:"power3.in", opacity: 0, x: -200}, "start")
  }, [boxRef]);

  return (
    <div>
      <Head>
        <title>Andrew Sayward | Front End Developer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AboutMe />
    </div>
  )
}