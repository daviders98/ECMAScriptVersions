//numeric separators
const value = 100_000_000_000
console.log(value)

//replace all
const string = 'Some random text to be replaced'
const replacedString = string.replaceAll('e',3)
console.log(replacedString)

//Promise any
const promise1 = new Promise((resolve,reject)=>{
    reject('Reject')
})
const promise2 = new Promise((resolve,reject)=>{
    resolve('Resolve 1')
})
const promise3 = new Promise((resolve,reject)=>{
    resolve('Resolve 2')
})

Promise.any([promise1,promise2,promise3])
.then((response)=>{
console.log(response)
})

//Private
class user{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    #speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
    get #age(){
        return this.age
    }
    set #age(newAge){ //private 
        this.age = newAge
    }
}