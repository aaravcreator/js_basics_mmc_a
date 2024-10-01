

let numbers = [1,2,3,4,5]

console.log(numbers[0]) // will print element at 0 index i.e. 1 
console.log(numbers)

numbers[1] = 44 // modify the element
console.log(numbers)

numbers.push(6) // add element at the end
console.log(numbers)

numbers.pop() // removes the last element
console.log(numbers)

console.log("LENGHT OF Array ", numbers.length)

numbers.shift() // removes the first element and returns it

console.log(numbers)

numbers.unshift(33) // adds element to beginning of array
console.log(numbers)


for(let i= 0; i<5; i++){
    console.log(i)
}
console.log("printing elements")

for (let i=0; i<numbers.length;i++){
    console.log(numbers[i])
}

console.log("using for of")
for (const number of numbers){
    console.log(number)
}







// callback function

function callme(){
    console.log("hello, thanks for calling")
}

function mainFunc(callback){
    console.log("main function started")

    callback()
    console.log("main function ended")

}

mainFunc(callme)


numbers.forEach(
    (number,i)=>{
        console.log("called" , number , "index is " ,i)

    }
)

const doubledNumbers = numbers.map(
    (number)=>{
        return number*2
    }
)
console.log(numbers)
console.log("applying map to double ")
console.log(doubledNumbers)


let meronumbers = [1,5,2,8,10,13,17]

const evenNumbers = meronumbers.filter(
    (number)=>{
        return number%2 == 0
    }
)
console.log(meronumbers)
console.log(evenNumbers)

const sum = meronumbers.reduce(
    (accumulator,currentValue)=>{
        return accumulator + currentValue
})

console.log(sum)


//objects in js
const person = {
    name:"RAM SHARMA",
    age: 25,
    address:"BHADRAPUR",
    gender:"MALE"
}

console.log(person.name)
console.log("Gender is " ,person.gender)

console.log(person['name'])

person['name'] = "HARI KUMAR"
console.log(person['name'])


const productElement = document.getElementById('products')

const productData = [
    {
        id:1,
        name:"Apple",
        price:100,
        quantity:"20 Kg",
    },
    {
        id:2,
        name:"Grapes",
        price:200,
        quantity:"20 Kg",
    }
]

let html = ""
productData.forEach(
    (product)=>{

        let productHTML = `
        <div class="card">
            <h1>${product.name}</h1>
            <h2>Price : Rs ${product.price}</h2>
            <h2>Stock : ${product.quantity}</h2>
      
        </div>
        
        `
        console.log(productHTML)
        html = html + productHTML

    }
)


productElement.innerHTML = html












