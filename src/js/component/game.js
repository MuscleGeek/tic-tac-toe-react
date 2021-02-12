import React from "react";
import Board from "./board.js";

export class Game extends React.Component {
	/*history movement and which player get its turn*/
	constructor(props) {
		super(props);
		this.state = {
			xIsNext: true,
			stepNumber: 0,
			history: [{ squares: Array(9).fill(null) }]
		};
	}

	calculateWinner = squares => {
		/*How many possibilities ppl could get winner*/
		const winnerLines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];

		for (let i = 0; i < winnerLines; i++) {
			const [a, b, c] = winnerLines[i];
			if (squares === [a] && squares === [b] && squares === [c]) {
				return squares[a];
			}
		}
		return null;
	};
	jumpTo(step) {
		/*player's turn*/
		this.setState({
			stepNumber: step,
			xIsNext: step % 2 === 0,
			history: this.state.history.slice(0, step + 1)
		});
	}
	handleClick(i) {
		/*Whe we click on square, so we could calculate by moves who could become the winner*/
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		const winner = this.calculateWinner(squares);
		if (winner || squares[i]) {
			return;
		}
		squares[i] = this.state.xIsNext ? "X" : "O";
		this.setState({
			history: history.concat({ squares: squares }),
			xIsNext: !this.state.xIsNext,
			stepNumber: history.length
		});
	}
	render() {
		const history = this.state.history;
		const current = history[history.length - 1];
		const winner = this.calculateWinner(current.squares);
		const moves = history.map((step, move) => {
			const desc = move ? "movement " + move : "Let's Play";
			return (
				<li key={move}>
					<button
						className="btn btn-info"
						onClick={() => {
							this.jumpTo(move);
						}}>
						{desc}
					</button>
				</li>
			);
		});
		let status = winner
			? "Winner is" + winner
			: "Next player is " + (this.state.xIsNext ? "X" : "O");
		return (
			<div className="game">
				<div className="dashboard">
					<Board
						onClick={i => this.handleClick(i)}
						squares={current.squares}></Board>
				</div>
				<div className="game-info">
					<pre>{status}</pre>
					<ul>{moves}</ul>
				</div>
			</div>
		);
	}
}
