import "./styles.css";

import {
  HiHeart,
  HiLightningBolt,
  HiOutlineLightningBolt
} from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { ComponentRouter } from "./Router";
const listOfComponents = [
  "Alert",
  "Avatar",
  "Badge",
  "Button",
  "Card",
  "Modal",
  "Input box"
];

export default function App() {
  const [component, setComponent] = useState("HOME");
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (evt) => {
    setComponent(evt.target.innerText);
  };
  return (
    <div className="App">
      <nav className="adjust-nav padding-one">
        <div className="nav-content">
          <div className="nav-header">
            <span className=" medium-text bold-text position-relative">
              Wrap it
              <HiHeart
                size="25px"
                className="position-absolute"
                style={{ top: "-7px", right: "5px" }}
              />
            </span>
          </div>
          <div className="medium-text pointer" onClick={handleClick}>
            HOME
          </div>

          <div
            onClick={() => setDarkMode(!darkMode)}
            className="medium-text pointer"
          >
            {darkMode ? <HiLightningBolt /> : <HiOutlineLightningBolt />}
          </div>
          <a
            style={{ color: "white" }}
            href="https://github.com/kajol-rep/Component-Library"
            className="medium-text"
          >
            <FaGithub />
          </a>
        </div>
      </nav>
      <div className={darkMode ? "sidebar-dark-mode" : "sidebar"}>
        <div
          style={{ color: darkMode ? "white" : "black" }}
          className="medium-text padding-one"
        >
          Components
        </div>
        <ul className="spaced-list list-style padding-one">
          {listOfComponents.map((i) => (
            <li className="pointer" onClick={handleClick} key={i}>
              {i}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={
          darkMode ? "content padding-sides dark-mode" : "content padding-sides"
        }
      >
        <ComponentRouter comp={component} />
      </div>
    </div>
  );
}
