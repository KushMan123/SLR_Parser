import { React, useEffect, useState, useRef } from "react";
import Button from "./Button";
import ColInput from "./ColInput";
import InlineInput from "./InlineInput";

const Input = () => {
	const [productionNo, setProductionNo] = useState(0);
	const [rules, setRules] = useState([]);

	const colInputRef = useRef();

	function handleChange(value) {
		setProductionNo(parseInt(value));
	}

	function handleClick() {
		setRules(colInputRef.current.dummy());
		console.log(rules);
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
