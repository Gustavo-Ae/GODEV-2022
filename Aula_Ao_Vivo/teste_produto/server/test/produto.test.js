const { default: axios } = require("axios")
const axio = require("axios")


test ("Deve obter os produtos do banco de dados", async function(){
    const response = await axios(
        {
            url:"http://localhost:3000/produtos",
            method:"get"
        }
    )

    const resposta = response.data

    expect(resposta).toBe("Methodo GET = route: /produtos")

})