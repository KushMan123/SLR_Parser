import React from "react";

const FirstFollow = () => {
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
					<tr>
						<td>S'</td>
						<td>{"{*,id}"}</td>
						<td>{"{$}"}</td>
					</tr>
					<tr>
						<td>S</td>
						<td>{"{*,id}"}</td>
						<td>{"{$}"}</td>
					</tr>
					<tr>
						<td>L</td>
						<td>{"{*,id}"}</td>
						<td>{"{=,$}"}</td>
					</tr>
					<tr>
						<td>R</td>
						<td>{"{*,id}"}</td>
						<td>{"{=,$}"}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default FirstFollow;
