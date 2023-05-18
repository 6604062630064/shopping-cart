function Card({ name, url, price }) {
	return (
		<div className="card">
			<img src={url} alt={name} width="300" height="300"></img>
			<h3>{name}</h3>
			<p>฿{price}</p>
			<button>Add to cart</button>
		</div>
	);
}

export default Card;
