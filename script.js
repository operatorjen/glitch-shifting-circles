const wrapper = document.querySelector('#wrapper')
const overlay = document.querySelector('#overlay')

let opacity = 1.0
let r = 255
let g = 255
let b = 255
let a = 1.0

for (let i = 0; i < 255; i++) {
  const div = document.createElement('div')
  div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`
  wrapper.appendChild(div)
  
  if (r < 1) {
    r = 255 
    g -= 1
    b -= 1
  }
  
  if (g < 1) {
    g = 255 
    b -= 1
    r -= 1
  }
  
  if (b < 1) {
    b = 255
    g -= 1
  }
  
  r -= 1
}

for (let i = 0; i < 255; i++) {
  const div = document.createElement('div')
  div.style.opacity = opacity
  overlay.appendChild(div)
  
  div.style.backgroundColor = `rgba`
  opacity -= 0.01
  if (opacity < 0.05) {
    opacity = 1.0 
  }
}
