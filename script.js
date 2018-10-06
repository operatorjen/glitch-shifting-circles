const wrapper = document.querySelector('#wrapper')
const overlay = document.querySelector('#overlay')

let opacity = 0.8
let r = 55
let g = 255
let b = 255
let a = 1.0

for (let i = 0; i < 500; i++) {
  const div = document.createElement('div')
  div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`
  wrapper.appendChild(div)
  
  if (r < 1) {
    r = 155 
  }
  
  if (g < 1) {
    g = 255 
  }
  
  if (b < 1) {
    b = 155
  }
  
  r -= 5
  
  if (r < 230) {
    g -= 2
    b -= 1
  }
  
  a -= 0.01
  
  if (a < 0.1) {
    a = 1.0
  }
}

r = 215
g = 20
b = 250

for (let i = 0; i < 100; i++) {
  const div = document.createElement('div')
  div.style.opacity = opacity
  overlay.appendChild(div)
  
  r -= 1
  g -= 3
  b -= 5
  
  if (r < 1) {
    r = 155
  }
  
  if (g < 1) {  
    g = 100
  }
  
  if (b < 1) {
    b = 150
  }

  
  div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`
  opacity -= 0.05
  if (opacity < 0.05) {
    opacity = 0.8
  }
}
