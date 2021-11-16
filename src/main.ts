import '/src/Game';
import '/src/Sprites/load';

import { Area, AreaComp, BodyComp, Comp, CompList, KaboomCtx, PosComp, Rect } from 'kaboom';

import { Tags } from '/src/Tags';
import { createDialog } from '/src/dialogs/dialog';
import { createPlayer } from '/src/Entities/player';
import { tag } from '/src/components/tag';

createDialog();
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
});

add([
  //
  color(0, 0, 255),
  outline(),
  rect(width(), 50),
  pos(0, height() - 50),
  area(),
  raycast(),
  solid()
]);

interface MyComp extends Comp {
  isRaycasting: boolean;
  id: string;
}
function raycast(): MyComp {
  return {
    id: 'raycast',
    require: ['area'],
    isRaycasting: false,
    update(this: AreaComp & MyComp) {
      every((obj) => {
        const targetArea = obj.area as AreaComp['area'];
        if (targetArea) {
          const { x: cX, y: cY } = this.area.offset!;
          const { width, height } = this.area;
          const currentP1 = vec2(cX, cY);
          const currentP2 = vec2(cX + width!, cY + height!);

          const tArea = obj.area as AreaComp['area'];
          const { x: tX, y: tY } = tArea.offset!;
          const { width: tWidth, height: tHeight } = tArea;
          const targetP1 = vec2(tX, tY);
          const targetP2 = vec2(tX + tWidth! + 200, tY + tHeight! + 100);

          const isColliding = testRectRect(
            { p1: currentP1, p2: currentP2 } as Rect,
            { p1: targetP1, p2: targetP2 } as Rect
          );
          console.log(tArea);
        }
      });
    }
  };
}
