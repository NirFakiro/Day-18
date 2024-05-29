'use strict'
var currWidth = 100
var currHeight = 100

function onBallClick() {
  const elBall = document.querySelector('div')
  elBall.style.width = currWidth + 50 + 'px'
  currWidth += 50
  elBall.style.height = currHeight + 50 + 'px'
  currHeight += 50
  elBall.innerText = currHeight
}
