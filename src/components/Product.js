import { useState } from "react";
import uniqid from "uniqid";
import Card from "./Card";

const data = [
	{
		name: "NVIDIA GeForce RTX 4090",
		url: require("../images/4090.png"),
		price: 65900,
		id: uniqid(),
	},
	{
		name: "NVIDIA GeForce RTX 3080",
		url: require("../images/3080.png"),
		price: 17999,
		id: uniqid(),
	},
	{
		name: "NVIDIA GeForce GT 430",
		url: require("../images/430.jpeg"),
		price: 500,
		id: uniqid(),
	},
];

function Product({ addToCart }) {
	return (
		<div className="product">
			{data.map((element) => {
				return (
					<Card
						id={element.id}
						addToCart={addToCart}
						name={element.name}
						url={element.url}
						price={element.price}
						key={element.key}
					></Card>
				);
			})}
		</div>
	);
}

export default Product;
