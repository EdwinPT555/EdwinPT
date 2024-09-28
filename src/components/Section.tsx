import React from "react";
import { NAVITEMS } from "../type";
import Home from "./Home";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Section: React.FC<{ page: NAVITEMS }> = ({ page }) => {

  switch (page) {
    case NAVITEMS.home:
      return <Home />;
    case NAVITEMS.about:
      return <div className="text-2xl">About Me</div>;
    case NAVITEMS.skills:
      return <div className="text-2xl">Skills</div>;
    case NAVITEMS.experience:
      return <div className="text-2xl">Experience</div>;
    case NAVITEMS.projects:
      return <div className="text-2xl">Projects</div>;
    case NAVITEMS.contact:
      return <div className="text-2xl">Contact</div>;
    default:
      return <div className="text-2xl">Home</div>;
  };
};

export default Section;

