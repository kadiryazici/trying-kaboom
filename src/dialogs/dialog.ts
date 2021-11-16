const dialoga = [
  {
    player: 'kadir',
    message: 'low berkant biraz daha bir şeyler öğren'
  },
  {
    player: 'kadir',
    message: 'go yazarak sadece go yazmış olursun'
  },
  {
    player: 'kadir',
    message: 'başka şeylerde de kendini geliştir mesela typescript ok?'
  },
  {
    player: 'berkant',
    message: 'tmm'
  }
];

export const createDialog = () => {
  dialoga.forEach((element) => {
    console.log(element.player);
  });
};
