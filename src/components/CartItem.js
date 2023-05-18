function CartItem({ name, quantity, id, increment, decrement }) {
	return (
		<div className="cart">
			<h3>{name}</h3>
			<button onClick={(e) => decrement(e, id)}>{"<"}</button>
			<h2>{quantity}</h2>
			<button onClick={(e) => increment(e, id)}>{">"}</button>
		</div>
	);
}

export default CartItem;
