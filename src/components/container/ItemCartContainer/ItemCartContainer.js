import React from "react";
import { ItemCart } from "../../single/ItemCart/ItemCart";

export const ItemCartContainer = ({ productList }) => {
	return (
		<div>
			<table>
				<thead>
				    <tr>
    					<th></th>
    					<th>Brand</th>
    					<th>Model</th>
    					<th>Quantity</th>
    					<th>Price</th>
    					<th>Total price</th>
    				</tr>
				</thead>
                <tbody>
                    {
                        productList.map((item, index) => <ItemCart key={index} item={item} />)
                    }
                </tbody>
			</table>
		</div>
	);
};
