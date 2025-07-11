
const charsBtn = document.getElementById('loadChars');
const houseBtn = document.getElementById('loadHouses');
const spinner = document.getElementById('spinner');
const container = document.getElementById('dataContainer');

//Show or hide the loading spinner
function toggleSpinner(show){
  spinner.classList.toggle('hidden', !show);
}

//function to render cards for characters or houses based on their types
function renderCards(items, type) {
  container.innerHTML = ''; //clear results

  items.forEach(item => {
    const card = document.createElement('div')
    card.className = 'card'

    if (type === 'char') {
      //Use name or fallback alias
      const charName = item.name || item.aliases[0] || 'Unamed';
      const aliases = item.aliases.filter(a => a).join(',') || 'None';
      const culture = item.culture || 'Unknown'

      card.innerHTML = `
      <h3>${charName}</h3>
      <p><strong>Aliases:</strong> ${aliases}</p>
      <p><strong>Culture:</strong> ${culture}</p>`
    } else if (type === 'house') {
      const region = item.region || 'N/A'
      const words = item.words || 'N/A'

      card.innerHTML = `
      <h3>${item.name} </h3>
      <p><strong>Region:</strong> ${item.region}</p>
      <p><strong>Quotes:</strong> ${item.words}</p>`

    }
    container.appendChild(card);
  })
}

charsBtn.addEventListener('click', async () => {
  toggleSpinner(true); //Shows the spinner

  try {
    const res = await fetch('https://anapioficeandfire.com/api/characters')
    const data = await res.json()
    // setTimeout(() => {
    //   renderCards(data, 'char');
    //   toggleSpinner(false)
    // },5000)
    renderCards(data, 'char') //Display the char data
  } catch (err) {
    console.error('Error fetching characters', err);
    alert('Failed to load characters. Check Console for more details.')
  } finally {
    toggleSpinner(false);
  }
})

houseBtn.addEventListener('click', async () => {
  toggleSpinner(true); 

  try {
    const res = await axios.get('https://anapioficeandfire.com/api/houses')

    setTimeout (() => {
      renderCards(res.data, 'house')
      toggleSpinner(false);
    },1500) 
  } catch (err) {
      console.error ('Error fetching houses;', err);
      alert('Failed to Load Houses!')
      toggleSpinner(false);
    }
  
});

