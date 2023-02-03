// importar la función sum del archivo app.js
const {
    sum
} = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function() {
    // importo la funcion desde app.js
    const {
        fromEuroToDollar
    } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

// Esta es la funcion para comprobar de dolar a yen
test("One dollar should be 106.5 yen", function() {

    const {
        fromDollarToYen
    } = require('./app.js')


    expect(fromDollarToYen(3.5)).toBe(372.75);
})

// Esta es la funcion para comprobar de yen a pound
test("One yen should be 0.006 pound", function() {

    const {
        fromYenToPound
    } = require('./app.js')


    expect(fromYenToPound(3.5)).toBe(0.021);
})