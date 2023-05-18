import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="header">
			<h1>Store</h1>
			<div className="links">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/product">Product</Link>
					</li>
					<Link to="/cart">
						<li>Cart</li>
					</Link>
				</ul>
			</div>
		</div>
	);
}

export default Header;
