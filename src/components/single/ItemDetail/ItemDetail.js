// Importing FontAwesome main component to generate icons:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importing icons individually:
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// Importing hook to go back to the catalog from the detail:
import { useNavigate, Link } from "react-router-dom";

import { ItemCount } from "../ItemCount/ItemCount";

// CSS Import:
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
    // Destructuring the car information:
	const { id, title, description, features, price, pictureUrl } = item;
    // Declaring function to navigate backwards:
    const navigate = useNavigate();
	
    return (
        <div id={id} className="ItemDetail">
            {/* Close button icon to link backwards */}
            <FontAwesomeIcon className="closeIcon" icon={faXmark} onClick={() => navigate(-1)} />
            <img className="carPicture" src={pictureUrl} alt={title}/>
            <p className="carTitle">{title}</p>
            <p className="carPrice">${price.toLocaleString("en-US")}</p>
            <p className="carDescription">{description}</p>
            <ul className="carFeatures">
            {
                // Mapping the car features:
                features.map(function(feature, index) {return <li key={index}>{feature}</li>})
            }
            </ul>
            <ItemCount className="itemCounter" stock={5} initial={1}/>
        </div>
    );
};
