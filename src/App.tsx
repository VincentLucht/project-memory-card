import './css/App.css';
import { useState } from 'react';
import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';

import { Difficulty } from './components/common/difficulty';
import { Card } from './components/common/card';
import { shuffle } from './typescript/randomize';
import { getMessage, viewStates } from './typescript/states';
import { WinScreen, LooseScreen } from './components/common/gameState';

export default function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(score);
  const [characters, setCharacters] = useState([]);
  const [difficulty, setDifficulty] = useState<string | null>(null);

  const [view, setView] = useState(viewStates.chooseDifficulty);
  const [selectedClass, setSelectedClass] = useState('');
  const [message, setMessage] = useState('');

  const gameOver = () => {
    setHighscore(score);
    setScore(0);
    setCharacters([]);
    setDifficulty(null);
    setView(viewStates.gameOver);
    setSelectedClass('');
  };

  const reset = () => {
    setScore(0);
    setCharacters([]);
    setDifficulty(null);
    setView(viewStates.chooseDifficulty);
    setSelectedClass('');
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
      setMessage(getMessage(difficulty, false));
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

    const hasWon = determineWin(newCharacters);
    if (hasWon) {
      setCharacters([]);
      setHighscore(score + 1); // set highscore after win
      setView(viewStates.wonGame);
      setMessage(getMessage(difficulty, hasWon));
    }
  };

  return (
    <div className="content-wrapper">
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
            setSelectedClass={setSelectedClass}
          />
        )}

        <div className={`card-container ${selectedClass}`}>
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
            <WinScreen message={message} reset={reset}></WinScreen>
          </div>
        )}

        {view === viewStates.gameOver && (
          <div className="looser-container">
            <LooseScreen message={message} reset={reset}></LooseScreen>
          </div>
        )}
      </Main>

      <Footer></Footer>
    </div>
  );
}
