import Link from "next/link";

const Header = () => {
  return (
    <header className="header py-6 bg-black text-white fixed w-full top px-6 lg:px-0">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="logo font-bold text-5xl cursor-pointer">
            <span className="text-theme-red">&#60;</span>
            <span className="text-theme-blue">/</span>
            <span className="text-theme-green">&#62;</span>
          </div>
        </Link>
        <nav>
          <Link href="/about">
            <a className="text-md hover:text-theme-green">About Me</a>
          </Link>
          <Link href="/portfolio">
            <a className="text-md ml-6 hover:text-theme-blue">My Work</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
