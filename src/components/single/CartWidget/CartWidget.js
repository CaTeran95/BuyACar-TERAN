// Importing FontAwesome main component to generate icons:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importing icons individually:
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// Importing component CSS:
import "./CartWidget.css";

// This component gets:
// POP: Number or message displayed in the red badge. (No badge if is empty)
// CLEARPOP: Function to manage the cleaning event. If the cart is pressed, product variable in the main App is erased.
export const CartWidget = ({ productList }) => {
    return (
		<div className="notificationBalloon">
			<FontAwesomeIcon icon={faCartShopping} />
			{/* Conditional display, only shows badge when pop is greater than 0 */}
			{productList.length > 0 && <p className="popNumber">{productList.length}</p>}
		</div>
	);
};
