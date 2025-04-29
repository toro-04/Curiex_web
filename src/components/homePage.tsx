import { useState, useEffect } from 'react';
import About from './about';

const quotes = [
  "Code is like humor. When you have to explain it, it's bad.",
  "The best error message is the one that never shows up.",
  "Programming is thinking, not typing.",
  "It's not a bug, it's an undocumented feature.",
  "Good code is its own best documentation.",
  "The only constant in technology is change.",
  "First, solve the problem. Then, write the code.",
  "Simplicity is the ultimate sophistication."
];

const HomePage = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % quotes.length;
      const fullText = quotes[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 60 : 70);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (

    <div id="home" className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4B6382] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#052659] rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="z-10 text-center px-4 max-w-4xl">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-8xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-[#5483B3] to-[#052659]">
            CURIEX
          </h1>
        </div>
        
        <div className="h-24 flex items-center justify-center">
          <div className="font-mono text-2xl text-[#C1E8FF] border-l-4 border-[white] pl-13s">
            <span className="mr-1 text-[white]">&gt;</span>
            {text}
            <span className="animate-pulse text-[white]">_</span>
          </div>
        </div>
        
        <div className="mt-16">
          <a href="#about">
          <button className="bg-[#4B6382] hover:bg-[#4B6382] text-[white] font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 text-lg">
            Explore
          </button>
          </a>
        </div>
      </div>
      
      
      <div className="absolute bottom-8 w-full flex justify-center">
        <div className="flex space-x-6">
          <div className="w-2 h-2 rounded-full bg-[#A4B5C4]"></div>
          <div className="w-2 h-2 rounded-full bg-[#A4B5C4]"></div>
          <div className="w-2 h-2 rounded-full bg-[#A4B5C4]"></div>
        </div>
      </div>
    </div>
    {/* Render About section below homepage */}
    <About />
    </>
  );
};

export default HomePage;
