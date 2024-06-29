import {
  characters as originalCharacters,
  getDifficulty,
} from '../../typescript/characters';
import { viewStates } from '../../typescript/states';

interface DifficultyProps {
  setCharacters: (newCharacter: { id: string; name: string }[]) => void;
  setDifficulty: (newDifficulty: string | null) => void;
  setView: (value: string) => void;
}
export function Difficulty({
  setCharacters,
  setDifficulty,
  setView,
}: DifficultyProps) {
  function selectDifficulty(e: React.MouseEvent<HTMLButtonElement>) {
    const difficultyName = (e.target as HTMLInputElement).textContent ?? '';
    difficultyName ? setDifficulty(difficultyName) : null;

    // set the array of characters
    const allCharacters = getDifficulty(difficultyName, originalCharacters);
    setCharacters((prevCharacters) => {
      return [...prevCharacters, ...allCharacters];
    });

    // advance state
    setView(viewStates.runGame);
  }

  return (
    <div>
      <button onClick={selectDifficulty}>Novice</button>
      <button onClick={selectDifficulty}>Apprentice</button>
      <button onClick={selectDifficulty}>Master</button>
      <button onClick={selectDifficulty}>Avatar</button>
    </div>
  );
}
