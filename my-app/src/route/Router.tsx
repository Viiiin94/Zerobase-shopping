import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/Home" element={<Home />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
