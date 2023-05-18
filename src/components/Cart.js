import CartItem from "./CartItem";

function Cart({ cartStorage, increment, decrement }) {
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
		</div>
	);
}

export default Cart;
