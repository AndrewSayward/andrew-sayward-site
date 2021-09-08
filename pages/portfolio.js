import { useEffect, useRef } from "react";
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Portfolio  from "../components/Portfolio";
import gsap from 'gsap';

export default function About() {
  const boxRef = useRef(null);

  useEffect(() => {
      let tl = gsap.timeline();
      tl.from('.port-background', {height: 0, ease:"power3.in", duration: "1"}, "start")
      tl.from('.clients', {opacity: 0, ease:"power3.in", duration: "1"})
  }, [boxRef]);

  return (
    <div>
      <Head>
        <title>Andrew Sayward | Front End Developer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Portfolio />
    </div>
  )
}