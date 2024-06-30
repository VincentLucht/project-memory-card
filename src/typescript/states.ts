export const viewStates = {
  chooseDifficulty: 'chooseDifficulty',
  runGame: 'runGame',
  gameOver: 'gameOver',
  wonGame: 'wonGame',
};

export function getMessage(rawDifficulty: string, rawResult: boolean) {
  type Level = 'novice' | 'apprentice' | 'master' | 'avatar';
  type Result = 'win' | 'loose';

  const message: Record<Level, Record<Result, string>> = {
    novice: {
      win: 'Congratulations! Your bending skills are showing promise.',
      loose: "Don't worry, even Aang fell a few times when he started.",
    },
    apprentice: {
      win: "Well done! Your memory is as sharp as Sokka's wit.",
      loose: 'Keep training! Even Zuko faced setbacks on his path to mastery.',
    },
    master: {
      win: "Impressive! Your memory rivals Toph's earthbending precision.",
      loose:
        "It's okay, even Katara had moments of struggle before becoming a master.",
    },
    avatar: {
      win: "You've mastered the elements of memory! You truly are the Avatar.",
      loose:
        'Even the Avatar stumbles sometimes. Keep practicing to reach your full potential.',
    },
  };

  const difficulty = rawDifficulty.toLowerCase() as Level;
  const result: Result = rawResult ? 'win' : 'loose';
  return message[difficulty][result];
}
