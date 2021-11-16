export const levelOne = addLevel(
  [
    '@  =  $', //
    '======='
  ],
  {
    width: 64,
    height: 64,
    '@': () => [
      //
      sprite('player'),
      area(),
      body(),
      'player'
    ],
    '=': () => [
      //,
      sprite('grass'),
      area(),
      solid()
    ],
    $: () => [
      //,
      sprite('coin'),
      area(),
      'coin'
    ]
  }
);
