import React from "react";
import { Link } from "react-router-dom";

import "./Message.css";

export default function Message({
	imgSource,
	message,
	buttonText,
	buttonLink,
}) {
	return (
		<div className="message">
			<img src={imgSource} />
			<p className="messageText">{message}</p>
			<Link to={buttonLink}>
				<button className="messageButton">{buttonText}</button>
			</Link>
		</div>
	);
}
