import React from "react";

//include images into your bundle
import { Square } from "./square";
import { Game } from "./game";
//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Game />
		</div>
	);
}
