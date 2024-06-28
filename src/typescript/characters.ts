const characters = [
  // Novice (6 characters)
  { id: 'GSa3okd5ltyLe', name: 'Aang' },
  { id: 'MBZgABv9CZ6NRzuK7Y', name: 'Katara' },
  { id: 'J5deqXb35R6hDQHJJV', name: 'Sokka' },
  { id: '4IzOgM1bfOe6k', name: 'Toph' },
  { id: 'PFsVjUCmSkZDq', name: 'Zuko' },
  { id: 'n6mRXWDrUP344MpVGw', name: 'Appa' },
  // Apprentice (12 characters)
  { id: 'ZvJ0bHvAy1N9S', name: 'Iroh' },
  { id: 'cpte18kjtF43e', name: 'Azula' },
  { id: 'hirrJH5VwtAMo', name: 'Suki' },
  { id: 'hfT4eNf5EXeuY', name: 'Momo' },
  { id: 'Il9SJMOln1gyY', name: 'Ozai' },
  { id: 'efwUQ5Da0mhTq', name: 'Ty Lee' },
  // Master (18 characters)
  { id: 'AloJdViOzqEdq', name: 'Korra' }, // f8hd7QP9LT31Rk2NG1
  { id: 'fsETZzSVAeAahyh17V', name: 'Mako' },
  { id: 'f8VKQhftwBtGMNpTAT', name: 'Bolin' },
  { id: '55u1ch3U33K3S', name: 'Asami' },
  { id: 'JZK9Jl98K5PYQ', name: 'Tenzin' }, // 13zrW7MMFtUQSI
  { id: 'wOksV3A7IuuWc', name: 'Lin Beifong' },
  // Avatar (24 characters)
  { id: 'keZyTKNPoaeGz9rMoe', name: 'Varrick' },
  { id: 'LMbmg9kWdNo5iAlDQ4', name: 'Ikki' },
  { id: 'fWvcqpfabZ0pkZAZuD', name: 'Meelo' },
  { id: 'IhfkU2S25zQnjYpJ1p', name: 'Zaheer' },
  { id: 'Xb6Kl5IWG8edoqbdbz', name: 'Kya' },
  { id: 'R6we3DuoURW93ZjshC', name: 'Bumi' },
];

function getDifficulty(difficulty: string, characters: object[]) {
  const elementAmount = () => {
    switch (difficulty) {
      case 'Novice':
        return 8;

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

export { characters, getDifficulty };
