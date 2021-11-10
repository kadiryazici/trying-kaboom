import kaboom from 'kaboom';

const canvas = document.getElementById('game') as HTMLCanvasElement;
kaboom({
  canvas,
  width: 1200,
  height: 600,
  background: [3, 207, 252]
});
