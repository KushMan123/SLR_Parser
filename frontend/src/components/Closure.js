import React, { Fragment, useEffect, useState } from "react";

const Closure = (props) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		console.log(props.closureData);
		setData([props.closureData]);
	}, [props.closureData]);

	function RenderContent() {
		console.log(Object.keys(data).length);
		if (data.length === 0) {
			return <div>Loading</div>;
		} else {
			return (
				<div class='closure-set'>
					<div class='block-title'>SLR Closure Table</div>
					<table class='table' border='1'>
						<thead>
							<tr>
								<th>State</th>
								<th>Closure</th>
							</tr>
						</thead>
						<tbody>
							{Object.keys(data[0]).map((i) => {
								return (
									<tr>
										<td>{i}</td>
										<td>{`{${data[0][i]}}`}</td>
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

export default Closure;
