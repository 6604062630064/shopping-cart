import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Product from "./components/Product";
import { useState } from "react";
import Cart from "./components/Cart";
function App() {
	const [items, setItems] = useState([]);

	const addToCart = (e, id, name, price) => {
		e.preventDefault();

		const currentItemIndex = items.findIndex((child) => child.id === id);
		// return -1 if array is empty or item is not in the list

		if (currentItemIndex === -1) {
			setItems([...items, { id: id, name: name, price: price, quantity: 1 }]);
		}
		console.log({ id, name, price });
	};
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Home />
							<Footer />
						</>
					}
				></Route>
				<Route
					path="/product"
					element={
						<>
							<Product addToCart={addToCart} />
						</>
					}
				></Route>
				<Route
					path="/cart"
					element={
						<>
							<Cart />
						</>
					}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
