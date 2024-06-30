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
  id: 'jaQuaJ8clDC1i',
};

const losingGif = {
  id: '12nPEUFzhRK9sk', // 'USEFIDRItfIrK'
};

function getDifficulty(
  difficulty: string,
  characters: object[],
  returnValue = 'amount',
): string {
  const elementAmount = () => {
    switch (difficulty) {
      case 'Novice':
        return { amount: 8, gridAmount: 'novice-grid' };

      case 'Apprentice':
        return { amount: 12, gridAmount: 'apprentice-grid' };

      case 'Master':
        return { amount: 18, gridAmount: 'master-grid' };

      case 'Avatar':
        return { amount: 24, gridAmount: 'avatar-grid' };

      default:
        return 'Invalid';
    }
  };

  const amountObj = elementAmount();
  const { amount } = amountObj;

  if (returnValue === 'amount') {
    return typeof amount === 'number' ? characters.slice(0, amount) : amount;
  } else if (returnValue === 'gridAmount') {
    return amountObj.gridAmount;
  }
}

export { characters, winningGif, losingGif, getDifficulty };
