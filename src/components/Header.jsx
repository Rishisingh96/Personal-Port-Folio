// Header Component
import React, { useState } from "react";

const Header = () => {
  const [brandName, setBrandName] = useState("Rishi Singh");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuLinks = [
    { title: "Home", link: "#home", id: 1 },
    { title: "About", link: "#about", id: 2 },
    { title: "Skills", link: "#skills", id: 3 },
    { title: "Service", link: "#Service", id: 4 },
    { title: "Contact", link: "#contact", id: 5 },
  ];

  return (
    <header className="border-b bg-gray-100 py-4 px-6">
      <div className="flex justify-between items-center">

        <div className="flex items-center space-x-2">
  <img src="./public/RishiLogo.png" alt="Logo" className="w-8 h-8 rounded-full" />
  <h1 className="text-xl font-bold">{brandName}</h1>
</div>

        <button className="block lg:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <nav className={`lg:block ${menuOpen ? "block" : "hidden"}`}>
          <ul className="lg:flex lg:space-x-6">
            {menuLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="block py-2 px-4 hover:text-orange-600"
                  onClick={toggleMenu}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="./public/RishiResume.pdf"
          download="RishiResume.pdf"
          className="py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
