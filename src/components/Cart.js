import CartItem from "./CartItem";

function Cart({ total, cartStorage, increment, decrement }) {
	return (
		<div className="cart-container">
			{cartStorage.map((child) => {
				return (
					<CartItem
						key={child.id}
						name={child.name}
						quantity={child.quantity}
						increment={increment}
						decrement={decrement}
						id={child.id}
					></CartItem>
				);
			})}
			<h2>Total: {total}</h2>
		</div>
	);
}

export default Cart;
