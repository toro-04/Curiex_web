import { useState, useEffect } from 'react';
import { Code } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-full  px-4 ">
        <div className={`${scrolled ? 'bg-black/80' : 'bg-black'} backdrop-blur-lg border border-[#4B6382]/30 rounded-full shadow-lg shadow-[#071739]/20`}>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between px-6 py-3">
            <div className="flex items-center space-x-3">
              <Code className="text-[#A4B5C4]" size={24} />
              <a href="#home" className="text-xl font-bold text-[#CDD5DB]">CURIEX</a>
            </div>
            
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-[#CDD5DB] hover:text-white transition duration-300 border-b-2 border-transparent hover:border-[#4B6382]">
                Home
              </a>
              <a href="#aboutus" className="text-[#CDD5DB] hover:text-white transition duration-300 border-b-2 border-transparent hover:border-[#4B6382]">
                About
              </a>
              <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-[#071739] to-[#4B6382] text-[#CDD5DB] rounded-md hover:from-[#4B6382] hover:to-[#071739] transition-all duration-300 shadow-md">
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between py-3 px-4">
            <div className="flex items-center space-x-2">
              <Code className="text-[#A4B5C4]" size={20} />
              <a href="#home" className="text-lg font-bold text-[#CDD5DB]">CURIEX</a>
            </div>
            
            <button
              onClick={toggleMenu}
              className="text-[#CDD5DB] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border border-[#4B6382]/30 rounded-b-lg shadow-lg mt-1 overflow-hidden">
            <div className="flex flex-col px-4 py-2">
              <a href="#home" className="py-3 text-[#CDD5DB] hover:text-white border-b border-[#071739]/20 transition duration-300">
                Home
              </a>
              <a href="#aboutus" className="py-3 text-[#CDD5DB] hover:text-white border-b border-[#071739]/20 transition duration-300">
                About
              </a>
              <a href="#promoters" className="py-3 text-[#CDD5DB] hover:text-white border-b border-[#071739]/20 transition duration-300">
                Promoters
              </a>
              <a href="#contact" className="my-3 py-2 bg-gradient-to-r from-[#071739] to-[#4B6382] text-[#CDD5DB] rounded-md text-center hover:opacity-90 transition duration-300">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;