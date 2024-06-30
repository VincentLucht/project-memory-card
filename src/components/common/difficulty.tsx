import {
  characters as originalCharacters,
  getDifficulty,
} from '../../typescript/characters';
import { viewStates } from '../../typescript/states';

interface DifficultyProps {
  setCharacters: (newCharacter: { id: string; name: string }[]) => void;
  setDifficulty: (newDifficulty: string | null) => void;
  setView: (value: string) => void;
  setSelectedClass: (value: string) => void;
}
export function Difficulty({
  setCharacters,
  setDifficulty,
  setView,
  setSelectedClass,
}: DifficultyProps) {
  function selectDifficulty(e: React.MouseEvent<HTMLButtonElement>) {
    const difficultyName = (e.target as HTMLInputElement).textContent ?? '';
    if (difficultyName) {
      setDifficulty(difficultyName);

      // set the array of characters
      const allCharacters = getDifficulty(difficultyName, originalCharacters);
      setCharacters((prevCharacters) => {
        return [...prevCharacters, ...allCharacters];
      });

      // get the corresponding class name
      const className = getDifficulty(
        difficultyName,
        originalCharacters,
        'gridAmount',
      );

      // advance states
      setSelectedClass(className);
      setView(viewStates.runGame);
    }
  }

  return (
    <div className={'difficulty-container'}>
      <h2 className="choose-difficulty">Choose your Difficulty</h2>

      <div className="difficulty-button-container">
        <button onClick={selectDifficulty} className="novice">
          Novice
        </button>
        <button onClick={selectDifficulty} className="apprentice">
          Apprentice
        </button>
        <button onClick={selectDifficulty} className="master">
          Master
        </button>
        <button onClick={selectDifficulty} className="avatar">
          Avatar
        </button>
      </div>
    </div>
  );
}
