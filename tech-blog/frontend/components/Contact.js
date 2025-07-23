import React, { useState } from "react";
import "../styles/Contact.css"

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(
			`Thanks for reaching out, someone will be in touch in the next business day, ${formData.name}`
		);
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<div className="Contact">
			<h2> Contact Us </h2>
			<form onSubmit={handleSubmit}>
				<input
					name="name"
					placeholder="Enter Your Name"
					value={formData.name}
					onChange={handleChange}
				/>
				<input
					name="email"
					placeholder="Your Email"
					value={formData.email}
					onChange={handleChange}
				/>
				<textarea
					name="message"
					placeholder="Enter in Your Message"
					value={formData.message}
					onChange={handleChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Contact;
