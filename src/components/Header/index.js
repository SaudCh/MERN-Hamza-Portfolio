import { useState, useEffect } from 'react';

const Header = ({ bannerRef }) => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    setScrollHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-20 w-full bg-gradient-to-b backdrop-blur-sm  ${
        scrollHeight > bannerRef?.current?.clientHeight
          ? 'from-gray-100/30 to-gray-100/0 text-gray-900'
          : 'from-gray-900/30 to-gray-900/0 text-gray-100'
      }`}
    >
      <div className="container mx-auto flex items-center justify-center p-2 sm:p-6 md:justify-between">
        <a href="#">
          <h2 className="text-2xl font-bold">
            <span className="text-secondary">Port</span>
            <span className="text-primary">folio</span>
          </h2>
        </a>
        <nav className="hidden font-bold md:block ">
          <ul className="flex gap-6">
            <li>
              <a
                href="#"
                className={`transition ${
                  scrollHeight > bannerRef?.current?.clientHeight
                    ? 'text-gray-700 hover:text-gray-900'
                    : 'text-gray-300 hover:text-gray-100'
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`transition ${
                  scrollHeight > bannerRef?.current?.clientHeight
                    ? 'text-gray-700 hover:text-gray-900'
                    : 'text-gray-300 hover:text-gray-100'
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`transition ${
                  scrollHeight > bannerRef?.current?.clientHeight
                    ? 'text-gray-700 hover:text-gray-900'
                    : 'text-gray-300 hover:text-gray-100'
                }`}
              >
                Projects
              </a>
            </li>
            {/* <li>
              <a href="#" className={`transition ${
                  scrollHeight > bannerRef?.current?.clientHeight
                    ? 'text-gray-700 hover:text-gray-900'
                    : 'text-gray-300 hover:text-gray-100'
                }`}>
                Skills
              </a>
            </li> */}
            <li>
              <a
                href="#contact"
                className={`transition ${
                  scrollHeight > bannerRef?.current?.clientHeight
                    ? 'text-gray-700 hover:text-gray-900'
                    : 'text-gray-300 hover:text-gray-100'
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>{' '}
      </div>
    </header>
  );
};

export default Header;
