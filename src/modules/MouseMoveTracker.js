export class MouseMoveTracker {
  constructor(element) {
    this._x = 0;
    this._y = 0;
    element.addEventListener("mousemove", event => {
      this._x = event.offsetX;
      this._y = event.offsetY;
    });
  }

  getCurrentPosition() {
    return {
      x: this._x,
      y: this._y
    };
  }
}
