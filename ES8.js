//Object entries
const obj = {
    name:'George',
    age:49,
    country:'Iceland'
}

console.log(Object.entries(obj)) //returns array of arrays of key values
//Object values
console.log(Object.values(obj)) //doesnt return keys just values

//String padding
const string = 'Hello'
console.log(string.padStart(7,'NEWTEXT'))
//NEHello
console.log(string.padEnd(string.length+1,'_'))
//Hello_

//Trailling commas
const array = [23,42,63,17,,,34]
console.log(array)
console.log(array.length) //Theres empty items

//Async await
const asyncFn = ()=>{
    return new Promise((resolve,reject)=>{
        (true) ? setTimeout(()=>{
            resolve('ASYNC RESOLVED')
        },2500) :
        reject(new Error('Error in async'))
    })
}

const asyncCall= async ()=>{
    const response = await asyncFn()
    console.log(response)
    console.log('After response')
}

console.log('BEFORE')
asyncCall()
console.log('AFTER')