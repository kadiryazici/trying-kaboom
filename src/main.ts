import '/src/Game';
import '/src/Sprites/load';

import { Tags } from '/src/Tags';
import { createPlayer } from '/src/Entities/player';
import { tag } from '/src/components/tag';

addLevel(
  [
    `                       `,
    `                       `,
    `                       `,
    `                       `,
    `                       `,
    `                       `,
    `                       `,
    `          $           $`, //
    `     &    $           $`,
    `          =============`
  ],
  {
    width: 35,
    height: 35,
    pos: vec2(300, 150),
    '=': () => [
      area(), //
      rect(35, 35),
      solid(),
      color(255, 255, 255)
    ],
    $: () => [
      area(), //
      body(),
      rect(35, 35),
      color(0, 0, 0)
    ],
    '&': () => [
      area(), //
      color(245, 224, 66),
      rect(35, 35),
      tag(Tags.Coin)
    ]
  }
);

const player = createPlayer();

player.onCollide(Tags.Coin, (obj) => {
  obj.destroy();
  player.canDoubleJump = true;
  setTimeout(() => {
    player.canDoubleJump = false;
  }, 3000);
});

add([
  //
  color(0, 0, 255),
  outline(),
  rect(width(), 50),
  pos(0, height() - 50),
  area(),

  solid()
]);
