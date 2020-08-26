class Keypoint
{
  constructor(x, y, r) 
  {
    this.x = x;   // x coordinate
    this.y = y;   // y coordinate
    this.r = r;   // radius
    this.c = 0;   // color
  }
  
  changeColor(color)
  {
    this.c = color;
  }
  
  hoverPoint(mX, mY)
  {
    let distance = dist(mX, mY, this.x, this.y);
    return distance < this.r;
  }
  
  move()
  {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  
  show()
  {
    stroke(255);
    strokeWeight(4);
    fill(this.c, 125);
    ellipse(this.x, this.y, this.r*2);
  }
}
