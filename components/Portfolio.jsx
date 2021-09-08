const Portfolio = () => {
  return (
    <>
      <div className="port-background bg-theme-green absolute h-full w-full lg:w-4/12"></div>
      <div className="lg:flex">
      <div className="text-white min-h-screen pt-60 pl-12 pr-12 lg:pl-24 lg:pr-12 lg:w-4/12">
        <h1 className="font-bold text-5xl">I have worked on a variety of projects with these clients:</h1>
      </div>
      <div className="clients lg:w-8/12 min-h-screen pl-12 lg:pl-24 flex flex-col justify-center">
        <h3><a target="_blank" href="https://thecroc.com/">The Croc</a></h3>
        <h3><a target="_blank" href="https://carbon.ci/">Carbon Intelligence</a></h3>
        <h3><a target="_blank" href="https://ondemand.leviton.com/">Leviton</a></h3>
        <h3><a target="_blank" href="https://www2.lseg.com/sustainablefinance/sustainablebondmarket">LSEG</a></h3>
        <h3><a target="_blank" href="https://www.sohonet.com/">Sohonet</a></h3>
        <h3><a target="_blank" href="https://truecue.com/">TrueCue</a></h3>
        <h3><a target="_blank" href="https://theagentsoftransformation.com/">AppDynamics</a></h3>
        <h3>PMI + Many more</h3>
      </div>
      </div>
    </>
  )
}

export default Portfolio;