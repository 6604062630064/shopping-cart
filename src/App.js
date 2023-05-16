import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
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
			</Routes>
		</div>
	);
}

export default App;
