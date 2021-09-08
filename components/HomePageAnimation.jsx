import Link from "next/link";

const HomePageAnimation = () => {
  return (
    <div className="animation-container">
      <div className="animation-elements min-h-home-page-height bg-grey relative container md:flex items-center justify-center ">
        <div className="three-squares">
          <div className="blue"></div>
          <div className="red"></div>
          <div className="green"></div>
        </div>
        <div className="main-header ml-24">
          <h1 className="font-bold text-7xl">Andrew Sayward</h1>
          <p className="text-right mt-2">Front-end Web Developer</p>
        </div>
        <div className="credentials">
          <div>HTML / React</div>
          <div>JavaScript / ES6</div>
          <div>CSS / SASS</div>
        </div>
        <div>
        <div className="learn-about">
          <Link href="/about">
            <a className="text-md">About me &gt; </a>
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageAnimation;