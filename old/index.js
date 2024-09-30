const hero = document.getElementById("heading")

console.log(hero.textContent)
hero.textContent = "THIS IS UPDATED BY JS"

const number_a = document.getElementById('num_a')
const number_b = document.getElementById('num_b')


let result = parseInt(number_a.value) + parseInt(number_b.value)
console.log("The sum is ",result)

const resultElement = document.getElementById('result')
resultElement.textContent = `Result is ${result}`


const calc_sum = document.getElementById('calc_sum')

calc_sum.addEventListener("click"  ,  
    function myFunc()  {
                        console.log('Buuton clicked')
                        }
)
const calc_mul = document.querySelector('#calc_mul')




calc_mul.addEventListener('click',()=>{

const number_a = document.getElementById('num_a')
const number_b = document.getElementById('num_b')


let result = parseInt(number_a.value) * parseInt(number_b.value)
console.log("The sum is ",result)

const resultElement = document.getElementById('result')
resultElement.textContent = `Result is ${result}`

})






console.log(number_a.value)






console.log("Hello World")

// alert("THIS IS NOT PERMITTED")

console.log("BELOW ALERT")

var a = 'abc'
var b = '10'

a = '50'  

var a = '20' // redeclaration of var



let c = '20'
let d = '50'

c = "1000"
// let c = "2000"  // not allowed

const marks = 100
marks = 200  // not allowed


console.log(c,d)



console.log(typeof a)
console.log(typeof b)
console.log(parseInt(a) + parseInt(b))















