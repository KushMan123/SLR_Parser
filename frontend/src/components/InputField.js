import React from "react";
import Label from "./Label";
import TextField from "./TextField";

const InputField = (props) => {
	return (
		<div class='input-field'>
			<div class={`form-group ${props.secondClass}`}>
				<Label name={props.labelName} />
				<TextField />
			</div>
		</div>
	);
};

export default InputField;
