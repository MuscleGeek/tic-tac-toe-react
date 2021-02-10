import React from "react";
import "src/js/component/stylo.css";

export function Square(props) {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}
