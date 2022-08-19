import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "./CartWidget.css";

export const CartWidget = ({ pop }) => {
    if (pop) {
        return (
            <div className="notificationBalloon">
                <FontAwesomeIcon icon={faCartShopping}/>
                <p className="popNumber">{pop}</p>
            </div>
        );
    } else {
        return (
            <div className="notificationBalloon">
                <FontAwesomeIcon icon={faCartShopping}/>
            </div>
        );
    }
    
};
