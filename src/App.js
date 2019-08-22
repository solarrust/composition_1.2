import React from "react";
import "./App.css";
import TabWidget from "./components/TabWidget";
import Widget from "./components/Widget";
import Search from "./components/Search";
import Banner from "./components/Banner";

/* Данные-заглушки для иллюстрации */
const newsList = {
  nowNews: {
    title: "Сейчас актуально",
    items: [
      { img: "", title: "", link: "" },
      { img: "", title: "", link: "" },
      { img: "", title: "", link: "" },
      { img: "", title: "", link: "" },
      { img: "", title: "", link: "" }
    ]
  },
  inCountry: {
    title: "В стране",
    items: [
      { img: "", title: "", link: "" },
      { img: "", title: "", link: "" },
      { img: "", title: "", link: "" },
      { img: "", title: "", link: "" },
      { img: "", title: "", link: "" }
    ]
  },
  recommends: {
    title: "Рекомендуем",
    items: [
      { img: "", title: "", link: "" },
      { img: "", title: "", link: "" },
      { img: "", title: "", link: "" },
      { img: "", title: "", link: "" },
      { img: "", title: "", link: "" }
    ]
  }
};

const importantNews = {
  img: "",
  link: "",
  title: "",
  text: ""
};

/* С чисто оформительской точки зрения можно будет добавить разметки, но на декомпозицию это не влияет */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TabWidget items={newsList} />
        <Widget {...importantNews} />
      </header>
      <main className="App-main">
        <Search />
        <Banner />
        <Widget />
        <Widget />
        <Widget />
        <Widget />
        <Widget />
      </main>
    </div>
  );
}

export default App;
