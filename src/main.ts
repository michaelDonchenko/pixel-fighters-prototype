import './style.css'
import {Game} from './modules/Game'

addEventListener('load', main)

function main() {
  const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  canvas.width = 1280
  canvas.height = 720

  let lastTime = 0
  const game = new Game(canvas.width, canvas.height)

  function animate(timeStamp: number) {
    const deltaTime = timeStamp - lastTime
    lastTime = timeStamp

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    game.update(deltaTime)
    game.draw(ctx)

    requestAnimationFrame(animate)
  }

  animate(0)
}
