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
import Loading from "./Loading";
import OuterContainer from "../containers/OuterContainer";

function App() {
	const [first, setFirst] = useState([]);
	const [follow, setFollow] = useState([]);
	const [terminals, setTerminals] = useState([]);
	const [nonterminals, setNonterminals] = useState([]);
	const [parsingtable, setParsingTable] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [closure, setClosure] = useState();

	// useEffect(() => {
	// 	const feedURL = "http://aabd-113-199-231-152.ngrok.io/find";
	// 	fetch(feedURL)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 		});
	// }, []);

	function GetData() {
		setIsLoading(true);
		console.log("Fetching Data");
		const firstURL = "http://a9b9-113-199-231-250.ngrok.io/first";
		const followURL = "http://a9b9-113-199-231-250.ngrok.io/follow";
		const terminalURL = "http://a9b9-113-199-231-250.ngrok.io/terminals";
		const nonterminalURL = "http://a9b9-113-199-231-250.ngrok.io/non-terminals";
		const parsingtableURL = "http://a9b9-113-199-231-250.ngrok.io/parsingtable";
		const closureURL = "http://a9b9-113-199-231-250.ngrok.io/closure";
		// Fetching First
		const fetchFirstData = async () => {
			const response = await fetch(firstURL);
			const json = await response.json();
			setFirst(json);
			console.log("First " + json);
		};
		fetchFirstData().catch(console.error);
		//Fetching Follow
		const fetchFollowData = async () => {
			const response = await fetch(followURL);
			const json = await response.json();
			setFollow(json);
			console.log("Follow " + json);
		};
		fetchFollowData().catch(console.error);
		//Fetching Terminals
		const fetchTerminalData = async () => {
			const response = await fetch(terminalURL);
			const json = await response.json();
			setTerminals(json);
			console.log("Terminal " + json);
		};
		fetchTerminalData().catch(console.error);
		//Fetching Non-Terminals
		const fetchNonTerminalData = async () => {
			const response = await fetch(nonterminalURL);
			const json = await response.json();
			setNonterminals(json);
			console.log("NonTerminal " + json);
		};
		fetchNonTerminalData().catch(console.error);
		//Fectching Parsing Table
		const fetchParsingTablelData = async () => {
			const response = await fetch(parsingtableURL);
			const json = await response.json();
			setParsingTable(json);
			console.log("Parsing Table " + json);
		};
		fetchParsingTablelData().catch(console.error);
		//Fectching Closure Table
		const fetchClosureData = async () => {
			const response = await fetch(closureURL);
			const json = await response.json();
			setClosure(json);
			console.log("Closure" + json);
		};
		fetchClosureData().catch(console.error);
		setIsLoading(false);
	}

	function RenderContent() {
		if (
			first.length === 0 &&
			follow.length === 0 &&
			terminals.length === 0 &&
			nonterminals.length === 0 &&
			parsingtable.length === 0 &&
			!isLoading
		) {
			return (
				<Fragment>
					<Title />
					<Production>
						<FirstSection>
							<Input handleFunction={GetData} />
						</FirstSection>
						<TextSection />
					</Production>
				</Fragment>
			);
		} else if (
			first.length === 0 &&
			follow.length === 0 &&
			terminals.length === 0 &&
			nonterminals.length === 0 &&
			parsingtable.length === 0 &&
			isLoading
		) {
			return (
				<OuterContainer>
					<Loading LoadingText='Loading' />
				</OuterContainer>
			);
		} else {
			return (
				<Fragment>
					<Title />
					<Production>
						<FirstSection>
							<Input handleFunction={GetData} />
							<FirstFollow
								firstData={[first]}
								followData={[follow]}
								nonterminalData={nonterminals}
							/>
						</FirstSection>
						<TextSection />
					</Production>
					<Closure closureData={closure} />
					<ParsingTable
						rawData={parsingtable}
						terminalData={terminals}
						nonterminalData={nonterminals}
					/>
					<Parser />
				</Fragment>
			);
		}
	}

	return <Fragment>{RenderContent()}</Fragment>;
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
