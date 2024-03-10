import './style.css'

addEventListener('load', main)

function main() {
  const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  canvas.width = 1280
  canvas.height = 720

  let lastTime = 0

  function animate(timeStamp: number) {
    const deltaTime = timeStamp - lastTime
    lastTime = timeStamp
    ctx.fillStyle = 'black'
    ctx.strokeRect(0, 0, canvas.width, canvas.height)

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    requestAnimationFrame(animate)
  }

  animate(0)
}
