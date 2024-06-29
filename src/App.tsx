import './css/App.css';
import { useState } from 'react';
import { Header } from './components/header';
import { Main } from './components/main';

import { Difficulty } from './components/common/difficulty';
import { Card } from './components/common/card';
import { shuffle } from './typescript/randomize';
import { viewStates } from './typescript/states';
import { WinScreen, LooseScreen } from './components/common/gameState';

export default function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(score);
  const [characters, setCharacters] = useState([]);
  const [difficulty, setDifficulty] = useState<string | null>(null);

  const [view, setView] = useState(viewStates.chooseDifficulty);

  const gameOver = () => {
    setHighscore(score);
    setScore(0);
    setCharacters([]);
    setDifficulty(null);
    setView(viewStates.gameOver);
  };

  const reset = () => {
    setScore(0);
    setCharacters([]);
    setDifficulty(null);
    setView(viewStates.chooseDifficulty);
  };

  const determineWin = (array: object[]) => {
    const hasWon = array.filter((character) => {
      return !character.picked;
    });

    if (hasWon.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  // card picking logic, replaces the chosen card's .picked attribute
  const chooseCard = ({
    id,
    name,
    picked,
  }: {
    id: string;
    name: string;
    picked: boolean;
  }) => {
    if (picked) {
      gameOver();
      return;
    }

    // shuffle the order of the characters array
    const shuffledCharacters = shuffle(characters);
    const newCharacters = shuffledCharacters.map((character) => {
      // if match, change the obj, and .picked to true
      if (character.id === id) {
        setScore(score + 1);
        return { ...character, picked: true };
      } else {
        return character;
      }
    });

    setCharacters(newCharacters);

    if (determineWin(newCharacters)) {
      setCharacters([]);
      setHighscore(score + 1); // set highscore after win
      setView(viewStates.wonGame);
    }
  };

  return (
    <div>
      <Header
        score={score}
        highscore={highscore}
        difficulty={!difficulty ? 'Select Difficulty' : difficulty}
        reset={reset}
      ></Header>
      <Main>
        {view === viewStates.chooseDifficulty && (
          <Difficulty
            setCharacters={setCharacters}
            setDifficulty={setDifficulty}
            setView={setView}
          />
        )}

        <div className="card-container">
          {characters.map((character) => (
            <Card
              onClick={() => chooseCard(character)}
              key={character.id}
              query={character.id}
              name={character.name}
            ></Card>
          ))}
        </div>

        {view === viewStates.wonGame && (
          <div className="winner-container">
            <WinScreen score={score}></WinScreen>
          </div>
        )}

        {view === viewStates.gameOver && (
          <div className="loser-container">
            <LooseScreen score={score}></LooseScreen>
          </div>
        )}
      </Main>
    </div>
  );
}
