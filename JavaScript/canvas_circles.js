let canvas = document.querySelector('canvas')
// canvas.height = '500';
// canvas.width = '500';
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let ctx = canvas.getContext('2d')
// ctx.beginPath()
// How to Draw a line on canvas

// ctx.moveTo(100, 100)
// ctx.lineTo(100, 400)
// ctx.lineTo(200, 200)
// ctx.lineTo(100, 100)

// Closes the shape by drawing a line from current point (100, 100) to starting point — but in this case it's already closed, so this line has no visible effect here.
// ctx.closePath()
// ctx.strokeStyle = 'purple';
// ctx.fillStyle = 'red';
// ctx.fill()
// ctx.lineWidth = '10';
// ctx.stroke()

// How to Draw a Circle on Canvas
// Angles are in radians, not degrees
// ctx.arc(250, 250, 50, 0, 360, true)

// After calling closePath(), you can still start a new path on the same canvas unless you call ctx.beginPath() again to reset.

// ctx.beginPath()
// ctx.arc(250, 250, 50, 0, Math.PI * 2, true)
// ctx.fillStyle= 'red';
// ctx.fill()
// ctx.stroke()

for (let i = 0; i < 100 ; i++) {
  // Give any random value between 0 and 1 
  let x = Math.random() * window.innerWidth
  let y = Math.random() * window.innerHeight
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  ctx.beginPath()
  // ctx.arc(250 * i, 250 * i, 50, 0, Math.PI * 2, false)
  ctx.arc(x, y, 50, 0, Math.PI * 2, false)
  ctx.fillStyle= `#${randomColor}`;
  ctx.strokeStyle= `#${randomColor}`;
  ctx.fill()
  ctx.stroke()   
}
