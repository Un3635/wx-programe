function touch() {
  this.touchDotX = 0;
  this.touchDotY = 0;
  this.dir = '';
  this.timer = null;

}
touch.prototype = {
  start(e) {
    this.touchDotX = e.touches[0].pageX;
    this.touchDotY = e.touches[0].pageY;
    this.time = 0;
    this.timer = setInterval(() => {
      this.time++;
    }, 100)
  },
  end(e) {
    let touchMoveX = e.changedTouches[0].pageX;
    let touchMoveY = e.changedTouches[0].pageY;

    let tmX = touchMoveX - this.touchDotX;
    let tmY = touchMoveY - this.touchDotY;
    let absX = Math.abs(tmX);
    let absY = Math.abs(tmY);
    // console.log(touchMoveX, this.touchDotX)
    // console.log(touchMoveY, this.touchDotY)
    // console.log(tmX, tmY, absX, absY);
    // console.log('----------');
    if (this.time < 20) {
      if (absX > 2 * absY) {
        if (tmX < 0) this.dir = 'left';
        else this.dir = 'right';
      }
      if (absY > absX * 2) {
        if (tmY < 0) this.dir = 'up';
        else this.dir = 'down';
      }
    }

    clearInterval(this.timer);
    this.time = 0;
  }
}

module.exports = new touch();