import React from "react";
import { NAVITEMS } from "../type";
import Home from "./Home";
import Skills from "./Skills";
import Contact from "./Contact";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Section: React.FC<{ page: NAVITEMS }> = ({ page }) => {

  switch (page) {
    case NAVITEMS.home:
      return <Home />;
    case NAVITEMS.about:
      return <div className="text-2xl">About</div>;
    case NAVITEMS.skills:
      return <Skills />
    case NAVITEMS.experience:
      return <div className="text-2xl">Experience</div>;
    case NAVITEMS.projects:
      return <div className="text-2xl">Projects</div>;
    case NAVITEMS.contact:
      return <Contact />;
    default:
      return <div className="text-2xl">Home</div>;
  };
};

export default Section;

