// define a function multiplyByNineFifths(number)
console.log("To convert a °C number into a °F you have to use this formula:>>>")
const multiplyByNineFifths = x => {
    //return number*(9/5)
    return (x * 9 / 5);
}
// define a function getFahrenheit(celsius)
const getFahrenheit = celsius => {
    // return multiplyByNineFifths(celsius) + 32;
    return (multiplyByNineFifths(celsius) + 32);
}
// call getFahrenheit();
console.log(`${getFahrenheit(5 / 9)}`);
// do the same thing starting from Fahrenheit to Celsius
console.log("To conver a °F number into °C use this formula:>>>")
const substractBythirtytwo = y => {
    return (y - 32);
}
const getCelsius = fahrenheit => {
    return (substractBythirtytwo(fahrenheit) * 5 / 9);
}
console.log(`${getCelsius(273)}`);