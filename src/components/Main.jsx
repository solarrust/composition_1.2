import React from "react";
import Search from "./Search";
import Banner from "./Banner";
import Widget from "./Widget";

function Main(props) {
  return (
    <main className="App-main">
      <Search />
      <Banner />
      <Widget />
      <Widget />
      <Widget />
      <Widget />
      <Widget />
    </main>
  );
}

export default Main;
