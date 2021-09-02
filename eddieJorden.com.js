class Person {
    constructor(name) {
        this.name = name;
        
    }
    luckyNumber() {
        const randomNumber = Math.floor(Math.random() * 9) + 1
        console.log(randomNumber)
        return randomNumber
    } 
} 
const eddie = new Person("eddie")
console.log(eddie)

const luckyNumber = eddie.luckyNumber()

let userName = ''

    // default input field text
document.getElementById('user-input').value = 'name'

    // should console.log what ever was entered in the input field with the same id
const getVal = () => {
    userName = document.getElementById('user-input').value;
    console.log('userName', userName)
    document.getElementById('greeting').innerText = `hello ${userName} your lucky number is ${luckyNumber}`
    return userName
}

// lucky number render
document.getElementById('sub-section').innerText = `${luckyNumber}`

// roll new lucky number button and render with console.log as well
const onClick = () => {
    let newLuckyNumber = eddie.luckyNumber()
    document.getElementById('sub-section').innerText = `${newLuckyNumber}`
    document.getElementById('greeting').innerText = `oh... it looks as though you didn't like the number you were given,  thats ok ${userName} your new lucky number is ${newLuckyNumber}`
    console.log("luckyNumber()", newLuckyNumber)
}
