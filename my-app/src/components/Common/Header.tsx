import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchProduct } from "service/ProductSlice";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
	const [value, setValue] = useState();

	const product = useAppSelector((state) => state.product);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchProduct());
	}, [dispatch]);

	useEffect(() => {
		setValue(value);
	}, [value]);

	return (
		<div className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content">
			<div className="flex w-full xl:container xl:m-auto">
				<h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2">
					<Link
						to="/"
						className="text-lg font-bold whitespace-nowrap text-gray-700 dark:text-white"
					>
						YB Shop
					</Link>
				</h1>
				<div className="flex-none hidden md:flex md:flex-1 ml-2">
					<Link
						to="/fashion"
						className="btn btn-ghost btn-sm rounded-btn text-gray-700"
					>
						패션
					</Link>
					<Link
						to="/accessory"
						className="btn btn-ghost btn-sm rounded-btn text-gray-700"
					>
						악세서리
					</Link>
					<Link
						to="/digital"
						className="btn btn-ghost btn-sm rounded-btn text-gray-700"
					>
						디지털
					</Link>
				</div>
				<div className="flex items-center px-2">
					<label className="swap swap-flip mr-2 sm:mr-4 text-3xl">
						<input type="checkbox" className="js-theme" />
						<div className="swap-on">😈</div>
						<div className="swap-off">😇</div>
					</label>
					<div className="dropdown">
						<input
							type="text"
							placeholder="검색"
							className="fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput"
							value={value}
						/>
						<ul className="!fixed left-0 sm:!absolute sm:top-14 menu dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto bg-white dark:bg-gray-600"></ul>
					</div>
					<Link to="/cart" className="btn btn-ghost w-10 sm:w-12 ml-1">
						<span className="relative">
							<FiShoppingCart />
							<span className="inline-flex items-center justify-center absolute top-0 right-0 px-2 py-1 rounded-full bg-red-500 text-xs font-bold leading-none text-gray-200 transform translate-x-1/2 -translate-y-1/2">
								0
							</span>
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
