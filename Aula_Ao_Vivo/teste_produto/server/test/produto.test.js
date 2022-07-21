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

    expect(resposta).toHaveLength(2)  

    console.log(resposta)

});

test ("O preço do terceiro produto deve ser R$2.99", async function(){

    const response = await axios(
        {
            url:"http://localhost:3000/produtos",
            method:"get"
        }
    )

    const preco = response.data[1].preco;

    expect(preco).toBe("R$ 2,99")  

    console.log(preco)

});


test ('Deve recuperar um registro no banco de dados a partir de um id', async function(){
    const response = await axios(
        {
            url: 'http://localhost:3000/produtos/1',
            method: 'get'
        }
    );
    const resposta = response.data;
    const id = resposta[0].id;
    const descricao = resposta[0].descricao;
    const preco = resposta[0].preco;
    const tipo_produto = resposta[0].tipo_produto;

    expect(id).toBe(1);
    expect(descricao).toBe('Descricao Produto 001');
    expect(preco).toBe('R$ 1,99');
    expect(tipo_produto).toBe('Tipo de produto 001');
    
});

test('Deve inserir um registro no banco de dados', async function(){

    const novoProduto = {
        "descricao": "Descricao Produto 003",
        "preco": "R$ 3,99",
        "tipo_produto": "Tipo de produto 003"
    }

    const response = await axios(
        {
            url: 'http://localhost:3000/produtos',
            method: 'post',
            data: novoProduto
        }
    );

    const resposta = response.data;
    const id = resposta.id;
    const descricao = resposta.descricao;
    const preco = resposta.preco;
    const tipo_produto = resposta.tipo_produto;

    expect(id).toBe(3);
    expect(descricao).toBe('Descricao Produto 003');
    expect(preco).toBe('R$ 3,99');
    expect(tipo_produto).toBe('Tipo de produto 003');

});

test.only ('Deve alterar um registro no banco de dados a partir de um id', async function(){

    const updateProduto = {
        "id": "3",
        "descricao": "Nova Descricao Produto 003",
        "preco": "R$ 3,33",
        "tipo_produto": "Novo Tipo de produto 003"
    }


    const response = await axios(
        {
            url: `http://localhost:3000/produtos/${updateProduto.id}`,
            method: 'put',
            data: updateProduto
        }
    );

    const resposta = response.data;
    const id = resposta.id;
    const descricao = resposta.descricao;
    const preco = resposta.preco;
    const tipo_produto = resposta.tipo_produto;

    expect(id).toBe(3);
    expect(descricao).toBe('Nova Descricao Produto 003');
    expect(preco).toBe('R$ 3,33');
    expect(tipo_produto).toBe('Novo Tipo de produto 003');

});

test ('Deve apagar um registro no banco de dados a partir de um id', async function(){});