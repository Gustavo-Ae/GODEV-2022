// Objeto

class Person{
    constructor(firstName, LastName, age) {
        this.firstName = firstName
        this.LastName = LastName
        this.age = age
    }
    getFullName(){ //Isso é um método
        console.log(`${this.firstName} ${this.LastName}`)
    }
    //Podemos criar metodos estaticos(static) para não precisar instanciar a classe , vai ser utilizado quando não precisar utilizar as caracteristicas do objetos :

    static speak(){
        console.log("Hello World!")
    }

}

const person = new Person("Jane", "Doe", 40) //Aqui estamos instanciando(criando) uma classe e isso é um Objeto.

console.log(person)

console.log(person.getFullName())

Person.speak()  // Utiliza assim para chamar métodos estáticos(static)

//Herança - Objeto

class Animal{
    constructor(name) {
        this.name = name
    }
    speak(){
        console.log(`${this.name} made some noise!`)
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)   //Chama o construtor da classe pai
    }

    speak(){
        console.log(`${this.name} barked!`)
    }
}

// const animal = new Animal("Simba")

const dog = new Dog("Bob")

dog.speak()



