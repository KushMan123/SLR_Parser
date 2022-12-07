import React, {
	useState,
	useEffect,
	Fragment,
	useImperativeHandle,
} from "react";
import TextField from "./TextField";

const ColInput = React.forwardRef((props, ref) => {
	useImperativeHandle(ref, () => ({
		dummy() {
			const production = [];
			const rules = document.querySelectorAll(".rule");
			rules.forEach((rule) => {
				production.push(rule.value);
			});
			return production;
		},
	}));

	function createTextField(value) {
		let field = [];
		for (let i = 0; i < value; i++) {
			field.push(<TextField />);
		}
		return field;
	}

	return (
		<div class='input-field'>
			<div class='form-group col-direction'>
				<label>Enter production rules</label>
				{props.additionalTextField <= 0
					? createTextField(3)
					: createTextField(props.additionalTextField)}
			</div>
		</div>
	);
});

export default ColInput;
