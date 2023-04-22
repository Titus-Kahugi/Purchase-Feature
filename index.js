// Variables Practice

// let firstName = "Titus"
// let secondName = "Kahugi"

// let fullName = firstName + " " + secondName
// console.log(fullName)



//Concatenate two strings in a function

// function greetings() {
//     let name = "Linda"
//     let greetings = "Hi there"

//     console.log(greetings + ", " + name + "!")
// }
// greetings()



//Incrementing and Decrementing

// let myPoints = 3

// function add3Points() {
//     myPoints += 3 
// }

// function remove1Point() {
//     myPoints -= 1
// }

//  add3Points()
//  add3Points()
//  remove1Point()
//  remove1Point()
//  add3Points()

//  console.log(myPoints)


//Strings and Numbers

// console.log("2" + 2) 
// console.log(11 + 7) 
// console.log(6 + "5") 
// console.log("My points: " + 5 + 9) 
// console.log(2 + 2) 
// console.log("11" + "14") 



//Rendering an error message
let errorEl = document.getElementById("error")

function purchaseError() {
    errorEl.textContent = "Something went wrong, please try again"
}
