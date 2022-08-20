// Importing state hooks for the counting variable on this component:
import { useState } from "react";
// Importing FontAwesome main component to generate icons:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importing icons individually:
import {
	faSquarePlus,
	faSquareMinus,
} from "@fortawesome/free-regular-svg-icons";
// Importing component CSS:
import "./ItemCount.css";

// This component gets:
// STOCK: Amount of products available for selling.
// INITIAL: Starting value for the counter.
// ONADD: Function that is triggered when the user makes a request for 'Adding products to the cart'
export const ItemCount = ({ stock, initial, onAdd }) => {
	// Hook for counter state variable:
	const [number, setNumber] = useState(initial);

	// Method to update counter value when user adds one:
	const countUp = () => {
		if (number < stock) {
			setNumber(number + 1);
		}
	};

	// Method to update counter value when user substract one:
	const countDown = () => {
		if (number > 0) {
			setNumber(number - 1);
		}
	};

	return (
		<div className="itemCounter">
			<div className="counterControl">
				{/* Minus button */}
				<button onClick={countDown}>
					<FontAwesomeIcon
						className="button"
						icon={faSquareMinus}						
					/>
				</button>
				{/* Counter display */}
				<p>{number}</p>
				{/* Plus button */}
				<button onClick={countUp}>
					<FontAwesomeIcon
						className="button"
						icon={faSquarePlus}						
					/>
				</button>
			</div>
			{/* Button that allows making a request to the main App page */}
			<button className="addButton" onClick={() => onAdd(number)}>
				Agregar al carrito
			</button>
		</div>
	);
};
