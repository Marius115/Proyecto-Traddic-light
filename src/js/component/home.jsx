import React, {useState} from "react";

//create your first component
const Home = () => {
	const [selectedColor, setselectedColor ] = useState("red");

	return (
		<div className="Traffic-light">
			<div className={"light red mb-2"+((selectedColor === "red") ? " glow" : "")}></div>
			<div className={"light yellow mb-1"+((selectedColor === "yellow") ? " glow" : "")}></div>
			<div className={"light green mt-1"+((selectedColor === "green") ? " glow" : "")}></div>
			
		</div>
	);
};

export default Home;
