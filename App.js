import React, { useState, useEffect } from "react";

function QuoteGenerator() {
  const [quote, setQuote] = useState({});
  const [background, setBackground] = useState("#fff");

  const handleClick = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data);
    setBackground(getRandomColor());
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div style={{ background: background }}>
      <h1>Quote of the day</h1>
      <p>{quote.content}</p>
      <h4>-{quote.author}</h4>
      <button type="button" class="btn btn-success" onClick={handleClick}>New Quote</button>
    </div>
  );
}

export default QuoteGenerator;
