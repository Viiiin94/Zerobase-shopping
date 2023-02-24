import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchProduct } from "service/ProductSlice";
import { Link } from "react-router-dom";

const CardHome = () => {
	const product = useAppSelector((state) => state.product.products);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchProduct());
	}, [dispatch]);

	const fashionArr = [];
	const accArr = [];
	const digitArr = [];

	for (let i = 0; i < 12; i++) {
		if (i < 4) {
			fashionArr.push(product[i]);
		} else if (i >= 4 && i < 8) {
			accArr.push(product[i]);
		} else {
			digitArr.push(product[i]);
		}
	}

	return (
		<>
			<section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
				<h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
					패션
				</h2>
				<div
					className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
					data-scroll="true"
				>
					{fashionArr[0] &&
						fashionArr.map((item, idx) => {
							return (
								<Link
									to={`/product/${item.id}`}
									className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
									key={`${item.price}_${idx}`}
									state={item}
								>
									<figure className="flex h-80 bg-white overflow-hidden">
										<img
											src={`${item.image}`}
											alt="상품이미지"
											className="transition-transform duration-300"
										/>
									</figure>
									<div className="card-body bg-gray-100 dark:bg-gray-700">
										<p className="card-title text-base">{item.title}</p>
										<p className="text-base">${item.price}</p>
									</div>
								</Link>
							);
						})}
				</div>
			</section>
			<section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
				<h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
					패션
				</h2>
				<div
					className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
					data-scroll="true"
				>
					{accArr[0] &&
						accArr.map((item, idx) => {
							return (
								<Link
									to={`/product/${item.id}`}
									className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
									key={`${item.price}_${idx}`}
									state={item}
								>
									<figure className="flex h-80 bg-white overflow-hidden">
										<img
											src={`${item.image}`}
											alt="상품이미지"
											className="transition-transform duration-300"
										/>
									</figure>
									<div className="card-body bg-gray-100 dark:bg-gray-700">
										<p className="card-title text-base">{item.title}</p>
										<p className="text-base">${item.price}</p>
									</div>
								</Link>
							);
						})}
				</div>
			</section>
			<section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
				<h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
					패션
				</h2>
				<div
					className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
					data-scroll="true"
				>
					{digitArr[0] &&
						digitArr.map((item, idx) => {
							return (
								<Link
									to={`/product/${item.id}`}
									className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
									key={`${item.price}_${idx}`}
									state={item}
								>
									<figure className="flex h-80 bg-white overflow-hidden">
										<img
											src={`${item.image}`}
											alt="상품이미지"
											className="transition-transform duration-300"
										/>
									</figure>
									<div className="card-body bg-gray-100 dark:bg-gray-700">
										<p className="card-title text-base">{item.title}</p>
										<p className="text-base">${item.price}</p>
									</div>
								</Link>
							);
						})}
				</div>
			</section>
		</>
	);
};

export default CardHome;
