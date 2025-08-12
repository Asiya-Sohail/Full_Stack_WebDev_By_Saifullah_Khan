// Collision Detection System
let canvas = document.querySelector('canvas')
let height = '500'
let width = '500'

canvas.height = height
canvas.width = width

ctx = canvas.getContext('2d')
let x = width / 2
let y = height / 2
let dx = 4
let dy = 1
let radius = 50

  // ctx.beginPath()
  // ctx.arc(x, y, radius, 0, Math.PI * 2, false)
  // ctx.fill()
  // ctx.stroke()

  // ctx.clearRect(x, y, 50, 100)


function animate() {
  ctx.clearRect(0, 0, width, height)
  // ctx.strokeStyle = 'red'
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2, false)
  ctx.fill()
  ctx.stroke()

  if (x + radius > width || x - radius < 0) {
    dx = -dx
  }

  if (y + radius > height || y - radius < 0) {
    dy = -dy
  }

  x = x + dx
  y = y + dy

  
  requestAnimationFrame(animate)

}
animate()
