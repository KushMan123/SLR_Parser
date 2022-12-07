import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Title from "./Title";
import "../static/css/style.css";
import Input from "./Input";
import FirstFollow from "./FirstFollow";
import FirstSection from "../containers/FirstSection";
import Production from "../containers/Production";
import TextSection from "./TextSection";
import Closure from "./Closure";
import ParsingTable from "./ParsingTable";
import Parser from "./Parser";

function App() {
	useEffect(() => {
		const feedURL = "http://aabd-113-199-231-152.ngrok.io/find";
		fetch(feedURL)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	}, []);

	return (
		<Fragment>
			<Title />
			<Production>
				<FirstSection>
					<Input />
					<FirstFollow />
				</FirstSection>
				<TextSection />
			</Production>
			<Closure />
			<ParsingTable />
			<Parser />
		</Fragment>
	);
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
