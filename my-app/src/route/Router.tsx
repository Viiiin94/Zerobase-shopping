import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Accessory from "pages/Accessory";
import Digital from "pages/Digital";
import Fashion from "pages/Fashion";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/accessory" element={<Accessory />}></Route>
				<Route path="/digital" element={<Digital />}></Route>
				<Route path="/fashion" element={<Fashion />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
