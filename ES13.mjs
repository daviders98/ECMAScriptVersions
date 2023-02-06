const array = ['ONE','TWO','THREE','FOUR','FIVE']

console.log(array[array.length-1])
console.log(array.at(-1))

//Top level await
import fetch from 'node-fetch'

const response = await fetch('https://api.escuelajs.co/api/v1/products')
const products = await response.json()

export {products}