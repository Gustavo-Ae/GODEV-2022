var soma = require("./calculadora")

describe("calculadora", () => {

    test("Quando informar os números 1 e 1 deve retornar 2", () => {
        expect(soma(1,1)).toEqual(2)
    })

    test("Quando informar os números 1 e 2 deve retornar 3", () => {
        expect(soma(1,2)).toEqual(3)
    })
})