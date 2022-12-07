import React from "react";

const InlineInput = (props) => {
	function handleChange(e) {
		if (e.target.value !== " ") {
			props.handleFunction(e.target.value);
		} else {
			props.handleFunction(0);
		}
	}

	return (
		<div class='input-field'>
			<div class='form-group inline-input'>
				<label>Enter number of production rules</label>
				<div>
					<input type='text' class='textinput' onChange={handleChange}></input>
				</div>
			</div>
		</div>
	);
};

export default InlineInput;
