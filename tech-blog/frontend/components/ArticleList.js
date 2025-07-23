import React, { useState } from "react";
import ArticlePreview from "./ArticlePreveiew";
import SearchBar from "./SearchBar";

const articles = [
	{
		title: "The Rise of AI: Transforming Industries",
		author: "Jane Doe",
		summary:
			"Artificial Intelligence is no longer a concept from science fiction; it's a reality that is reshaping every industry from healthcare to finance. This article explores the latest advancements and their potential impact.",
	},
	{
		title: "Quantum Computing: The Next Frontier",
		author: "John Smith",
		summary:
			"A brief introduction to the mind-bending world of quantum computing. We break down qubits, superposition, and entanglement to understand how these machines could solve currently unsolvable problems.",
	},
	{
		title: "Navigating the Decentralized Web (Web3)",
		author: "Alex Ray",
		summary:
			"Web3 promises a more democratic and user-centric internet powered by blockchain technology. This piece covers the core concepts of Web3, including dApps, DAOs, and the role of cryptocurrencies.",
	},
	{
		title: "Cybersecurity in 2024: Top Threats and Preventions",
		author: "Sarah Lee",
		summary:
			"As our lives become more digital, the importance of cybersecurity has never been greater. Learn about the most prevalent cyber threats today and the best practices to keep your data safe.",
	},
];

function ArticleList() {
	const [search, setSearch] = useState("");
	const filteredArticles = articles.filter((article) => {
		return article.title.toLowerCase().includes(search.toLowerCase());
	});
	return (
		<section>
			<SearchBar onSearch={setSearch} />
			<h2> Latest Articles: </h2>
			{filteredArticles.map((article, index) => (
				<ArticlePreview
					key={index}
					title={article.title}
					author={article.author}
					summary={article.summary}
				/>
			))}
			{filteredArticles.length === 0 && <p>No Matching Articles Found.</p>}
		</section>
	);
}

export default ArticleList;
