import { useState } from "react";
import Modal from "./Modal";
const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  return (
    <>
      {book.map((item) => {
        return (
          <div key={item.volumeInfo.title}>
            <div
              className="card"
              onClick={() => {
                setShow(true);
                setItem(item);
              }}
            >
              <img
                src={item.volumeInfo.imageLinks.smallThumbnail}
                alt={item.volumeInfo.title}
              />
              <div className="bottom">
                <h3 className="title">{item.volumeInfo.title}</h3>
                <p className="authors">{item.volumeInfo.authors}</p>
              </div>
            </div>
            <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
          </div>
        );
      })}
    </>
  );
};
export default Card;
