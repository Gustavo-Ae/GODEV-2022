
// --------------------- Utilizando Promises com Async/Await  : 

//

const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false

        if(error){
            reject(new Error("error in login!"))
        }

        console.log("user logged!")
        resolve({email})
    })
}

const getUserVideos = (email) => {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getUserVideos")
            resolve(["video1", "video2", "video3"])
        }, 2000)
    })
} 

const getVideoDetails = (video) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getVideoDetails")
            resolve({title:"video title"})
        },2500)
    })

}

const displayUser = async() => {
    try{
        const user = await loginUser("fernando@gmail.com", "123456") //Await - vai esperar a promise loginUser() ser resolvida para ae sim, ele ir para a próxima linha.
        const videos = await getUserVideos(user.email)
        const videosDetails = await getVideoDetails(videos[0])
        console.log({videosDetails})
    }catch(error){
        console.log({error})
    }
}

displayUser()
