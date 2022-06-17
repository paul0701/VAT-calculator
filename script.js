

//This changes the <p> with id="conversion-value" to a variable JS can understand "conversionValue" (in camelCase)
let conversionValueFive = document.getElementById("conversion-value-five")
let conversionValueSeventeen = document.getElementById("conversion-value-seventeen")
let conversionValueTwenty = document.getElementById("conversion-value-twenty")
//End of variable assignment code

function converter(iv) 

//Here we invoke the converter(this.value) function from the input tag

{
let feetNum=(iv * 3.28).toFixed(2)
conversionValueFeet.textContent=iv + " metre/s = " + feetNum + " foot | " + feetNum + " foot = " + iv + " metre/s"
  
//The above code allows JS to concatenate the output for the data

let gallonsNum=(iv * .22).toFixed(2)
conversionValueGallons.textContent=iv + " litre/s = " + gallonsNum + " gallons | " + gallonsNum + " gallons = " + iv + " litres/s"
  
let poundsNum=(iv * 2.2).toFixed(2)
conversionValuePounds.textContent=iv + " kilogram/s = " + poundsNum + " pounds | " + poundsNum + " pounds = " + iv + " kilogram/s"
  
  

//Then we output the iv*" " in the converted "conversion-value" <p> tag
 
}

