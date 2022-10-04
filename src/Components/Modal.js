const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
          <div className="inner-box">
            <img
              src={item.volumeInfo.imageLinks.smallThumbnail}
              alt={item.volumeInfo.title}
            />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{`Author: ${item.volumeInfo.authors}`}</h3>
              <h3>{`Published date: ${item.volumeInfo.publishedDate}`}</h3>
              <h3>{`Number of pages: ${item.volumeInfo.pageCount}`}</h3>
              <a href={item.volumeInfo.previewLink}>
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};
export default Modal;
