import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="home">
			<Link to="/product">
				<button>Shop now</button>
			</Link>
		</div>
	);
}

export default Home;
