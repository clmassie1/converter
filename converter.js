console.log("hi");  
let input = document.getElementById("userInput");
let output = 0;
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let button = document.getElementById("submitTemperature");
let celSent = "Degrees Celsius";
let fahSent = "Degrees Fahrenheit";
let submit = document.getElementById("submitTemperature");
let temperatureOutput = document.getElementById("convertedTemp");
let result = 0;
let celOutput = 0;
let fahOutput = 0;
let celColor = 0;
document.getElementById("submitTemperature").addEventListener("click", function(){
    convertTemp();
   
    temperatureOutput.innerHTML = output;
    
   
   
});
function convertTemp(){

    if (document.getElementById("celsius").checked === true) {
        output = ((input.value * 1.8) + 32);
        
        if(output >= 32) { 
          temperatureOutput.style.color = "red";
        } if (output <= 0){
          temperatureOutput.style.color = "blue";
        } if (output < 32 && output > 0){
          temperatureOutput.style.color = "green"
        }

    } else if (document.getElementById("fahrenheit").checked === true) {
        output = ((input.value - 32) / 1.8);
      
        if(output >= 90) { 
          temperatureOutput.style.color = "red";
        } else if (output <= 32){
          temperatureOutput.style.color = "blue";
        } else if (output < 90 && output > 32){
          temperatureOutput.style.color = "green"
        }

    }
 }