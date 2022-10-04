import { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main = () => {
  const [search, setSearch] = useState("");
  const [book, setBook] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyDsSVdYTlfgTqZVJBKuzCdWIAH0AIm4yBs" +
            "&maxResults=20"
        )
        .then((res) => setBook(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>“Books are a uniquely portable magic.”</h1>
          <h2>- Stephen King</h2>
        </div>
        <div className="row2">
          <h2>Search your desired book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter The Book Title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <Card book={book} />
      </div>
    </>
  );
};
export default Main;
