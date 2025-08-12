let canvas = document.querySelector('canvas')
canvas.height = '500';
canvas.width = '500';

let ctx = canvas.getContext('2d')

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
  }

  // constructor(name) {
  //   this.name = name
  //   console.log("My name is " + this.name); 
  // }

  draw(){
    // console.log("Draw a Circle");
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false)
    ctx.fill()
    ctx.stroke()
  }

  update() {
    if (this.x + this.radius > '500' || this.x - this.radius < 0){
      this.dx = -this.dx
    }
    if (this.y + this.radius > '500' || this.y - this.radius < 0){
      this.dy = -this.dy
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw()
  }
}

let mycircle = new Circle(250, 250, 2, 3, 50)
// mycircle.draw()
// let name = new Circle("asiya")

let circleArray = []
for (let i = 0; i < 100; i++) {
  circleArray.push(new Circle(10*i, 10*i, 2, 3, 2*i))  
}

console.log(circleArray);


function animate() {
  ctx.clearRect(0, 0, 500, 500)
  // mycircle.draw()
  let circleArray = []
  for (let i = 0; i < 100; i++) {    
    let radius = 50
    let x = Math.random() * (500 - radius*2) + radius
    let y = Math.random() * (500 - radius*2) + radius
    let dx = (Math.random() * 0.5 + 0.5) * 5;
    let dy = (Math.random() * 0.5 + 0.5) * 5;

    circleArray.push(new Circle(x, y, dx, dy, radius))  
    circleArray[i].update()
  }

  // mycircle.update()
  requestAnimationFrame(animate)
}

animate()
