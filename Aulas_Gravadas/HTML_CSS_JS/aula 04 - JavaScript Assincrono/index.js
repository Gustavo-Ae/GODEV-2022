// const loginUser = (email, password) => {

//     setTimeout(() => {
//         console.log("user logged!")
//         return { email } // também pode ser escrito dessa forma : { email : email }
//     }, 1500)

//     console.log("after setTimeout")

// }

// const user = loginUser("fernando@gmail.com", "123456")

// console.log({user}) 


// --------------------- Utilizando Callbacks : 

const loginUser = (email, password, callback) => {

    setTimeout(() => {
        console.log("user logged!")
        callback({email}) // também pode ser escrito dessa forma : { email : email }
    }, 1500)

    console.log("after setTimeout")

}

const user = loginUser("fernando@gmail.com", "123456", (user) => {
    console.log({user})
})

// console.log({user}) 

