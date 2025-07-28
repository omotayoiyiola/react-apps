import React, { useState } from "react";

const RockPaperScissors = () => {
  const choices = ["paper", "scissors"];
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const playGame = (userPick) => {
    const computerPick = choices[Math.floor(Math.random() * 2)];
    setUserChoice(userPick);
    setComputerChoice(computerPick);
    getResult(userPick, computerPick);
  };

  const getResult = (userPick, computerPick) => {
    if (userPick === computerPick) {
      setResult("Its a draw");
    } else if (userPick === "scissors" && computerPick === "paper") {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Paper Scissors Game</h1>

      <div>
        {choices.map((choice) => (
          <button onClick={() => playGame(choice)}>{choice}</button>
        ))}
      </div>
      <div>
        <p>You: {userChoice}</p>
        <p>Computer: {computerChoice}</p>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default RockPaperScissors;

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
};
