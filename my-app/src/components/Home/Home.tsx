import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProduct } from "../../service/ProductSlice";

const Home = () => {
	const product = useAppSelector((state) => state.product);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchProduct());
	}, [dispatch]);

	return <div>Home</div>;
};

export default Home;
