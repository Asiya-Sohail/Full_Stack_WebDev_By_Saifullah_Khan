// Canvas part 1 and part 2

let canvas = document.querySelector('canvas')
// console.log(canvas);

// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;
canvas.height = '500';
canvas.width = '500';

// Pen or Brush to draw
let ctx = canvas.getContext("2d")

// How to draw rectangle on Canvas
// Order Matters in this 
ctx.fillStyle = 'red';

// ctx.fillRect(x, y, width, height)
ctx.fillRect(20, 20, 100, 100)

ctx.fillStyle = '#7c7c7c';
ctx.fillRect(300, 20, 50, 100)

ctx.strokeStyle = 'red'
ctx.lineWidth = '5'
ctx.strokeRect(20, 300, 50, 50)