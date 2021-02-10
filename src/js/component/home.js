import React from "react";
import "src/styles/index.scss";
import ".component/stylo.css";

//include images into your bundle

import { game } from "./game.js";
//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Square value="X" onClick={() => alert("X")} />
		</div>
	);
}
