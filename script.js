const wrapper = document.querySelector('#wrapper')
const overlay = document.querySelector('#overlay')

let opacity = 0.8
let r = 55
let g = 255
let b = 255
let a = 1.0

let switchR = false
let switchG = false
let switchB = false
let switchA = false

for (let i = 0; i < 1580; i++) {
  const div = document.createElement('div')
  div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`
  wrapper.appendChild(div)
  
  switchR ? r += 5 : r -= 5
  switchG ? g += 2 : g -= 2
  switchB ? b += 1 : b -= 1
  
  r > 154 ? switchR = false : null
  g > 254 ? switchG = false : null
  b > 254 ? switchB = false : null  
  
  r < 0 ? switchR = true : null
  g < 0 ? switchG = true : null
  b < 0 ? switchB = true : null
  
  a > 1.0 ? switchA = false : null  
  a < 0.01 ? switchA = true : null
  
  switchA ? a += 0.02 : a -= 0.02
}

r = 120
g = 20
b = 150
a = 0.7

for (let i = 0; i < 2110; i++) {
  const div = document.createElement('div')

  switchR ? r += 12 : r -= 2
  switchG ? g += 6 : g -= 16
  switchB ? b += 3 : b -= 3
  
  r > 14 ? switchR = false : null
  g > 14 ? switchG = false : null
  b > 224 ? switchB = false : null  
  
  r < 240 ? switchR = true : null
  g < 40 ? switchG = true : null
  b < 110 ? switchB = true : null
  
  a < 0.01 ? switchA = true : null  
  a > 1.0 ? switchA = false : null
  switchA ? a += 0.1 : a -= 0.1

  div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`
  overlay.appendChild(div)
}

let switchScroll = false
let counter = 0

function pageScroll() {
  switchScroll ? window.scrollBy(0, -1510) : window.scrollBy(0, 1510)
  let scrolldelay = setTimeout(pageScroll, 0)
  
  counter++
  counter % 2 === 0 ? switchScroll = !switchScroll : null
}

pageScroll()
