import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home.tsx";
import Towergen from "./pages/towergen.tsx";

function App() {
	return (
		<main className="main-content">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/loadoutgen/" element={<Towergen />} />
			</Routes>
		</main>
	);
}

export default App;
