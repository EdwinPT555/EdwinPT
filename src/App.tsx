import React, {  useState } from "react";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import { NAVITEMS } from "./type";
import Social from "./components/Social";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<NAVITEMS>(NAVITEMS.home);

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Left Side - Navigation */}
      <nav className="bg-black text-yellow-500 w-full md:w-1/3 md:h-screen flex flex-col p-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold">EDWIN PT</h1>
          <p className="text-xl md:text-3xl mt-2">Senior Software Engineer</p>
        </div>
        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </nav>

      {/* Right Side - Details */}
      <main className="flex-1 bg-yellow-500 p-6">
        <Section page={activeSection} />
      </main>

      <Social />
    </div>
  );
};

export default App;

