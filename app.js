// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// De dolar a Yen 
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 106.5;
    return valueInYen;
}

// de Yen a pound
const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.006;
    return valueInPound;
}

// solo un registro en consola para nosotros.
console.log(sum(7, 3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};