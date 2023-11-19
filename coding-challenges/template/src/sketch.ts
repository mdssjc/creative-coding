import p5 from 'p5';

const app = new p5((p: p5) => {
  p.setup = () => {
    p.createCanvas(600, 600);
  };

  p.draw = () => {
    p.background(0);
  };
});
