import { winningGif, losingGif } from '../../typescript/characters';
import { Card } from './card';

function WinScreen({ score, highscore }) {
  const query = winningGif.id;

  return (
    <Card
      query={query}
      name={`Your score was ${score}\nYour highscore was ${highscore}`}
      className="card winning-card"
    ></Card>
  );
}

function LooseScreen({ score, highscore }) {
  const query = losingGif.id;

  return (
    <Card
      query={query}
      name={'You still have much to study...'}
      className="card losing-card"
    ></Card>
  );
}

export { WinScreen, LooseScreen };
