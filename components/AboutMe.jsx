import Image from 'next/image'
import profilePic from '../public/Andy.jpeg'
import Link from 'next/link';

const AboutMe = () => {
  return (
    <div className="container py-12">
      <div className="flex flex-wrap pt-20 md:pt-40">
        <div className="w-full md:w-4/12 relative prof-pic from-left">
          <Image 
            src={profilePic} 
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-full md:w-8/12 md:pl-40 pt-20 md:pt-0 from-right">
          <h2 className="font-bold text-5xl mb-12">Who am i? 🤷</h2>
          <p className="mb-6">Hi my name's Andrew,</p>
          <p className="mb-6">I'm a front-end web developer, I work alongside designers to make sure web experiences are responsive, quick, and fun to use.</p>
          <p>Recently I got into the world of React / Next.JS, as well as an animation library called GSap, and those are the technologies that have been used for this site!</p>

          <Link href="/portfolio">
            <div className="check-out font-bold text-3xl md:text-4xl mt-24 cursor-pointer">Check out my work &gt;</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;