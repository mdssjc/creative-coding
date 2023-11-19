import p5 from 'p5';

export default class Box {
  private pos: p5.Vector;

  constructor(
    private x: number,
    private y: number,
    private z: number,
    private r: number,
    private p5: p5
  ) {
    this.pos = p5.createVector(this.x, this.y, this.z);
  }

  generate() {
    let boxes: Box[] = [];

    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        for (let z = -1; z < 2; z++) {
          let sum = Math.abs(x) + Math.abs(y) + Math.abs(z);
          let newR = this.r / 3;
          if (sum > 1) {
            let b = new Box(
              this.pos.x + x * newR,
              this.pos.y + y * newR,
              this.pos.z + z * newR,
              newR,
              this.p5
            );
            boxes.push(b);
          }
        }
      }
    }
    return boxes;
  }

  show() {
    this.p5.push();
    this.p5.translate(this.pos.x, this.pos.y, this.pos.z);
    // this.stroke(255);
    // this.noStroke();
    // this.noFill();
    // this.fill(255);
    this.p5.box(this.r);
    this.p5.pop();
  }
}
