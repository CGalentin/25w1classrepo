import React, {useState} from "react";

function SearchBar ({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value);
    }

    return (
        <div className="SearchBar">
            <input 
                type="text"
                placeholder="Search Articles..."
                value={searchTerm}
                onChange={handleChange}
                />
        </div>
    )
}
console.log(SearchBar)
export default SearchBar;

