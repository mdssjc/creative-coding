import p5 from 'p5';

export default class Start {
  private x: number = 0;
  private y: number = 0;
  private z: number = 0;
  private pz: number = 0;

  constructor(private p5: p5) {
    this.reset();
  }

  update(speed: number) {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.reset();
    }
  }

  show() {
    this.p5.fill(255);
    this.p5.noStroke();

    const sx = this.p5.map(this.x / this.z, 0, 1, 0, this.p5.width);
    const sy = this.p5.map(this.y / this.z, 0, 1, 0, this.p5.height);

    const r = this.p5.map(this.z, 0, this.p5.width, 4, 0);
    // this.p5.ellipse(sx, sy, r, r);

    const px = this.p5.map(this.x / this.pz, 0, 1, 0, this.p5.width);
    const py = this.p5.map(this.y / this.pz, 0, 1, 0, this.p5.height);

    this.pz = this.z;

    this.p5.stroke(255);
    this.p5.strokeWeight(r);
    this.p5.line(px, py, sx, sy);
  }

  private reset() {
    this.x = this.p5.random(-this.p5.width, this.p5.width);
    this.y = this.p5.random(-this.p5.height, this.p5.height);
    this.z = this.p5.random(this.p5.width);
    this.pz = this.z;
  }
}
