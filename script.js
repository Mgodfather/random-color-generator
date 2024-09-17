const hexContainer = document.querySelector('.hex-section')
const rgbContainer = document.querySelector('.rgb-section')
const redInput = document.querySelector('#red-value')
const greenInput = document.querySelector('#green-value')
const blueInput = document.querySelector('#blue-value')
let redColor = document.querySelector('.red-color')
let greenColor = document.querySelector('.green-color')
let blueColor = document.querySelector('.blue-color')
let rgbColorBtn = document.querySelector('.rgb-btn')
let hexColorBtn = document.querySelector('.hex-btn')
let hexColorValue = document.querySelector('.hex-color')

let redValue = 0;
let greenValue = 0;
let blueValue = 0;

redColor.innerHTML = redValue
greenColor.innerHTML = greenValue
blueColor.innerHTML = blueValue

redInput.addEventListener('input', (e) => {
    redValue = Math.round(e.target.value * 2.55)
    redColor.innerHTML = redValue
})

greenInput.addEventListener('input', (e) => {
    greenValue = Math.round(e.target.value * 2.55)
    greenColor.innerHTML = greenValue
})
blueInput.addEventListener('input', (e) => {
    blueValue = Math.round(e.target.value * 2.55)
    blueColor.innerHTML = blueValue

})

rgbColorBtn.addEventListener('click', (e) => {
rgbContainer.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`


if (redValue < 80 && greenValue < 80 && blueValue < 80) {
    rgbContainer.style.color = 'white'
} else {
    rgbContainer.style.color = ''
}
})

let letters = '0123456789ABCDEF'
let hexColor = '#'

hexColorBtn.addEventListener('click', () => {
    for (let i = 0; i < 6; i++) {
        hexColor += letters[Math.floor(Math.random() * 16)]
    }
    hexColorValue.innerHTML = hexColor
    hexContainer.style.backgroundColor = hexColor
    hexColor = '#'
})