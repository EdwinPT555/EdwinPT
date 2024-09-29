import { useState } from "react";
import { NAVITEMS, NavItemsData } from "../type";
import clickSound from "../assets/click.mp3";

const Navigation: React.FC<IProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false); // State to control dropdown
  const audio = new Audio(clickSound);

  const handleClick = (name: NAVITEMS) => {
    audio.play();
    setActiveSection(name);
    setIsOpen(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Toggle button visible on small screens */}
      <div className="sm:hidden fixed bottom-1 left-1 z-50">
        <button
          className="bg-yellow-500 text-black h-10 w-10 ml-1 flex items-center justify-center border border-black"
          onClick={toggleDropdown}
        >
          <i className="fas fa-bars text-lg" /> 
        </button>
      </div>

      {/* Dropdown Menu for small screens */}
      {isOpen && (
        <ul className="space-y-4 my-4 sm:hidden bg-white p-4 rounded-lg shadow-lg fixed bottom-10 left-8 z-40">
          {NavItemsData.map((item) => (
            <li
              key={item.name}
              className={`flex items-center cursor-pointer transition-colors duration-200 ease-in-out 
                ${activeSection === item.name ? "bg-yellow-500 text-black" : "text-black hover:bg-yellow-500/50"}
                text-sm px-4 py-2 rounded-lg tracking-wider
              `}
              onClick={() => handleClick(item.name as NAVITEMS)}
            >
              <i className={`${item.icon} mr-2 text-lg`}></i>
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </li>
          ))}
        </ul>
      )}

      {/* Regular menu for larger screens */}
      <ul className="hidden sm:block space-y-4 my-16">
        {NavItemsData.map((item) => (
          <li
            key={item.name}
            className={`flex items-center cursor-pointer transition-colors duration-200 ease-in-out 
              ${activeSection === item.name ? "bg-yellow-500 text-black" : "text-yellow-500 hover:text-yellow-300 hover:bg-yellow-900/30"}
              text-sm sm:text-xl md:text-2xl lg:text-2xl px-4 py-2 rounded-lg tracking-wider
            `}
            onClick={() => handleClick(item.name as NAVITEMS)}
          >
            <i className={`${item.icon} mr-2 text-lg sm:text-xl md:text-2xl lg:text-2xl`}></i>
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navigation;

interface IProps {
  activeSection: NAVITEMS;
  setActiveSection: React.Dispatch<React.SetStateAction<NAVITEMS>>;
}
