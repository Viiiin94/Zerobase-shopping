import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./route/Router";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<main id="app" className="drawer">
				<section className="drawer-content">
					<Header />
					<Router />
					<Footer />
				</section>
			</main>
		</BrowserRouter>
	</Provider>
);
