'use strict'
var currWidth = 100
var currHeight = 100

function onBallClick() {
  const elBall = document.querySelector('div')
  if (currHeight >= 400) {
    currWidth = 100
    currHeight = 100

    elBall.innerText = currHeight
    elBall.style.width = currWidth + 'px'
    elBall.style.height = currHeight + 'px'
  } else {
    elBall.style.width = currWidth + 50 + 'px'
    currWidth += 50
    elBall.style.height = currHeight + 50 + 'px'
    currHeight += 50
    elBall.innerText = currHeight
  }
}
