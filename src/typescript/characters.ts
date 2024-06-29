const characters = [
  // Novice (6 characters)
  { id: 'GSa3okd5ltyLe', name: 'Aang', picked: false },
  { id: 'MBZgABv9CZ6NRzuK7Y', name: 'Katara', picked: false },
  { id: 'J5deqXb35R6hDQHJJV', name: 'Sokka', picked: false },
  { id: '4IzOgM1bfOe6k', name: 'Toph', picked: false },
  { id: 'PFsVjUCmSkZDq', name: 'Zuko', picked: false },
  { id: 'n6mRXWDrUP344MpVGw', name: 'Appa', picked: false },
  // Apprentice (12 characters)
  { id: 'ZvJ0bHvAy1N9S', name: 'Iroh', picked: false },
  { id: 'cpte18kjtF43e', name: 'Azula', picked: false },
  { id: 'hirrJH5VwtAMo', name: 'Suki', picked: false },
  { id: 'hfT4eNf5EXeuY', name: 'Momo', picked: false },
  { id: 'Il9SJMOln1gyY', name: 'Ozai', picked: false },
  { id: 'efwUQ5Da0mhTq', name: 'Ty Lee', picked: false },
  // Master (18 characters)
  { id: 'AloJdViOzqEdq', name: 'Korra', picked: false }, // f8hd7QP9LT31Rk2NG1
  { id: 'fsETZzSVAeAahyh17V', name: 'Mako' },
  { id: 'f8VKQhftwBtGMNpTAT', name: 'Bolin', picked: false },
  { id: '55u1ch3U33K3S', name: 'Asami', picked: false },
  { id: 'JZK9Jl98K5PYQ', name: 'Tenzin', picked: false }, // 13zrW7MMFtUQSI
  { id: 'wOksV3A7IuuWc', name: 'Lin Beifong', picked: false },
  // Avatar (24 characters)
  { id: 'keZyTKNPoaeGz9rMoe', name: 'Varrick', picked: false },
  { id: 'LMbmg9kWdNo5iAlDQ4', name: 'Ikki', picked: false },
  { id: 'fWvcqpfabZ0pkZAZuD', name: 'Meelo', picked: false },
  { id: 'IhfkU2S25zQnjYpJ1p', name: 'Zaheer', picked: false },
  { id: 'Xb6Kl5IWG8edoqbdbz', name: 'Kya', picked: false },
  { id: 'R6we3DuoURW93ZjshC', name: 'Bumi', picked: false },
];

const winningGif = {
  id: '3o751PHkfGpIjPTuJa',
};

const losingGif = {
  id: '3o751PHkfGpIjPTuJa',
};

function getDifficulty(difficulty: string, characters: object[]) {
  const elementAmount = () => {
    switch (difficulty) {
      case 'Novice':
        return 3;

      case 'Apprentice':
        return 12;

      case 'Master':
        return 18;

      case 'Avatar':
        return 24;

      default:
        return 'Invalid';
    }
  };

  const amount = elementAmount();
  return typeof amount === 'number' ? characters.slice(0, amount) : amount;
}

export { characters, winningGif, losingGif, getDifficulty };
