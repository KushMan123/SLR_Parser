import React from "react";

const Parser = () => {
	return (
		<div class='parser'>
			<div class='block-title'>Parsing</div>
			<form class='form'>
				<div class='input-field'>
					<div class='form-group'>
						<label>Enter the String</label>
						<div>
							<input type='text' class='textinput'></input>
						</div>
						<input type='submit' value='Parse' class='btn'></input>
					</div>
				</div>
			</form>
			<table class='table' border='1'>
				<thead>
					<tr>
						<th>Stack</th>
						<th>Input String</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>S'</td>
						<td>{"{*,id,*,id,S}"}</td>
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

export default Parser;
