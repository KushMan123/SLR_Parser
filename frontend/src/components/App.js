import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Title from "./Title";
import "../static/css/style.css";
import Input from "./Input";

function App() {
	useEffect(() => {
		fetch("/find")
			.then((response) => response.json())
			.then((json) => console.log(json));
	}, []);

	return (
		<Fragment>
			<Title />
			<Input />
		</Fragment>
	);
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
