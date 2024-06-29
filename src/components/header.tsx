interface HeaderProps {
  score: number;
  highscore: number;
  difficulty: string | null;
  reset: () => void;
}
export function Header({ score, highscore, difficulty, reset }: HeaderProps) {
  return (
    <header>
      <div>
        <button className="reset" onClick={reset}>
          Reset
        </button>
        <div className="highscore">Difficulty: {difficulty}</div>
      </div>

      <div>
        <img src="" alt="Logo of ATLA" />
      </div>

      <div>
        <div>Score: {score}</div>
        <div>Highscore: {highscore}</div>
      </div>
    </header>
  );
}
