import p5 from 'p5';
import Star from './star';

let stars: Star[] = [];
let speed: number;

const app = new p5((p: p5) => {
  p.setup = () => {
    p.createCanvas(600, 600);
    for (let i = 0; i < 25000; i++) {
      stars[i] = new Star(p);
    }
  };

  p.draw = () => {
    speed = p.map(p.mouseX, 0, p.width, 0, 50);
    p.background(0);
    p.translate(p.width / 2, p.height / 2);
    for (const star of stars) {
      star.update(speed);
      star.show();
    }
  };
});
