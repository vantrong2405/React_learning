// Array
let people : number[] = []
people.push(1)

// Object
let info : {
    name : string,
    address ?: string
} = {
    name : '',
}

info.name = 'Doan vo van trong'
info.address = 'Nam định'

// Object array
let company : {
    nameCompany : string 
    ageCompany : number
} [] = []

company.push({
    nameCompany : 'Công ty',
    ageCompany : 19
})

// Function
const sum = (a : number , b :number) : number=>  a + b 
 
sum(1,2)


const sub : (a : number , b : number) => number =  (a : number , b : number) => a-b


// union

let price : string | number | boolean
price = 10
price = 'nnnn'
price = false

//Nó chỉ có 1 trong 2 loại
let body : {name : string} | {firstName : string} = {
    name : '',
    // firstName : ''
}
body.name = '123'
// body.firstName = 'John'; 


// enum

enum Size {
    S , M , L , XL
}

let size = Size.S


// interface và type
interface State {
    name : string,
    age : number
}

interface State {
    address : string
}



let state :State ={
    name : '',
    age : 123,
    address : 'quảng nam'
}


// generic type
const handleClick = <Type>(value : Type) => value 
const value = 100
handleClick<string>('123')