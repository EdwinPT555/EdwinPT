import React, { useEffect, useState } from 'react';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = ["Hi", "Iam Edwin PT", "Expirinced MERN stack devleoper"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <div className="flex flex-col items-center justify-center">
      <header className="mb-10 text-center">
        <div className="min-h-80 flex items-center justify-center">
          <h1 className="text-8xl font-bold mb-4">{words[currentIndex]}</h1>
        </div>
        <a
          href="/resumee.pdf"
          className="text-lg px-8 py-4 bg-black text-white"
          download="edwinpt-resume.pdf"
        >
          Download Resume
        </a>
      </header>
    </div>
  );
}

export default Home;

