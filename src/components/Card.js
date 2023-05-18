function Card({ name, url, price, id, addToCart }) {
	return (
		<div className="card">
			<img src={url} alt={name} width="300" height="300"></img>
			<h3>{name}</h3>
			<p>฿{price}</p>
			<button onClick={(e) => addToCart(e, id, name, price)}>
				Add to cart
			</button>
		</div>
	);
}

export default Card;
