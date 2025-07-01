const heading = document.getElementById('main-heading');
const description = document.querySelector('.description');
const changeTextBtn = document.getElementById('change-text-btn');
const addItemBtn = document.getElementById('add-item-btn');
const itemList = document.getElementById('item-list');
const container = document.getElementById('new-element-container');
const learnMoreLink = document.getElementById('learn-more-link');
const sampleImage = document.getElementById('sample-image');
const changeImageBtn = document.getElementById('change-image-btn');

//change text with .textContent
// changeTextBtn.addEventListener('click', () => {
//     heading.textContent = 'Updated Heading!';
//     description.textContent = 'The description has changed.'
// })

changeTextBtn.addEventListener('click', function() {
    heading.textContent = 'Updated Heading!';
    description.textContent = 'The description has changed, this is a regular funciton'
})

//Set attributes with .setAttribute
learnMoreLink.setAttribute('href', 'https://developer.mozilla.org/en-US/docs/Web/HTML')
learnMoreLink.textContent = 'Visit MDN Docs to Learn More about HTML'

//Setting inline styles with .style
description.style.color = 'blue';
description.style.fontWeight = 'bold';
description.style.fontSize = '24px';

//Manipulating classes and IDs
heading.classList.add('highlight')
heading.id = 'updated-heading-id'

//Access parent and child 
console.log('Parent of heading:', heading.parentNode)
console.log('Children of Item List:', itemList.children)

//Creating a new element with .createElement
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This was created in JS using .createElement'
newParagraph.className = 'highlight'
container.appendChild(newParagraph);

//Add a new list item to the beginning of the list using .prepend()
const newFirstItem = document.createElement('li')
newFirstItem.textContent = 'I am a new First List Item'
itemList.prepend(newFirstItem);

//Use .append() to add multiple elements and text at once
const secondParagraph = document.createElement('p');
secondParagraph.textContent = 'Append paragraph with .append'
container.append('Text added with .append()', secondParagraph)

document.getElementById('new-element-container').append('this is out of the variable')

//Dynamically add new list items with the button
addItemBtn.addEventListener('click', () => {
    const newItem = document.createElement('li')
    newItem.textContent = 'New List Item'
    itemList.appendChild(newItem)
})

//change image with .setAttribute
changeImageBtn.addEventListener('click', () => {
    sampleImage.setAttribute('src', 'https://www.wildnatureimages.com/images/640/040306-039-Bald-Eagle.jpg')
})