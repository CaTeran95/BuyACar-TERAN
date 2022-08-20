import "./ItemListContainer.css";

export const ItemListContainer = ({ message, children }) => {
	return (
		<div className="itemListContainer">
			<p className="message">{message}</p>
			{children}
		</div>
	);
};
