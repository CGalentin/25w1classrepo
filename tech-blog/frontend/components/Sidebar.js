import React from "react";

function Sidebar({categories}) {
    return(
    <aside className="Sidebar">
        <h3>Categories</h3>
        <ul>
            {categories.map((cat, i)=> (
                <li key={i}>{cat}</li>
            ))}
        </ul>
    </aside>
    );
}

export default Sidebar;