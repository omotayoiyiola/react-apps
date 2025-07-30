import React, { useEffect, useRef, useState } from "react";

const TypingSpeed = () => {
  const STARTING_TIME = 60;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const startGame = () => {
    setIsRunning(true);
    setText("");
    setWordCount(0);
    setTimeRemaining(STARTING_TIME);
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  };

  useEffect(() => {
    if (isRunning && timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining((t) => t - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isRunning]);

  const endGame = () => {
    setIsRunning(false);
    setWordCount(countWords(text));
  };

  const countWords = (text) => {
    // i love you
    // ["i", "love", "you"]
    // length = 3
    let textArray = text.split(" ");
    return textArray.length;
  };

  //   console.log(
  //     "TEXT",
  //     text,
  //     "TIME REMAINING",
  //     timeRemaining,
  //     "IS RUNNING",
  //     isRunning
  //   );

  return (
    <div className="container">
      <h1>Typing Speed Test</h1>
      <textarea
        style={styles.textarea}
        value={text}
        placeholder="Start typing..."
        onChange={handleChange}
        ref={textBoxRef}
        disabled={!isRunning}
      />

      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame}>Start Typing</button>
      <h2>Word Count: {wordCount}</h2>
    </div>
  );
};

export default TypingSpeed;

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
  },

  textarea: {
    width: "80%",
    height: "150px",
    fontSize: "20px",
  },
};
