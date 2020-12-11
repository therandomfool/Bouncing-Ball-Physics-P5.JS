let ball =
{
x : 0,
y : 0,
xspeed : 9,
yspeed : 3
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  fill(255,0,0);
  ellipse(ball.x, ball.y, 44 ,44);

  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }

  if (ball.y > height || ball.y <0) {
    ball.yspeed = ball.yspeed * -1;
  }

  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}
