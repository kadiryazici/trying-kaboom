import { Tags } from '/src/Tags';
import { tag } from '/src/components/tag';

export const createPlayer = () => {
  const player = add([
    sprite(Tags.Player),
    pos(100, 200),
    scale(0.4),
    body(),
    area(),
    tag(Tags.Friendly),
    tag(Tags.Player),
    {
      jumpTimes: 2,
      canDoubleJump: false,
      speed: 200,
      weakJumpForce: 250
    }
  ]);

  player.jumpForce = 500;

  const cancelMovement = onKeyDown(['d', 'a'], () => {
    if (isKeyDown('a')) {
      player.flipX(false);
      player.move(-player.speed, 0);
    }
    if (isKeyDown('d')) {
      player.flipX(true);
      player.move(player.speed, 0);
    }
  });

  const cancelJumpEvent = onKeyPress('space', () => {
    if (!player.canDoubleJump) {
      if (player.isGrounded()) {
        player.jump(player.jumpForce);
      }
      return;
    }

    if (player.jumpTimes > 0) {
      player.jump(player.jumpForce);
      player.jumpTimes--;
      if (player.jumpForce == 1) {
        player.jump(player.weakJumpForce);
      }
    }
  });

  player.onGround(() => {
    player.jumpTimes = 2;
  });

  player.onFall(() => {
    if (player.jumpTimes > 1) {
      player.jumpTimes = 1;
    }
  });

  player.onDestroy(() => {
    cancelMovement();
    cancelJumpEvent();
  });

  return player;
};
