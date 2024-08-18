import { resources } from "./src/Resource";
import { Sprite } from "./src/Sprite";
import { Vector2 } from "./src/Vector2";
import "./style.css";

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

// const draw = () => {
//   const sky = resources.images.sky;
//   if (sky.isLoaded) {
//     ctx.drawImage(sky.image, 0, 0);
//   }

// const draw = () => {
//   const sky = resources.images.sky;
//   if (sky.isLoaded) {
//     ctx.drawImage(sky.image, 0, 0);
//   }

//   const ground = resources.images.ground;
//   if (ground.isLoaded) {
//     ctx.drawImage(ground.image, 0, 0);
//   }
// };

// const hero = new Sprite({
//   resource: resources.images.hero,
//   hFrames: 3,
//   vFrames: 8,
//   frame: 1,
// });

const skySprit = new Sprite({
  resource: resources.images.sky,
  frameSize: new Vector2(320, 180),
});

const ground = new Sprite({
  resource: resources.images.ground,
  frameSize: new Vector2(320, 180),
});

const hero = new Sprite({
  resource: resources.images.hero,
  frameSize: new Vector2(32, 32),
  hFrames: 3,
  vFrames: 8,
  frame: 1,
});

const shadow = new Sprite({
  resource: resources.images.shadow,
  frameSize: new Vector2(32, 32),
});

const heroPos = new Vector2(16 * 6, 16 * 5);

const draw = () => {
  skySprit.drawImage(ctx, 0, 0);
  ground.drawImage(ctx, 0, 0);

  // Center the hero in the cell
  const heroOffset = new Vector2(-8, -21);
  const heroPosX = heroPos.x + heroOffset.x;
  const heroPosY = heroPos.y + heroOffset.y;

  shadow.drawImage(ctx, heroPosX, heroPosY);
  hero.drawImage(ctx, heroPosX, heroPosY);
};

const update = () => {
  hero.frame += 1;
  heroPos.x += 1;
};

setInterval(() => {
  draw();
}, 300);

// update
