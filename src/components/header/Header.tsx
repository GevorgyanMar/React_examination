import React, { FC } from "react";
import { Link } from "react-router-dom";
import { routerItems } from "../../router/routerItems";
import { v4 as uuidv4 } from "uuid";
import "./header.scss";

const Header: FC = () => {
  return (
    <header>
      <nav>
        <ul>
          {routerItems.map((i) => (
            <li key={uuidv4()}>
              <Link to={i.link}>{i.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
