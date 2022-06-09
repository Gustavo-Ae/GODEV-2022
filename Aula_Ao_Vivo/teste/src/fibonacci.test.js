const fibonacci = require("../src/fibonacci")

describe("Verificar a função que gera a serie de Fibonacci", () => {

    test("Passou o valor 2, deve retornar 0 1", () => {
        expect(fibonacci(2)).toEqual("0 1")
    })

    test("Passou o valor 3, deve retornar 0 1 1", () => {
        expect(fibonacci(3)).toEqual("0 1 1")
    })

    test("Passou o valor 4, deve retornar 0 1 1 2", () => {
        expect(fibonacci(4)).toEqual("0 1 1 2")
    })

    test("Passou o valor 5, deve retornar 0 1 1 2 3", () => {
        expect(fibonacci(5)).toEqual("0 1 1 2 3")
    })

    test("Passou o valor 6, deve retornar 0 1 1 2 3 5", () => {
        expect(fibonacci(6)).toEqual("0 1 1 2 3 5")
    })
})