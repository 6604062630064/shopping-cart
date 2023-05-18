function CartItem({ name, quantity }) {
	return (
		<div className="cart">
			<h3>{name}</h3>
			<button>{"<"}</button>
			<h2>{quantity}</h2>
			<button>{">"}</button>
		</div>
	);
}

export default CartItem;
