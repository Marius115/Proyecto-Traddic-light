import React, {useState} from "react";

//create your first component
const Home = () => {
	const [selectedColor, setselectedColor ] = useState("red");

	return (
		<>
			<div className="Traffic-pole"> </div>
				<div className="Traffic-light">
					<div
					onClick={() => setselectedColor("red") }
					className={"light red mb-1"+((selectedColor === "red") ? " glow" : "")
					}></div>

					<div 
					onClick={() => setselectedColor("yellow") }
					className={"light yellow mb-1"+((selectedColor === "yellow") ? " glow" : "")
					}></div>

					<div
					onClick={() => setselectedColor("green") }
					className={"light green mt-1"+((selectedColor === "green") ? " glow" : "")
					}></div>
			    </div>
			
		</>
	);
};

export default Home;

// Hola Bryan!!!