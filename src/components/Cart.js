import CartItem from "./CartItem";

function Cart({ cartStorage }) {
	return (
		<div className="cart-container">
			{cartStorage.map((child) => {
				return (
					<CartItem
						key={child.id}
						name={child.name}
						quantity={child.quantity}
					></CartItem>
				);
			})}
		</div>
	);
}

export default Cart;
