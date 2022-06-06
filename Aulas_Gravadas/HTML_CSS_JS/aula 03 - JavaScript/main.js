// Eventos 

const submitButton = document.querySelector("#submit-button")

const nameInput = document.querySelector("#name")

const emailInput = document.querySelector("#email")


submitButton.addEventListener("click", function(event){
    event.preventDefault() //Com essa opção , o formulário não vai fazer o comportamento padrão de enviar os dados para o servidor 
    
    const nameValue = nameInput.value

    console.log(nameValue)
})

nameInput.addEventListener("change", function(e){
    console.log(e.target.value)
})



