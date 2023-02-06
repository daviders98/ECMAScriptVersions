//Regex
const regex = /(\d{4})-(\d{2})-(\d{2})/
const matchers = regex.exec('2022-04-22')
console.table(matchers)

//Spread operator update
const user = {
    username:'david100',
    age:20,
    country:'Slovenia'
}
const {username,...values} = user
console.log(username)
console.log(values)

//Promise finally
const promise = ()=>{
    return new Promise((resolve,reject)=>{
        if(false){
            resolve('Resolved promise')
        }else{
            reject('Rejected promise')
        }
    })
}
promise().then((response)=>{
    console.log(response)
}).catch(e=>console.log(e))
.finally(()=>{
    console.log('Finally')
})

//async generator
async function* asyncGenerator(){
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
    yield await Promise.resolve(4)
}

const instance = asyncGenerator()
instance.next().then((response)=>{
    console.log(response.value)
})
instance.next().then((response)=>{
    console.log(response.value)
})
instance.next().then((response)=>{
    console.log(response.value)
})
instance.next().then((response)=>{
    console.log(response.value)
})
console.log('Text')

//For
async function arrayOfNames(array){
    for await(let value of array){
        console.log(value)
    }
}
const names = arrayOfNames(['David','Alex','Flint'])
console.log('After')
