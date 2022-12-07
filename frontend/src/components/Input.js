import { React, useEffect, useState, useRef } from "react";
import Button from "./Button";
import ColInput from "./ColInput";
import InlineInput from "./InlineInput";

const Input = (props) => {
	const [productionNo, setProductionNo] = useState(0);

	const colInputRef = useRef();

	function handleChange(value) {
		setProductionNo(parseInt(value));
	}

	function handleClick() {
		const data = colInputRef.current.dummy();
		console.log(data);
		// fetch("http://9c7d-113-199-231-152.ngrok.io/add-grammar", {
		// 	method: "POST",
		// 	headers: {
		// 		Accept: "application/json",
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({ data: data }),
		// }).then((res) => {
		// 	console.log(res);
		// });
		props.handleFunction();
	}

	return (
		<div class='input'>
			<div class='block-title'>Write your Grammar</div>
			<div class='form'>
				<InlineInput handleFunction={handleChange} />
				<ColInput additionalTextField={productionNo} ref={colInputRef} />
				<Button
					secondClass='center-align'
					buttonValue='Generate'
					OnClick={handleClick}
				/>
			</div>
		</div>
	);
};

export default Input;
