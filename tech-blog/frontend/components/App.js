import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ArticleList from "./ArticleList";
import Navbar from "./Navbar";
import Contact from "./Contact";
import "../styles/styles.css";

const categories = ["JavaScript", "React", "CSS Tips", "Career Advice"];
//const navLinks = ['Home', 'Articles', 'About', 'Contact']

export default function App() {
	return (
		<Router>
		<div className="App">
			<Navbar />
			<Header
				title="The Daily Dev"
				subtitle="Your source for tech news and tutorials...Don't forget about reviews"
			/>

			<div
				className="App-Body"
				style={{ display: "flex", justifyContent: "space-between" }}
			>
				<Sidebar categories={categories} />

				<main className="App-Content" style={{ flex: 1 }}>
					<Routes>
						<Route path="/" element={<ArticleList />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>
			</div>
			<Footer />
		</div>
		</Router>
	);
}
