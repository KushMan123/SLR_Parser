import React from "react";

const Button = (props) => {
	function handleClick(e) {
		props.OnClick();
	}

	return (
		<div class={`input-field ${props.secondClass}`}>
			<input
				type='submit'
				value={props.buttonValue}
				class='btn'
				onClick={handleClick}></input>
		</div>
	);
};

export default Button;
