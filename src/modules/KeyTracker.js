export class KeyTracker {
  constructor() {
    this.keys = {};
    window.addEventListener('keydown', (event) => {
      this.keys[event.key] = true;
    });
    window.addEventListener('keyup', (event) => {
      this.keys[event.key] = false;
    });
  }

  isKeyPressed(key) {
    return !!this.keys[key];
  }
}
