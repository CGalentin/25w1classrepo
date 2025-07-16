import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "../styles/styles.css";

const categories = ['JavaScript', 'React', "CSS Tips", 'Career Advice'];
const navLinks = ['Home', 'Articles', 'About', 'Contact']

export default function App() {
	return (
		<div className="App">
			<Header
				title="The Daily Dev"
				subtitle="Your source for tech news and tutorials...Don't forget about reviews"
        navLinks={navLinks}
				/>

			<div
				className="App-Body"
				style={{ display: "flex", justifyContent: "space-between"}}> 
        <Sidebar categories = {categories}/>
        
				
				<main className="App-Content" style={{ flex: 1 }}>
					<p>Blog Content Coming Soon</p>
				</main>
      </div>
			<Footer />
		</div>
	);
}
