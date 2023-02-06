//catch
try{
    hello()
}catch(e){
    console.log(e)
}

try{
    anotherNONExistentFunction()
}catch{//Optional to use argument
    console.log('This resulted in an error')
}

const entries = new Map([['name','David'],['age',20]])
console.log(entries)
console.log(Object.fromEntries(entries))
console.log(Object.entries(Object.fromEntries(entries)))