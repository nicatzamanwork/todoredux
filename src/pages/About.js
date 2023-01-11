import React from 'react';
import { useSelector } from 'react-redux';

function About() {
	const todos = useSelector((state) => state);

	return (
		<>
			{todos.length === 0 ? (
				<h1 className="not-list"> List is empty</h1>
			) : (
				<h1 className="not-list">todos length {todos.length}</h1>
			)}
		</>
	);
}

export default About;
