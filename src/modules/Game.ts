export class Game {
  constructor(public width: number, public height: number) {}

  update(deltaTime: number) {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'black'
    ctx.strokeRect(0, 0, this.width, this.height)
  }
}
