// Importing FontAwesome main component to generate icons:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importing icons individually:
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// Importing hook to go back to the catalog from the detail:
import { useNavigate, Link } from "react-router-dom";

import { ItemCount } from "../ItemCount/ItemCount";

// CSS Import:
import "./ItemDetail.css";
import { useState } from "react";

export const ItemDetail = ({ item, addingItem }) => {
    // State variable to set the purchase buttons:
    const [completed, setCompleted] = useState(false);
    
	// Destructuring the car information:
	const { id, category, brand, title, description, features, price, pictureUrl, stock } = item;
	// Declaring function to navigate backwards:
	const navigate = useNavigate();

    // Function used to create an object to push into the cartProductList:
    const onAdd = (quantity) => {
        setCompleted(true);
        addingItem({id, category, brand, title, price, pictureUrl, stock, quantity});
	};
	
    return (
		<div id={id} className="ItemDetail">
			{/* Close button icon to link backwards */}
			<FontAwesomeIcon
				className="closeIcon"
				icon={faXmark}
				onClick={() => navigate(-1)}
			/>
			<img className="carPicture" src={pictureUrl} alt={title} />
			<p className="carTitle">{title}</p>
			<p className="carPrice">${price.toLocaleString("en-US")}</p>
			<p className="carDescription">{description}</p>
			<ul className="carFeatures">
				{
					// Mapping the car features:
					features.map(function (feature, index) {
						return <li key={index}>{feature}</li>;
					})
				}
			</ul>
            <div className="cartWidget">
                {
                    !completed ? (
                        <ItemCount
                            className="itemCounter"
                            stock={stock}
                            initial={1}
                            onAdd={onAdd}
                        />
                    ) : (
                        <>
                            <Link to={'/cart'} className='cartWidgetButton'>Go to the cart</Link>
                            <Link to={'/catalog'} className='cartWidgetButton'>Keep buying</Link>
                        </>
                    )
                }
            </div>
		</div>
	);
};
