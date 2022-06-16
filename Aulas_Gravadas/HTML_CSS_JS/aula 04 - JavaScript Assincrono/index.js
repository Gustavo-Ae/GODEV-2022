
// --------------------- Utilizando Promises : 

const loginUserPromise = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = true

        if(error){
            reject(new Error("error in login!"))
        }

        console.log("user logged!")
        resolve({email})
    })
}

loginUserPromise("fernando@gmail.com", "123456").then((user) => {
    console.log({user})
}).catch((error) => {
    console.log({error})
})

