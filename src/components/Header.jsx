import React from "react";
import TabWidget from "./TabWidget";
import Widget from "./Widget";
import PropTypes from "prop-types";

Header.propTypes = {
  newsList: PropTypes.object.isRequired,
  importantNews: PropTypes.object.isRequired
};

function Header(props) {
  const { newsList, importantNews } = props;
  return (
    <header className="App-header">
      <TabWidget items={newsList} />
      <Widget {...importantNews} />
    </header>
  );
}

export default Header;
