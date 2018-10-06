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

for (let i = 0; i < 520; i++) {
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

for (let i = 0; i < 110; i++) {
  const div = document.createElement('div')

  switchR ? r += 1 : r -= 1
  switchG ? g += 10 : g -= 10
  switchB ? b += 3 : b -= 3
  
  r > 254 ? switchR = false : null
  g > 114 ? switchG = false : null
  b > 154 ? switchB = false : null  
  
  r < 230 ? switchR = true : null
  g < 10 ? switchG = true : null
  b < 110 ? switchB = true : null
  
  a < 0.01 ? switchA = true : null  
  switchA ? a += 0.01 : a -= 0.01

  div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`
  overlay.appendChild(div)
}
