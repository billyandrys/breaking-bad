import React from "react";

function Quote({quote}) {
  return (
    <div>
      <p>{quote.text}</p>
      <br />
      <span>{quote.author}</span>
    </div>
  );
}

export default Quote;
