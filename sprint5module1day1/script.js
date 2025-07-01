console.log(window)

const heading = document.getElementById("main-heading");

console.log(heading)

heading.textContent = "The DOM Has Changed"

//document.getElementByID 

const btn1 = document.getElementById("btn-1");
console.log(btn1)

//.getElementsByClassName
//.getElementsByTagName

const infoParagraphs = document.getElementsByClassName("info");

console.log(infoParagraphs);

const allButtons = document.getElementsByTagName("button");

console.log(allButtons)

//.querySelector()

const firstInfo = document.querySelector(".info");

console.log(firstInfo)

const allInfo = document.querySelectorAll(".info")

console.log(allInfo)


//.forEach()

allInfo.forEach(function(para) {
    console.log(para.textContent)
    para.style.color="orange"
})

