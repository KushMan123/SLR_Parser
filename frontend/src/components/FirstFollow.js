import React, { Fragment, useEffect, useState } from "react";

const FirstFollow = (props) => {
	const { firstData, followData, nonterminalData } = props;
	const [data, setData] = useState([]);

	useEffect(() => {
		if (
			firstData.length !== 0 &&
			followData.length !== 0 &&
			nonterminalData.length !== 0
		) {
			const firstfollow = [];
			nonterminalData.forEach((n) => {
				firstfollow.push([n, firstData[0][n], followData[0][n]]);
			});
			setData(firstfollow);
			console.log(data);
		}
	}, [firstData, followData, nonterminalData]);

	function RenderContent() {
		if (data.length === 0) {
			return <div>Loading</div>;
		} else {
			return (
				<div class='first-follow'>
					<div class='block-title'>FIRST FOLLOW Table</div>
					<table class='table' border='1'>
						<thead>
							<tr>
								<th>Non-Terminals</th>
								<th>FIRST</th>
								<th>FOLLOW</th>
							</tr>
						</thead>
						<tbody>
							{data.map((i) => {
								return (
									<tr>
										<td>{i[0]}</td>
										<td>{i[1]}</td>
										<td>{i[2]}</td>
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

export default FirstFollow;
