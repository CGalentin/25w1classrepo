import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Header({ title, subtitle, navLinks }) {
	return (
		<AppBar position="static" color="primary">
			<Toolbar sx={{ flexDirection: 'column', alignItems: 'flex-start'}}>
				<Typography variant="h5" component='div'>
					{title}
				</Typography>
				<Typography variant="body2" component='div'>
					{subtitle}
				</Typography>
				<Stack direction="row" spacing={2}>
					{navLinks && navLinks.map((link)=> (
						<Button key={link} color="inherit">
							{link}
						</Button>
					))}
				</Stack>
			</Toolbar>
		</AppBar>
		// <header className="App-Header">
		// 	<h1>{title}</h1>
		// 	<p>{subtitle}</p>
		// 	<nav>
		// 		{navLinks &&
		// 			navLinks.map((link) => (
		// 				<a href="#" key={link} style={{ marginRight: "10px" }}>{link}</a>
		// 			))}
		// 	</nav>
		// </header>
	);
}

export default Header;
