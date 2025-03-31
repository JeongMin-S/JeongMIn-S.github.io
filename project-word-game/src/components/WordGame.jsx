import React, { useState, useEffect } from "react";

function WordGame({ words }) {
  const [selectedRow, setSelectedRow] = useState(null);
  const [givenColumn, setGivenColumn] = useState("");
  const [guessCols, setGuessCols] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [hints, setHints] = useState({});

  function generateGame(data) {
    const randomRow = data[Math.floor(Math.random() * data.length)];
    setSelectedRow(randomRow);
    const columns = Object.keys(randomRow);
    const givenCol = columns[Math.floor(Math.random() * columns.length)];
    setGivenColumn(givenCol);
    const guessColumns = columns.filter((col) => col !== givenCol);
    setGuessCols(guessColumns);
    const initAnswers = {};
    guessColumns.forEach((col) => {
      initAnswers[col] = "";
    });
    setUserAnswers(initAnswers);
    const hintsObj = {};
    guessColumns.forEach((col) => {
      const allWords = data.map((row) => row[col]);
      const shuffled = [...allWords].sort(() => 0.5 - Math.random());
      hintsObj[col] = shuffled.slice(0, 6);
    });
    setHints(hintsObj);
    setResults(null);
  }

  useEffect(() => {
    generateGame(words);
  }, [words]);

  function handleChange(e, col) {
    setUserAnswers({ ...userAnswers, [col]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!selectedRow || givenColumn === "") return;
    const res = {};
    guessCols.forEach((col) => {
      res[col] = userAnswers[col] === selectedRow[col];
    });
    setResults(res);
  }

  function handleRestart() {
    if (words.length > 0) {
      generateGame(words);
    }
  }

  if (!selectedRow || givenColumn === "") {
    return <div>로딩 중...</div>;
  }

  return (
    <div>
      <p>
        <strong>제공된 단어</strong> ({givenColumn}): {selectedRow[givenColumn]}
      </p>
      {guessCols.map((col) => (
        <div key={col} className="input-group">
          <p>
            <strong>{col} 빈칸</strong>
          </p>
          <p className="hint">
            <em>힌트:</em> {hints[col] && hints[col].join(", ")}
          </p>
          <input
            type="text"
            value={userAnswers[col]}
            onChange={(e) => handleChange(e, col)}
          />
          {results && results[col] !== undefined && (
            <div style={{ marginTop: "5px" }}>
              {results[col] ? (
                <span style={{ color: "green", fontWeight: "bold" }}>
                  정답!
                </span>
              ) : (
                <span style={{ color: "red", fontWeight: "bold" }}>
                  오답 (정답: {selectedRow[col]})
                </span>
              )}
            </div>
          )}
        </div>
      ))}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={handleSubmit}>제출</button>
        <button onClick={handleRestart}>새 문제</button>
      </div>
    </div>
  );
}

export default WordGame;
