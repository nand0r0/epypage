import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "../node_modules/@picocss/pico/css/pico.min.css";
import "../node_modules/@picocss/pico/css/pico.colors.min.css";

import { BrowserRouter, HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</StrictMode>
);
