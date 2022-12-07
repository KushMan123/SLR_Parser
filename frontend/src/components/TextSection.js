import React from "react";

const TextSection = () => {
	return (
		<div class='text-section'>
			<h2>What is a SLR Parser?</h2>
			<p>
				SLR is simple LR. It is the smallest class of grammar having few number
				of states. SLR is very easy to construct and is similar to LR parsing.
				The only difference between SLR parser and LR(0) parser is that in LR(0)
				parsing table, there is a chance of "shift reduced" conflict because we
				are entering "reduce" corresponding to all terminal states. We can solve
				this problem by entering "reduce" corresponding to FOLLOW of LHS of
				production in the terminating state. This is called SLR(1) collection of
				items
			</p>
			<h3>Formatting Instructions</h3>
			<ul>
				<li>
					The non-terminal on the left-hand-side of the first rule is the start
					non-terminal
				</li>
				<li>
					Specify the number of production rules and write each production rule
					in a separate input field
				</li>
				<li>
					Write the production rule is the form <span>A{"->"}aBB</span>{" "}
				</li>
				<li>
					<span>$ is reserved as the end-of-input symbol</span>, and S' is
					reserved as an artificial start symbol. The grammar is
					<span>automatically augmented with the rule S' ::= start $</span>
				</li>
			</ul>
		</div>
	);
};

export default TextSection;
