import React from "react";

function Header({ title, subtitle, navLinks }) {
	return (
		<header className="App-Header">
			<h1>{title}</h1>
			<p>{subtitle}</p>
			<nav>
				{navLinks &&
					navLinks.map((link) => (
						<a href="#" key={link} style={{ marginRight: "10px" }}>{link}</a>
					))}
			</nav>
		</header>
	);
}

export default Header;
