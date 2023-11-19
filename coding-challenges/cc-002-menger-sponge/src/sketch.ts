import p5 from 'p5';
import Box from './box';

let a = 0;
let sponge: Box[] = [];

const app = new p5((p: p5) => {
  p.setup = () => {
    p.createCanvas(600, 600, p.WEBGL);
    p.normalMaterial();
    let b = new Box(0, 0, 0, 200, p);
    sponge.push(b);
  };

  p.draw = () => {
    p.background(51);
    p.rotateX(a);
    p.rotateY(a * 0.4);
    p.rotateZ(a * 0.1);
    sponge.forEach((b) => b.show());
    a += 0.01;
  };

  p.mousePressed = () => {
    let next: Box[] = [];
    sponge.forEach((b) => {
      let newBoxes = b.generate();
      next = next.concat(newBoxes);
    });
    sponge = next;
  };
});
