import React from "react";
import PropTypes from "prop-types";

export default function Square(props) {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}

Square.propTypes = {
	onClick: PropTypes.func,
	value: PropTypes.number
};
