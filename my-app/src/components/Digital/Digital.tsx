import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchProduct } from "service/ProductSlice";
import { Link } from "react-router-dom";

const Accessory = () => {
	const product = useAppSelector((state) => state.product.products);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchProduct());
	}, [dispatch]);

	const digitArr = [];

	for (let i = 0; i < 20; i++) {
		if (product[i].category === "electronics") digitArr.push(product[i]);
	}
	return (
		<section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
			<div className="text-sm breadcrumbs">
				<ul>
					<li>홈</li>
					<li>악세서리</li>
				</ul>
			</div>
			<article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
				<h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
					악세서리
				</h2>
				<div
					className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
					data-scroll="true"
				>
					{digitArr[0] !== undefined &&
						digitArr.map((item, idx) => {
							return (
								<Link
									to={`../product/${item.id}`}
									className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
									key={idx}
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
			</article>
		</section>
	);
};

export default Accessory;
