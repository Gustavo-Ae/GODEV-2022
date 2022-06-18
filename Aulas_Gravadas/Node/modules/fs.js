const fs = require("fs")
const path = require("path")

// Criar uma pasta

// fs.mkdir(path.join(__dirname, "/test"), (error) => { // Vai pegar a pasta modules e adicionar o arquivo chamado test
//     if(error){ // vai ser true quando você tenta rodar o sistema para criar uma pasta que já existe
//         return console.log("Erro: ", error)
//     }

//     console.log("Pasta criada com sucesso!")
// })  

// Criar um arquivo 

fs.writeFile(path.join(__dirname, "/test", "test.txt"), "Hello Node!", (error) => { // Criar a pasta teste com o test.txt dentro , no test.txt vai escrever "Hello Node!". 
        if(error){
            return console.log("Erro: ", error)
        }

        console.log("Arquivo criado com sucesso!")

        // Adicionar á um arquivo :

        fs.appendFile(path.join(__dirname, "/test", "test.txt"), "Hello World!\n", (error) => {
                if(error){
                    console.log("Erro: ", error)
                }

                console.log("Arquivo modificado com sucesso!")
            }
        );

                // Ler arquivo

        fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf8", (error, data) => {
                if(error){
                    return console.log("Erro: ", error)
                }

                console.log(data)
            }
        )
    }
)



