
// DOM Elements
const charsBtn = document.getElementById('loadChars');
const houseBtn = document.getElementById('loadHouses');
const clearBtn = document.getElementById('clearResults');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterSelect = document.getElementById('filterSelect');
const spinner = document.getElementById('spinner');
const container = document.getElementById('dataContainer');
const pagination = document.getElementById('pagination');
const modal = document.getElementById('detailModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const favoritesBtn = document.getElementById('favoritesBtn');
const errorMessage = document.getElementById('errorMessage');

// State management
let currentData = [];
let currentPage = 1;
let currentType = '';
let favorites = JSON.parse(localStorage.getItem('westeros-favorites')) || [];
let totalPages = 1;

// Show or hide the loading spinner
function toggleSpinner(show) {
  spinner.classList.toggle('hidden', !show);
}

// Show error message
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove('hidden');
  setTimeout(() => {
    errorMessage.classList.add('hidden');
  }, 5000);
}

// Clear error message
function clearError() {
  errorMessage.classList.add('hidden');
}

// Make API calls with consistent error handling
async function fetchData(url, useFetch = true) {
  try {
    if (useFetch) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } else {
      const response = await axios.get(url);
      return response.data;
    }
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Check if item is in favorites
function isFavorite(item) {
  return favorites.some(fav => fav.url === item.url);
}

// Toggle favorite status
function toggleFavorite(item) {
  const index = favorites.findIndex(fav => fav.url === item.url);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(item);
  }
  localStorage.setItem('westeros-favorites', JSON.stringify(favorites));
  updateFavoritesCount();
}

// Update favorites count in button
function updateFavoritesCount() {
  favoritesBtn.textContent = `❤️ Favorites (${favorites.length})`;
}

// Get page info from Link header
function parseLinkHeader(linkHeader) {
  if (!linkHeader) return { totalPages: 1 };
  
  const links = linkHeader.split(',');
  let totalPages = 1;
  
  links.forEach(link => {
    if (link.includes('rel="last"')) {
      const match = link.match(/page=(\d+)/);
      if (match) {
        totalPages = parseInt(match[1]);
      }
    }
  });
  
  return { totalPages };
}

// Render cards for characters or houses
function renderCards(items, type) {
  container.innerHTML = '';
  
  if (!items || items.length === 0) {
    container.innerHTML = '<div class="no-results">No results found. Try a different search or load more data.</div>';
    return;
  }

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    
    const isLiked = isFavorite(item);
    
    if (type === 'char') {
      const charName = item.name || item.aliases?.[0] || 'Unnamed Character';
      const aliases = item.aliases?.filter(a => a).join(', ') || 'None';
      const culture = item.culture || 'Unknown';
      const titles = item.titles?.filter(t => t).slice(0, 2).join(', ') || 'None';
      const born = item.born || 'Unknown';
      
      card.innerHTML = `
        <div class="card-header">
          <h3>${charName}</h3>
          <button class="favorite-btn ${isLiked ? 'active' : ''}" data-url="${item.url}">
            ${isLiked ? '❤️' : '🤍'}
          </button>
        </div>
        <div class="card-body">
          <p><strong>Culture:</strong> ${culture}</p>
          <p><strong>Born:</strong> ${born}</p>
          <p><strong>Titles:</strong> ${titles}</p>
          <p><strong>Aliases:</strong> ${aliases}</p>
        </div>
        <button class="details-btn" data-item='${JSON.stringify(item)}' data-type="char">
          View Details
        </button>
      `;
    } else if (type === 'house') {
      const region = item.region || 'Unknown';
      const words = item.words || 'No words';
      const founded = item.founded || 'Unknown';
      const seats = item.seats?.filter(s => s).join(', ') || 'None';
      
      card.innerHTML = `
        <div class="card-header">
          <h3>${item.name}</h3>
          <button class="favorite-btn ${isLiked ? 'active' : ''}" data-url="${item.url}">
            ${isLiked ? '❤️' : '🤍'}
          </button>
        </div>
        <div class="card-body">
          <p><strong>Region:</strong> ${region}</p>
          <p><strong>Words:</strong> "${words}"</p>
          <p><strong>Founded:</strong> ${founded}</p>
          <p><strong>Seats:</strong> ${seats}</p>
        </div>
        <button class="details-btn" data-item='${JSON.stringify(item)}' data-type="house">
          View Details
        </button>
      `;
    }
    
    container.appendChild(card);
  });
  
  // Add event listeners for favorite buttons
  document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const url = btn.dataset.url;
      const item = items.find(i => i.url === url);
      if (item) {
        toggleFavorite(item);
        btn.classList.toggle('active');
        btn.textContent = btn.classList.contains('active') ? '❤️' : '🤍';
      }
    });
  });
  
  // Add event listeners for details buttons
  document.querySelectorAll('.details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const item = JSON.parse(btn.dataset.item);
      const type = btn.dataset.type;
      showDetailsModal(item, type);
    });
  });
}

// Show detailed information in modal
function showDetailsModal(item, type) {
  let content = '';
  
  if (type === 'char') {
    const aliases = item.aliases?.filter(a => a).join(', ') || 'None';
    const titles = item.titles?.filter(t => t).join(', ') || 'None';
    const playedBy = item.playedBy?.filter(p => p).join(', ') || 'Not portrayed';
    
    content = `
      <h2>${item.name || item.aliases?.[0] || 'Unnamed Character'}</h2>
      <div class="modal-section">
        <h3>Basic Information</h3>
        <p><strong>Culture:</strong> ${item.culture || 'Unknown'}</p>
        <p><strong>Born:</strong> ${item.born || 'Unknown'}</p>
        <p><strong>Died:</strong> ${item.died || 'Still alive'}</p>
        <p><strong>Gender:</strong> ${item.gender || 'Unknown'}</p>
      </div>
      <div class="modal-section">
        <h3>Titles & Aliases</h3>
        <p><strong>Titles:</strong> ${titles}</p>
        <p><strong>Aliases:</strong> ${aliases}</p>
      </div>
      <div class="modal-section">
        <h3>Relationships</h3>
        <p><strong>Father:</strong> ${item.father ? 'Yes' : 'Unknown'}</p>
        <p><strong>Mother:</strong> ${item.mother ? 'Yes' : 'Unknown'}</p>
        <p><strong>Spouse:</strong> ${item.spouse ? 'Yes' : 'None'}</p>
      </div>
      <div class="modal-section">
        <h3>Media</h3>
        <p><strong>Portrayed by:</strong> ${playedBy}</p>
        <p><strong>TV Series:</strong> ${item.tvSeries?.filter(s => s).join(', ') || 'None'}</p>
      </div>
    `;
  } else if (type === 'house') {
    const seats = item.seats?.filter(s => s).join(', ') || 'None';
    const titles = item.titles?.filter(t => t).join(', ') || 'None';
    const ancestralWeapons = item.ancestralWeapons?.filter(w => w).join(', ') || 'None';
    
    content = `
      <h2>${item.name}</h2>
      <div class="modal-section">
        <h3>Basic Information</h3>
        <p><strong>Region:</strong> ${item.region || 'Unknown'}</p>
        <p><strong>Words:</strong> "${item.words || 'No words'}"</p>
        <p><strong>Founded:</strong> ${item.founded || 'Unknown'}</p>
        <p><strong>Coat of Arms:</strong> ${item.coatOfArms || 'Unknown'}</p>
      </div>
      <div class="modal-section">
        <h3>Holdings</h3>
        <p><strong>Seats:</strong> ${seats}</p>
        <p><strong>Titles:</strong> ${titles}</p>
      </div>
      <div class="modal-section">
        <h3>Legacy</h3>
        <p><strong>Ancestral Weapons:</strong> ${ancestralWeapons}</p>
        <p><strong>Current Lord:</strong> ${item.currentLord ? 'Yes' : 'Unknown'}</p>
        <p><strong>Heir:</strong> ${item.heir ? 'Yes' : 'Unknown'}</p>
      </div>
    `;
  }
  
  modalContent.innerHTML = content;
  modal.classList.remove('hidden');
}

// Render pagination controls
function renderPagination() {
  if (totalPages <= 1) {
    pagination.classList.add('hidden');
    return;
  }
  
  pagination.classList.remove('hidden');
  pagination.innerHTML = '';
  
  // Previous button
  const prevBtn = document.createElement('button');
  prevBtn.textContent = '← Previous';
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      loadData(currentType, currentPage);
    }
  });
  pagination.appendChild(prevBtn);
  
  // Page info
  const pageInfo = document.createElement('span');
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  pageInfo.className = 'page-info';
  pagination.appendChild(pageInfo);
  
  // Next button
  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Next →';
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      loadData(currentType, currentPage);
    }
  });
  pagination.appendChild(nextBtn);
}

// Load data from API
async function loadData(type, page = 1) {
  toggleSpinner(true);
  clearError();
  currentType = type;
  currentPage = page;
  
  const baseUrl = type === 'char' 
    ? 'https://anapioficeandfire.com/api/characters'
    : 'https://anapioficeandfire.com/api/houses';
  
  const url = `${baseUrl}?page=${page}&pageSize=20`;
  
  try {
    let data;
    if (type === 'char') {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      data = await response.json();
      
      // Parse pagination info from Link header
      const linkHeader = response.headers.get('Link');
      const { totalPages: pages } = parseLinkHeader(linkHeader);
      totalPages = pages;
    } else {
      const response = await axios.get(url);
      data = response.data;
      
      // Parse pagination info from Link header
      const linkHeader = response.headers.link;
      const { totalPages: pages } = parseLinkHeader(linkHeader);
      totalPages = pages;
    }
    
    currentData = data;
    renderCards(data, type);
    renderPagination();
    
  } catch (error) {
    console.error(`Error fetching ${type}:`, error);
    showError(`Failed to load ${type}. Please try again.`);
  } finally {
    toggleSpinner(false);
  }
}

// Filter data based on search and filters
function filterData() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const filterValue = filterSelect.value;
  
  if (!searchTerm && filterValue === 'all') {
    renderCards(currentData, currentType);
    return;
  }
  
  const filtered = currentData.filter(item => {
    const matchesSearch = !searchTerm || 
      (item.name && item.name.toLowerCase().includes(searchTerm)) ||
      (item.aliases && item.aliases.some(alias => alias.toLowerCase().includes(searchTerm))) ||
      (item.culture && item.culture.toLowerCase().includes(searchTerm)) ||
      (item.region && item.region.toLowerCase().includes(searchTerm));
    
    const matchesFilter = filterValue === 'all' || 
      (filterValue === 'region' && item.region) ||
      (filterValue === 'culture' && item.culture) ||
      (filterValue === 'titles' && item.titles && item.titles.some(t => t));
    
    return matchesSearch && matchesFilter;
  });
  
  renderCards(filtered, currentType);
}

// Show favorites
function showFavorites() {
  if (favorites.length === 0) {
    container.innerHTML = '<div class="no-results">No favorites yet. Click the heart icon on any card to add favorites!</div>';
    pagination.classList.add('hidden');
    return;
  }
  
  // Separate characters and houses
  const chars = favorites.filter(item => item.aliases !== undefined);
  const houses = favorites.filter(item => item.region !== undefined);
  
  container.innerHTML = '';
  
  if (chars.length > 0) {
    const charHeader = document.createElement('h2');
    charHeader.textContent = 'Favorite Characters';
    charHeader.className = 'section-header';
    container.appendChild(charHeader);
    
    const charContainer = document.createElement('div');
    charContainer.className = 'card-container';
    container.appendChild(charContainer);
    
    chars.forEach(item => {
      const cardDiv = document.createElement('div');
      renderCards([item], 'char');
      charContainer.appendChild(container.lastChild);
    });
  }
  
  if (houses.length > 0) {
    const houseHeader = document.createElement('h2');
    houseHeader.textContent = 'Favorite Houses';
    houseHeader.className = 'section-header';
    container.appendChild(houseHeader);
    
    const houseContainer = document.createElement('div');
    houseContainer.className = 'card-container';
    container.appendChild(houseContainer);
    
    houses.forEach(item => {
      const cardDiv = document.createElement('div');
      renderCards([item], 'house');
      houseContainer.appendChild(container.lastChild);
    });
  }
  
  pagination.classList.add('hidden');
}

// Event listeners
charsBtn.addEventListener('click', () => {
  currentPage = 1;
  loadData('char');
});

houseBtn.addEventListener('click', () => {
  currentPage = 1;
  loadData('house');
});

clearBtn.addEventListener('click', () => {
  container.innerHTML = '';
  pagination.classList.add('hidden');
  searchInput.value = '';
  filterSelect.value = 'all';
  currentData = [];
  clearError();
});

searchBtn.addEventListener('click', filterData);

searchInput.addEventListener('input', () => {
  if (currentData.length > 0) {
    filterData();
  }
});

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    filterData();
  }
});

filterSelect.addEventListener('change', filterData);

favoritesBtn.addEventListener('click', showFavorites);

// Modal event listeners
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
  }
});

// Initialize favorites count
updateFavoritesCount();

// Ensure modal is hidden on page load
document.addEventListener('DOMContentLoaded', () => {
  if (modal) {
    modal.classList.add('hidden');
  }
});

