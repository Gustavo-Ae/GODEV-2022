const { default: axios } = require("axios")

test ("Deve obter o status 200", async function(){
    const response = await axios(
        {
            url:"http://localhost:3000/produtos",
            method:"get"
        }
    )


    const status = response.status;

    expect(status).toEqual(200)

    console.log(status)

});

test ("Deve obter os produtos do banco de dados", async function(){
    const response = await axios(
        {
            url:"http://localhost:3000/produtos",
            method:"get"
        }
    )

    const resposta = response.data;

    expect(resposta).toHaveLength(3)  

    console.log(resposta)

});

test ("O preço do terceiro produto deve ser R$2.99", async function(){

    const response = await axios(
        {
            url:"http://localhost:3000/produtos",
            method:"get"
        }
    )

    const preco = response.data[2].preco;

    expect(preco).toBe("R$ 2,99")  

    console.log(preco)

});


test.only ('Deve recuperar um registro no banco de dados a partir de um id', async function(){
    const response = await axios(
        {
            url: 'http://localhost:3000/produtos/5',
            method: 'get'
        }
    );
    const resposta = response.data;
    const id = resposta[0].id;
    const descricao = resposta[0].descricao;
    const preco = resposta[0].preco;
    const tipo_produto = resposta[0].tipo_produto;

    expect(id).toBe(5);
    expect(descricao).toBe('Descrição produto 005');
    expect(preco).toBe('R$ 5,99');
    expect(tipo_produto).toBe('Tipo de produto 005');
    
});

test ('Deve inserir um registro no banco de dados', async function(){});

test ('Deve alterar um registro no banco de dados a partir de um id', async function(){});

test ('Deve apagar um registro no banco de dados a partir de um id', async function(){});