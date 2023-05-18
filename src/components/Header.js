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
					<li>Contact</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
