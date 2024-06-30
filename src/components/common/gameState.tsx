import { winningGif, losingGif } from '../../typescript/characters';
import { Card } from './card';

interface ScreenProps {
  message: string;
  reset: () => void;
}

function WinScreen({ message, reset }: ScreenProps) {
  const query = winningGif.id;

  return (
    <Card
      query={query}
      name={message}
      className="card end-card"
      addButton={true}
      reset={reset}
    ></Card>
  );
}

function LooseScreen({ message, reset }: ScreenProps) {
  const query = losingGif.id;

  return (
    <Card
      query={query}
      name={message}
      className="card end-card"
      addButton={true}
      reset={reset}
    ></Card>
  );
}

export { WinScreen, LooseScreen };
