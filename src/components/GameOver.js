import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>Fim De jogo</h1>
      <h2>
        Sua Pontuação Foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>Reset Game</button>
    </div>
  );
};

export default GameOver;
