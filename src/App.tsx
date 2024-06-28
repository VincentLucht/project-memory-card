import './css/App.css';
import { useState } from 'react';
import { Header } from './components/header';
import { Main } from './components/main';

import { Difficulty } from './components/common/difficulty';
import { Card } from './components/common/card';

export default function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(score);

  const [characters, setCharacters] = useState([]);
  const [difficulty, setDifficulty] = useState<string | null>(null);

  return (
    <div>
      <Header
        score={score}
        highscore={highscore}
        difficulty={!difficulty ? 'Select Difficulty' : difficulty}
      ></Header>
      <Main>
        {!difficulty && (
          <Difficulty
            setCharacters={setCharacters}
            setDifficulty={setDifficulty}
          />
        )}

        <div className="card-container">
          {characters.map((character) => (
            <Card
              key={character.id}
              query={character.id}
              name={character.name}
            ></Card>
          ))}
        </div>
      </Main>
    </div>
  );
}
