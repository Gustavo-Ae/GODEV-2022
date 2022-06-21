// const { Person } = require("./person")

// const person = new Person("Gustavo")

// //require("./modules/fs")


const dotenv = require("dotenv")
const connectToDatabase = require("./src/database/connect")

dotenv.config()

connectToDatabase()

require("./modules/express")




