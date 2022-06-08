const fatorial = require("./fatorial")

describe("Verificando a função que calcula o fatorial de um número inteiro", () => {

    test("Passou o valor 0, deve retornar 1", () => {
        expect(fatorial(0)).toEqual(1)
    })

    test("Passou o valor 1, deve retornar 1", () => {
        expect(fatorial(1)).toEqual(1)
    })

    test("Passou o valor 2, deve retornar 2", () => {
        expect(fatorial(2)).toEqual(2)
    })

    test("Passou o valor 3, deve retornar 6", () => {
        expect(fatorial(3)).toEqual(6)
    })

    test("Passou o valor 4, deve retornar 24", () => {
        expect(fatorial(4)).toEqual(24)
    })

    test("Passou o valor 6, deve retornar 720", () => {
        expect(fatorial(6)).toEqual(720)
    })

    test("Passou o valor 7, deve retornar 5040", () => {
        expect(fatorial(7)).toEqual(5040)
    })
})