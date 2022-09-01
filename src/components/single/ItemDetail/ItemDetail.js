// Importing FontAwesome main component to generate icons:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importing icons individually:
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// CSS Import:
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
    // Destructuring the car information:
	const { id, title, description, features, price, pictureUrl } = item;
	
    return (
        <div id={id} className="ItemDetail">
            {/* Close button icon to link backwards */}
            <FontAwesomeIcon className="closeIcon" icon={faXmark} />
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
            <button className="bookingButton">Reservar</button>
        </div>
    );
};
