import React from "react";

import "assets/css/product.css";

const BookCard = ({ photo, title, author, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={photo} alt={title} style={styles.photo} />
      <h3 style={styles.title} className="font-playfair">{title}</h3>
      <p style={styles.author} className="font-bold">{author}</p>
    </div>
  );
};

const styles = {
  photo: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "12px 0 8px",
  },
  author: {
    color: "#41A0E4",
    fontSize: "16px",
  },
};

export default BookCard;