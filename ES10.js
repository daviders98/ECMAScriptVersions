//FLAT
const array = [1,2,5,2,7,[5,8,3],[5,[1]]]
console.log(array.flat(3))

//Flat map first maps then flats
const newArray = [1,5,7]
console.log(newArray.flatMap((v)=>{
return [v,v*5]
}))

//trim-start trim end
const hello = '    Hello World!!!!    '
console.log(hello.trimStart()+'a')
console.log(hello.trimEnd()+'a')
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