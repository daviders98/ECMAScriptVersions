//Optional chaining
const users = {
    david:{
        age:40
    },
    paula:{
        age:45
    }
}

// console.log(users.david.location.country) // Throws error
console.log(users?.david?.location?.country) // Returns undefined

// Big int
const bigInt = 192938298127581275812758278738n
console.log(bigInt)
const otherBigInt = BigInt(192938298127581275812758278738)
console.log(otherBigInt)

//nullish
const newNumber = 4
const value = newNumber ?? 5
console.log(value)
const num = null
const val = num ?? 5
console.log(val)

//All settled
const promise1 = new Promise((resolve,reject)=>{
    reject('Reject')
})
const promise2 = new Promise((resolve,reject)=>{
    reject('Resolve 1')
})
const promise3 = new Promise((resolve,reject)=>{
    reject('Resolve 2')
})

Promise.allSettled([promise1,promise2,promise3]).then(res=>{
    console.log(res)
})

Promise.all([promise1,promise2,promise3]).then(res=>{
    console.log('INSIDE ALL',res)
}).catch((e)=>{
    console.log('inside all',e)
})

//Global this
//console.log(window)//browser
console.log(global)//node
//console.log(self)//web worker
console.log(globalThis)//any

//Match all
const regex = /\b(Apple)+\b/g;

const fruits = 'Apple,Banana, Kiwi, Apple, Orange, Grapes'
for(let result of fruits.matchAll(regex)){
    console.log(result)
}