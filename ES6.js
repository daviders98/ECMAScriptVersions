//Arrow functions
globalThis.b='a'
const square = (num)=>{
    this.a='2'
    console.log(this) 
    return num*num
}

console.log(square(5))

function SQ(num){
    console.log(this)
    return num*num
}
console.log(SQ(4))

//Template literals
const hello = 'Hello'
const world = "World"
let ES5Phrase = hello + " "+world+"!"
let ES6Phrase = `${hello} ${world}!`

//Multi-line string
const phrase1 = "This is the first line\n "+"This is the second line"
const phrase2 = `This is the first line
 This is the second line
`
console.log(phrase1)
console.log(phrase2)

//Default values
function sum(num1=0,num2=0){
    return num1+num2
}
console.log(sum(43))
console.log(sum(2,5))
console.log(sum())
//Destructuring
const fruits = ['Apple','Strawberry']
let [a,b]= fruits
console.log(a,fruits[0])
let user = {name:'Molly',age:8}
const {name,age}=user
console.log(name,age)

//Spread operator
const person = {name:'Steven',country:'Lebanon'}
const age2 = 59
let newData = {...person,age:age2}
console.log(newData)

//rest parameters
function add(num,...values){
    console.log(values) // is an array
    values = values.reduce((acc,val)=>{
        acc+=val
        return acc
    },0)
    return num + values
}
console.log(add(4,2,5))

//enhanced object literals
function newUser({user,age,country}){
    return {
        user,// Is the same as user:user
        age,
        country
    }
}

//Promises
const promise = ()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('Result')
        }else{
            reject('Rejected')
        }
    })
}
promise().then((response)=>{
    console.log(response)
}).catch(e=>console.log(e))

//Generator function
function* iterate(array){
    for(let value of array){
        yield value
    }
}

const iterator = iterate(['a','b','c'])
console.log(iterator.next().value)//a
console.log(iterator.next().value)//b
console.log(iterator.next().value)//c
console.log(iterator.next().value)// undefined

function* getId() {
    let id = -1
    while(true){
        id++
        yield id
    }
}
const idGen = getId()
console.log(idGen.next().value)
console.log(idGen.next().value)
console.log(idGen.next().value)

//SETS 
const list = new Set()

list.add('Item1')
list.add('Item2')
list.add('Item3')
list.add('Item2') // Does not add it because is already in there
console.log(list)