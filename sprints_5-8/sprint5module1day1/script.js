console.log(window)

// const heading = document.getElementById("main-heading");
const heading = document.getElementById("main-heading")

// console.log(heading)
console.log(heading)


// heading.textContent = "The DOM Has Changed"
heading.textContent = "New Heading"

// //document.getElementByID 

// const btn1 = document.getElementById("btn-1");
// console.log(btn1)
const btn1 = document.getElementById("btn-1")
console.log(btn1)
// //.getElementsByClassName
// //.getElementsByTagName

// const infoParagraphs = document.getElementsByClassName("info");
const infoParagraphs = document.getElementsByClassName("info")
console.log(infoParagraphs);

// const allButtons = document.getElementsByTagName("button");
const allButtons = document.getElementsByTagName("button")
console.log(allButtons)

// //.querySelector()

// const firstInfo = document.querySelector(".info");
const firstInfo = document.querySelector(".info")

console.log(firstInfo)

// const allInfo = document.querySelectorAll(".info")
const allInfo = document.querySelectorAll(".info")

console.log(allInfo)

// //.forEach()
// allInfo.forEach(function(para) {
//     console.log(para.textContent)
//     para.style.color="orange"
// })

// .forEach()

allInfo.forEach(function(para){
    console.log(para.textContent)
    para.style.color="blue"
})
    
