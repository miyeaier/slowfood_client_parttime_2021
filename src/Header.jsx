import React from "react";
import "./index.css";
import { Icon } from "semantic-ui-react";

const Header = () => {
  return (
    <h1 data-cy="header">
      <Icon name="food" />
      Nordens
    </h1>
  );
};

export default Header;
