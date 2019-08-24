import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

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
      <Header newsList={newsList} importantNews={importantNews} />
      <Main />
      <Footer>Some text & links</Footer>
    </div>
  );
}

export default App;
