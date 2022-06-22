const express = require("express")

const UserModel = require("../src/models/user.model")

const app = express()

app.use(express.json())

const port = 8080

app.get("/users", async (req, res) => {  //Pegar os usuários
    try{
        const users = await UserModel.find({})

        res.status(200).json(users)

    }catch(error){
        return res.status(500).send(error.message)
    }
})

app.get("/users/:id", async(req, res) => { 
    try{
        const id = req.params.id

        const user = await UserModel.findById(id)

        return res.status(200).json(user)
    }catch(error){
        return res.status(500).send(error.message)
    }
})  

app.post("/users", async (req, res) => {  //Criar os usuário
    try{
        const user = await UserModel.create(req.body)

        res.status(201).json(user)
    }catch(error){
        res.status(500).send(error.message)
    }

})

app.patch("/users/:id", async(req,res) => {
    try{
        const id = req.params.id

        const user = await UserModel.findByIdAndUpdate(id, req.body, {new : true})  // findByIdAndUpdate() não retorna o registro atualizado então utiliza o {new : true} --> para retornar com os registros atualizados.

        res.status(200).json(user)
    }catch(error){  
        res.status(500).send(error.message)
    }
})

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`))

