
// Promise.all - Utilizado quando quiser executar tudo ao mesmo tempo. Lembre-se : Ele vai esperar até a última promise seja resolvida para mostrar o resultado na tela, que nesse caso é o facebook com tempo de 3s.

const videoYouTube = new Promise(resolve => {  // quando a função não recebe nenhum parametro, você pode fazer dessa forma :

    setTimeout(() => {
        resolve("videos from YouTube")
    }, 2000)
})

const facebook = new Promise((resolve) => {
    
    setTimeout(() => {
        resolve("posts from facebook")
    }, 3000) 
})

Promise.all([videoYouTube, facebook]).then(result => {
    console.log({result})
})


