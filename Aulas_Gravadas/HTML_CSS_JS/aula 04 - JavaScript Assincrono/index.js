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

const loginUser = (email, password, onSuccess, onError) => {

    setTimeout(() => {

        const error = true

        if(error){
            return onError(new Error("error in login!"))
        }

        console.log("user logged!")
        onSuccess({email})
    }, 1500)

    console.log("after setTimeout")

}

const user = loginUser("fernando@gmail.com", "123456", (user) => {
    console.log({user})
}, (error) => {
    console.log({error})
})

// console.log({user}) 

