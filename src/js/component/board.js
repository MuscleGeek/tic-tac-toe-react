import React from "react";
import Square from "./square.js";
import PropTypes from "prop-types";

export default function Board(props) {
	const renderSquare = i => {
		return (
			<Square value={props.squares[i]} onClick={() => props.onClick(i)} />
		);
	};
	return (
		<div>
			<div className="row">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className="row">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className="row">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
}

Board.propTypes = {
	squares: PropTypes.number,
	onClick: PropTypes.func
};
