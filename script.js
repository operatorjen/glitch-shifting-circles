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

for (let i = 0; i < 300; i++) {
  const div = document.createElement('div')
  div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`
  wrapper.appendChild(div)
  
  if (r < 1) {
    switchR = true
  }
  
  if (g < 1) {
    switchG = true
  }
  
  if (b < 1) {
    switchB = true
  }
  
  switchR ? r += 5 : r -= 5
  
  if (r < 230) {
    switchG ? g += 2 : g -= 2
    switchB ? b += 1 : b -= 1
  }
  
  a -= 0.01
  
  if (a < 0.1) {
    a = 1.0
  }
}

r = 215
g = 20
b = 250

for (let i = 0; i < 110; i++) {
  const div = document.createElement('div')
  div.style.opacity = opacity
  overlay.appendChild(div)
  
  r -= 2
  g -= 1
  b -= 15
  
  if (r < 10) {
    r = 225
  }
  
  if (g < 10) {  
    g = 100
  }
  
  if (b < 1) {
    b = 150
  }

  
  div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`
  opacity -= 0.5
  if (opacity < 0.05) {
    opacity = 0.8
  }
}
