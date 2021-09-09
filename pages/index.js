import { useEffect, useRef } from "react";
import Head from 'next/head'
import Header from '../components/Header'
import HomePageAnimation from '../components/HomePageAnimation'
import "../utils/scrolling";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const boxRef = useRef(null);

useEffect(() => {
    if(window.innerWidth > 1024) {
      let initTL = gsap.timeline();      
      initTL.from('.main-header', {duration: 1, opacity: 0, y: 50, ease:"power3.in"}, 'start')

      let tl = gsap.timeline({scrollTrigger:{
        scrub: true,
        trigger: ".animation-container",
        start: "top top",
        end: "bottom bottom",
        invalidateOnRefresh: true,
      }})
      tl.to('.main-header', {duration: 0.5, opacity: 0, x: 200, ease:"power2.out"}, 'start')
      tl.to('.blue', {duration: 0.5, ease:"power2.out", x: -50, y: -120}, "start")
      tl.to('.red', {duration: 0.5, ease:"power2.out", x: 50, y: 145}, "start")
      tl.to('.credentials div:nth-of-type(1)', {duration: 0.5, opacity: 1, ease:"power2.out", x:0}, 'next')
      tl.to('.blue', {duration: 0.5, ease:"power2.out", width:270}, "next")
      tl.to('.credentials div:nth-of-type(2)', {duration: 0.5, opacity: 1, ease:"power2.out", x:0})
      tl.to('.green', {duration: 0.5, ease:"power2.out", width:250}, "-=0.5")
      tl.to('.credentials div:nth-of-type(3)', {duration: 0.5, opacity: 1, ease:"power2.out", x:0})
      tl.to('.red', {duration: 0.5, ease:"power2.out", width:200}, "-=0.5")
      tl.to('.credentials div:nth-of-type(1)', {duration: 0.5, opacity: 0, ease:"power2.out", x:100})
      tl.to('.credentials div:nth-of-type(2)', {duration: 0.5, opacity: 0, ease:"power2.out", x:-100}, "-=0.5")
      tl.to('.credentials div:nth-of-type(3)', {duration: 0.5, opacity: 0, ease:"power2.out", x:100}, "-=0.5")
      tl.to('.learn-about', {duration: 0.5, opacity: 1, ease:"power2.out", x:-200 })
      tl.to('.green', {duration: 0.5, ease:"power2.out", width:850, x: 50}, "-=0.5")
      tl.to('.blue', {duration: 0.5, ease:"power2.out", width:800}, "-=0.5")
      tl.to('.red', {duration: 0.5, ease:"power2.out", width:600, x: -50}, "-=0.5")
  }
}, [boxRef]);

  return (
    <div>
      <Head>
        <title>Andrew Sayward | Front End Developer</title>
        <meta name="description" content="A front end web developer based in Hackney, East London. Have a look at my previous work." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomePageAnimation />
    </div>
  )
}
