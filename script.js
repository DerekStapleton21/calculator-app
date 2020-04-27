
const calculatorObject = document.querySelector("body")


document.querySelector("#add-btn").addEventListener("click", function(){
    // console.log("you clicked this button")

    const x = parseInt(document.querySelector("#box-one").value)
    const y = parseInt(document.querySelector("#box-two").value)
    const z = x + y;

    
    calculatorObject.innerHTML += `<div>
    ${x}+${y}=${z}</div>`
})

document.querySelector("#sub-btn").addEventListener("click", function(){
    // console.log("you click me")
    const x = parseInt(document.querySelector("#box-one").value)
    const y = parseInt(document.querySelector("#box-two").value)
    const z = x - y;

    calculatorObject.innerHTML += `<div>${x}-${y}=${z}</div>`

})

document.querySelector("#mult-btn").addEventListener("click", function(){
    // console.log("you click me")
    const x = parseInt(document.querySelector("#box-one").value)
    const y = parseInt(document.querySelector("#box-two").value)
    const z = x * y;

    calculatorObject.innerHTML += `<div>${x}x${y}=${z}</div>`

})

document.querySelector("#div-btn").addEventListener("click", function(){
    // console.log("you click me")
    const x = parseInt(document.querySelector("#box-one").value)
    const y = parseInt(document.querySelector("#box-two").value)
    const z = x / y;

    calculatorObject.innerHTML += `<div>${x}/${y}=${z}</div>`

})
