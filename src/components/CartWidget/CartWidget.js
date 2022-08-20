// Importing FontAwesome main component to generate icons:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importing icons individually:
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// Importing component CSS:
import "./CartWidget.css";

// This component gets:
// POP: Number or message displayed in the red badge. (No badge if is empty)
// CLEARPOP: Function to manage the cleaning event. If the cart is pressed, product variable in the main App is erased.
export const CartWidget = ({pop, clearPop}) => {
    return (
        <div className="notificationBalloon" onClick={clearPop}>
            <FontAwesomeIcon icon={faCartShopping}/>
            {/* Conditional display, only shows badge when pop is greater than 0 */}
            { pop ? <p className="popNumber">{pop}</p> : null}
        </div>
    );
};
