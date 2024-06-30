interface HeaderProps {
  score: number;
  highscore: number;
  difficulty: string | null;
  reset: () => void;
}
export function Header({ score, highscore, difficulty, reset }: HeaderProps) {
  return (
    <header>
      <div className="header-wrapper">
        <div className="difficulty container">
          <div>Difficulty: {difficulty}</div>

          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>

        <div id="atla-logo"></div>

        <div className="scoreboard container">
          <div>Score: {score}</div>
          <div>Highscore: {highscore}</div>
        </div>
      </div>
    </header>
  );
}
