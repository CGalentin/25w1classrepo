# 🛡️ 25w1classrepo - JavaScript Development Course

A comprehensive JavaScript development course repository featuring web applications, DOM manipulation, API integration, and modern frontend practices.

## 🚀 Featured Project: Enhanced Westeros Explorer

### 📍 Location: `sprint5module4day2/`

The **Westeros Explorer** is a feature-rich web application that lets you explore characters and houses from *A Song of Ice and Fire* using the [An API of Ice and Fire](https://anapioficeandfire.com/).

![Westeros Explorer](https://img.shields.io/badge/Built%20with-JavaScript-yellow?style=for-the-badge)
![API Integration](https://img.shields.io/badge/API-REST-blue?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Design-Responsive-green?style=for-the-badge)

---

## ✨ Key Features

### 🔍 **Advanced Search & Filtering**
- **Real-time search** across character names, aliases, cultures, and regions
- **Smart filtering** by attributes (region, culture, titles)
- **Instant results** as you type
- **Multiple search criteria** support

### 📖 **Comprehensive Data Display**
- **Character cards** with culture, birth info, titles, and aliases
- **House cards** with regions, words, founding dates, and seats
- **Detailed information** for each character and house
- **Rich visual design** with hover effects and animations

### ❤️ **Favorites System**
- **Persistent favorites** saved in localStorage
- **Heart button** on each card for easy favoriting
- **Dedicated favorites view** with organized sections
- **Favorites counter** showing total saved items

### 🔄 **Smart Pagination**
- **API-driven pagination** with proper page management
- **20 items per page** for optimal performance
- **Navigation controls** with previous/next buttons
- **Page indicators** showing current position

### 🎯 **Interactive Modals**
- **Detailed character info** including relationships and TV appearances
- **Comprehensive house data** with ancestral weapons and lineage
- **Keyboard shortcuts** (ESC to close)
- **Click-outside-to-close** functionality

### 🎨 **Modern UI/UX**
- **Dark theme** optimized for readability
- **Responsive design** works on all devices
- **Smooth animations** and transitions
- **Professional styling** with consistent design system

### 🛠️ **Enhanced Error Handling**
- **User-friendly error messages** replace browser alerts
- **Auto-dismissing notifications** after 5 seconds
- **Network error recovery** with retry suggestions
- **Graceful failure handling** for API issues

---

## 🚀 Getting Started

### Prerequisites
- **Python 3.x** (for local development server)
- **Modern web browser** (Chrome, Firefox, Safari, Edge)
- **Internet connection** (for API calls)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 25w1classrepo
   ```

2. **Navigate to the project**
   ```bash
   cd sprint5module4day2
   ```

3. **Start the development server**
   ```bash
   python3 -m http.server 8000
   ```

4. **Open in browser**
   - Navigate to `http://localhost:8000`
   - The application will load automatically

### Alternative Server Options
```bash
# Using Node.js (if available)
npx http-server -p 8000

# Using PHP (if available)
php -S localhost:8000
```

---

## 🎯 How to Use

### 🏰 **Loading Data**
1. Click **"📖 Load Characters"** to fetch character data
2. Click **"🏰 Load Houses"** to fetch house data
3. Use **pagination controls** to browse through results

### 🔍 **Searching & Filtering**
1. Use the **search bar** to find specific characters or houses
2. Select **filter options** from the dropdown
3. **Real-time results** update as you type
4. **Clear filters** to reset the view

### ❤️ **Managing Favorites**
1. Click the **heart icon** on any card to add to favorites
2. Click **"❤️ Favorites"** to view saved items
3. **Hearts turn red** when items are favorited
4. **Favorites persist** between browser sessions

### 📋 **Viewing Details**
1. Click **"View Details"** on any card
2. **Modal opens** with comprehensive information
3. **Close modal** with X button, ESC key, or click outside

### 🧹 **Managing Results**
1. Click **"🗑️ Clear Results"** to reset the display
2. **Search and filters** are also cleared
3. **Pagination resets** to prepare for new data

---

## 🔧 Technical Implementation

### **Frontend Technologies**
- **Vanilla JavaScript** (ES6+)
- **CSS Grid & Flexbox** for responsive layouts
- **CSS Variables** for consistent theming
- **Local Storage API** for data persistence

### **API Integration**
- **Fetch API** for character data
- **Axios library** for house data
- **REST API** consumption with error handling
- **Header parsing** for pagination metadata

### **Key Features Implementation**

#### **State Management**
```javascript
// Centralized state management
let currentData = [];
let currentPage = 1;
let currentType = '';
let favorites = JSON.parse(localStorage.getItem('westeros-favorites')) || [];
```

#### **Advanced Search**
```javascript
// Multi-criteria search functionality
const matchesSearch = !searchTerm || 
  (item.name && item.name.toLowerCase().includes(searchTerm)) ||
  (item.aliases && item.aliases.some(alias => alias.toLowerCase().includes(searchTerm)));
```

#### **Pagination Handling**
```javascript
// Smart pagination with API integration
function parseLinkHeader(linkHeader) {
  // Parse API pagination headers
  // Extract total pages information
  // Update navigation controls
}
```

### **Performance Optimizations**
- **Efficient DOM manipulation** with minimal reflows
- **Event delegation** for dynamic content
- **Lazy loading** with pagination
- **Debounced search** for smooth UX

---

## 📁 Project Structure

```
25w1classrepo/
├── sprint5module4day2/          # Enhanced Westeros Explorer
│   ├── app.js                   # Main application logic
│   ├── index.html               # HTML structure
│   ├── styles.css               # Complete styling
│   └── [server files]
├── sprint5module1day1/          # DOM Manipulation Basics
├── sprint5module1day2/          # Advanced DOM Methods
├── sprint5module2day1/          # Event Handling
├── sprint5module2day2/          # Form Validation
├── sprint5module3day1/          # Component Development
├── sprint5module3day2/          # JSON Data Handling
├── sprint5module4day1/          # Animation & Effects
├── Sprints_1-4/                 # Previous course modules
└── README.md                    # This documentation
```

---

## 🎨 Design System

### **Color Palette**
- **Primary Background:** `#121212` (Dark theme)
- **Secondary Background:** `#1f1f1f` (Cards)
- **Accent Color:** `#5a2e21` (Buttons, borders)
- **Text Color:** `#eee` (Main text)
- **Highlight Color:** `#ad7b54` (Headers, emphasis)

### **Typography**
- **Font Stack:** "Segoe UI", Tahoma, Geneva, Verdana, sans-serif
- **Headers:** Bold, larger sizes with color accents
- **Body Text:** Regular weight, optimized line height

### **Responsive Breakpoints**
- **Mobile:** `max-width: 480px`
- **Tablet:** `max-width: 768px`
- **Desktop:** `min-width: 769px`

---

## 🚀 Future Enhancements

### **Planned Features**
- [ ] **Character relationship mapping**
- [ ] **House family trees**
- [ ] **Interactive maps of Westeros**
- [ ] **Character comparison tool**
- [ ] **Advanced sorting options**
- [ ] **Export favorites to JSON**
- [ ] **Offline mode with cached data**

### **Technical Improvements**
- [ ] **Service Worker implementation**
- [ ] **Progressive Web App features**
- [ ] **Unit testing with Jest**
- [ ] **TypeScript migration**
- [ ] **Component-based architecture**

---

## 🎓 Learning Objectives

This project demonstrates proficiency in:

### **JavaScript Fundamentals**
- ✅ **DOM Manipulation** and event handling
- ✅ **Async/Await** and Promise management
- ✅ **ES6+ Features** (arrow functions, destructuring, modules)
- ✅ **Error Handling** and debugging techniques

### **API Integration**
- ✅ **RESTful API** consumption
- ✅ **HTTP Methods** (GET requests)
- ✅ **Response Handling** and data parsing
- ✅ **Error Management** for network requests

### **Frontend Development**
- ✅ **Responsive Design** with CSS Grid/Flexbox
- ✅ **Modern CSS** techniques and animations
- ✅ **User Experience** design principles
- ✅ **Performance Optimization** strategies

### **State Management**
- ✅ **Local Storage** for data persistence
- ✅ **Application State** management
- ✅ **Data Synchronization** between UI and state

---

## 🤝 Contributing

This is a learning repository. Feel free to:

1. **Fork the repository**
2. **Create feature branches** for experiments
3. **Submit pull requests** with improvements
4. **Report issues** or suggest enhancements

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 External Resources

- **API:** [An API of Ice and Fire](https://anapioficeandfire.com/)
- **Icons:** Unicode emoji characters
- **Fonts:** System font stack for optimal performance
- **Libraries:** Axios CDN for HTTP requests

---

## 📞 Support

For questions or issues with the course material:

1. **Check the documentation** above
2. **Review the code comments** in source files
3. **Test in different browsers** to isolate issues
4. **Use browser developer tools** for debugging

---

*Built with ❤️ for learning modern JavaScript development*

**🛡️ Explore the Seven Kingdoms through code! ⚔️**