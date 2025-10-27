// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound 

const convertBttn = document.getElementById("convert-bttn")
const inputEl = document.getElementById("input-el")
const meterFeet = document.getElementById("meter-feet")
const litersGallons = document.getElementById("liters-gallons")
const kilogramsPounds = document.getElementById("kilograms-pounds")

let inputValue= ""

let metersToFeet = ""
let litersToGallons = ""
let kilogramsToPounds = ""

let feetToMeters = ""
let gallonsToLiters = ""
let poundsToKilograms = ""


convertBttn.addEventListener("click", function(){
    
    inputValue = Number(inputEl.value)
    metersToFeet = inputValue * 3.281
    litersToGallons = inputValue * 0.264
    kilogramsToPounds = inputValue * 2.204

    feetToMeters = inputValue / 3.281
    gallonsToLiters = inputValue / 0.264
    poundsToKilograms = inputValue /2.204
    
    meterFeet.textContent= `${inputValue} meters = ${metersToFeet.toFixed(3)} feet | ${inputValue} feet = ${feetToMeters.toFixed(3)} meters`
    litersGallons.textContent= `${inputValue} liters = ${litersToGallons.toFixed(3)} gallons | ${inputValue} gallons = ${gallonsToLiters.toFixed(3)} liters`
    kilogramsPounds.textContent= `${inputValue} kilos = ${kilogramsToPounds.toFixed(3)} pounds | ${inputValue} pounds = ${poundsToKilograms.toFixed(3)} kilos`
})
