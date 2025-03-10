import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const quotesAPI = "https://official-joke-api.appspot.com/random_joke";

const QuoteMachine = () => {
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch(quotesAPI);
      const data = await response.json();
      setQuote(data.setup);
      setAuthor(data.punchline);
    } catch (error) {
      setQuote("Failed to load quote. Try again!");
      setAuthor("");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div id="quote-box" className="p-4 bg-white rounded shadow text-center w-50">
        <h4 id="text">"{quote}"</h4>
        <p id="author" className="fw-bold">- {author}</p>
        <div>
          <button id="new-quote" className="btn btn-primary me-2" onClick={fetchQuote}>
            New Quote
          </button>
          <a
            id="tweet-quote"
            className="btn btn-info"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + " - " + author)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuoteMachine;
