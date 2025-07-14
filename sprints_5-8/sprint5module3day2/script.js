const componentsContainer = document.getElementById("componentsContainer");

console.log("Starting JSON rendering script...");

//Fetch JSON data from external file or API
fetch("/sprint5module3day2/data.json")
    .then((response) => {
	if (!response.ok) {
		//If the file fails to load, throw an error
		throw new Error("Failed to load JSON data");
	} 
		//Convert the response into a JS Object
		return response.json();
	
})
    .then(data => {
        console.log("JSON data loaded", data)
        renderAllCards(data); //Pass the parsed data to a function
    })
    .catch(error => {
        console.error("Error loading or parsing data")
    })

    function renderAllCards(data){
        //Clear prev content just in case
        componentsContainer.innerHTML = "";

        console.log(`Rendering ${data.length} cards to the DOM`)

        //loop through each item and create a card
        data.forEach(item => {
            const card = buildCards(item)
            componentsContainer.appendChild(card)//This will insert the card into the page

        })
        console.log("Completed rendering of all cards.")
    }

    function buildCards(item) {
        console.log(`Building card for: ${item.title}`)

        //Create the outer container
        const card = document.createElement('div');
        card.className = 'card';

        //Create and add title
        const title = document.createElement('h3');
        title.textContent = item.title;
        //Create and add description
        const description = document.createElement('p');
        description.textContent = item.description;
        //Create and add Category
        const category = document.createElement('p')
        category.textContent = `Category: ${item.category}`
        category.style.fontStyle = 'italic'
        category.style.color = "#00124B"
        category.style.fontSize = '0.9rem'

        //Apply custom styling based on category
        switch (item.category) {
            case "Async":
                card.style.borderLeft = '4px solid #8A00C4';
                break;
            case "Styling":
                card.style.borderLeft = '4px solid #0BDA51';
                break;
            case "Parsing":
                card.style.borderLeft = '4px solid #FFFF99';
                break;
            default:
                card.style.borderLeft = '4px solid #003DE8';
        }

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(category);
    
        return card;
    }


    



