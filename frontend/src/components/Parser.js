import React, { useState } from "react";

const data1 = {
	1: ["0", "id=id$", "s5"],
	2: ["0id5", "=id$", "r4"],
	3: ["0L2", "=id$", "s6/r5. So conflict"],
};

const Parser = () => {
	const [data, setData] = useState([]);
	function handleClick(e) {
		const value = document.querySelector(".parsertext").value;
		fetch("http://9c7d-113-199-231-152.ngrok.io/add-input", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ data: value }),
		}).then((res) => {
			console.log(res);
			setData(res);
		});
		e.preventDefault();
	}

	function RenderContent() {
		if (data.length === 0) {
			return <div> Please Enter Input String to Parse</div>;
		} else {
			return (
				<table class='table' border='1'>
					<thead>
						<tr>
							<th>Stack</th>
							<th>Input String</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(data[0]).map((i) => {
							return (
								<tr>
									<td>{data[0][i][0]}</td>
									<td>{data[0][i][1]}</td>
									<td>{data[0][i][2]}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			);
		}
	}

	return (
		<div class='parser'>
			<div class='block-title'>Parsing</div>
			<form class='form'>
				<div class='input-field'>
					<div class='form-group'>
						<label>Enter the String</label>
						<div>
							<input type='text' class='textinput parsertext'></input>
						</div>
						<input
							type='submit'
							value='Parse'
							class='btn'
							onClick={handleClick}></input>
					</div>
				</div>
			</form>
			{RenderContent()}
		</div>
	);
};

export default Parser;
