function displayName(input){
    console.log(
        `Hello, ${input}`);
}

displayName('Kalpana');

function convertToCelsius(tempFH){
    let tempCelsius = (tempFH - 32) * 5/9;
    return tempCelsius;
}

function convertToFH(tempCS){
    let tempFH = tempCS * 9/5 + 32;
    return tempFH;
}

console.log(`212 degrees F is ${convertToCelsius(212)} degrees Celsius`);
console.log(`60 degrees C is ${convertToFH(60)} degrees Farenheit`);

