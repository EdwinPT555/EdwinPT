import { useEffect, useState } from 'react';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const words = ["Hi", "Iam Edwin", "Expirinced MERN stack devleoper"];
  const wordsComponents = [
    <div className="flex flex-col items-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
      <span className="text-6xl sm:text-8xl md:text-10xl lg:text-12xl font-bold">Hi </span>
    </div>,
    <div className="flex flex-col items-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
      <p className="text-5xl sm:text-7xl md:text-9xl lg:text-11xl font-bold">I am</p>
      <p className="text-6xl sm:text-8xl md:text-10xl lg:text-12xl font-bold">Edwin PT</p>
    </div>,
    <div className="flex flex-col items-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
      <p className="text-4xl sm:text-6xl md:text-8xl lg:text-10xl font-bold">Experienced</p>
      <p className="text-6xl sm:text-8xl md:text-10xl lg:text-12xl font-bold">MERN</p>
      <p className="text-4xl sm:text-6xl md:text-8xl lg:text-10xl font-bold">stack developer</p>
    </div>
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % wordsComponents.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [wordsComponents.length]);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <header className="mb-10 text-center">
        <div className="min-h-80 flex items-center justify-center">
          {/* <h1 className="text-8xl font-bold mb-4">{words[currentIndex]}</h1> */}
          {wordsComponents[currentIndex]}
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

