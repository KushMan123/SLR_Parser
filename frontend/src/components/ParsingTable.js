import React, { Fragment, useEffect, useState } from "react";

const ParsingTable = (props) => {
	const { rawData, terminalData, nonterminalData } = props;

	const [data, setData] = useState([]);
	const [terminal, setTerminal] = useState([]);

	useEffect(() => {
		const temp = [...terminalData, "$"];
		setTerminal(temp);
		if (rawData.length !== 0) {
			const temp = [];
			rawData.forEach((raw, index) => {
				temp.push([index, ...raw]);
			});
			setData(temp);
		}
	}, [rawData, terminalData, nonterminalData]);

	function RenderContent() {
		if (data.length === 0) {
			return <div>Loading...</div>;
		} else {
			return (
				<div class='parsing-table'>
					<div class='block-title'>parsing-table</div>
					<table class='table' border='1'>
						<thead>
							<tr>
								<th rowspan='2'>State</th>
								<th colspan={terminal.length}>Action</th>
								<th colspan={nonterminalData.length - 1}>Goto</th>
							</tr>
							<tr>
								{terminal.map((i) => {
									return <th>{i}</th>;
								})}
								{nonterminalData.map((i, index) => {
									if (index !== 0) {
										return <th>{i}</th>;
									}
								})}
							</tr>
						</thead>
						<tbody>
							{data.map((row) => {
								return (
									<tr>
										{row.map((data, index) => {
											if (index !== row.length - 1) {
												return <td>{data}</td>;
											}
										})}
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			);
		}
	}

	return <Fragment>{RenderContent()}</Fragment>;
};

export default ParsingTable;
