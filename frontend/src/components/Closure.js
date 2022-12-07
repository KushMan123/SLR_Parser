import React from "react";

const Closure = () => {
	return (
		<div class='closure-set'>
			<div class='block-title'>SLR Closure Table</div>
			<table class='table' border='1'>
				<thead>
					<tr>
						<th>Goto</th>
						<th>Kernel</th>
						<th>State</th>
						<th>Closure</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td></td>
						<td>{"{S’ -> .S}"}</td>
						<td>0</td>
						<td>
							{"{S’ -> .S; S -> .L = R; S -> .R; L -> .* R; L -> .id; R -> .L}"}
						</td>
					</tr>
					<tr>
						<td>goto(0, S)</td>
						<td>{"{S’ -> S.}"}</td>
						<td>1</td>
						<td>{"{S’ -> S.}"}</td>
					</tr>
					<tr>
						<td>goto(0, L)</td>
						<td>{"{S -> L.= R; R -> L.}"}</td>
						<td>2</td>
						<td>{"{S -> L.= R; R -> L.}"}</td>
					</tr>
					<tr>
						<td>goto(0, R)</td>
						<td>{"{S -> R.}"}</td>
						<td>3</td>
						<td>{"{S -> R.}"}</td>
					</tr>
					<tr>
						<td>goto(0, *)</td>
						<td>{"{L -> *.R}"}</td>
						<td>4</td>
						<td>{"{L -> *.R; R -> .L; L -> .* R; L -> .id}"}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Closure;
