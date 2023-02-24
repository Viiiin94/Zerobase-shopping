import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Product = () => {
	const [value, setValue] = useState<string>("");
	const { category, description, image, price, title, rating } =
		useLocation().state;

	useEffect(() => {
		if (category === "men's clothing" || category === "women's clothing") {
			setValue("패션");
		} else if (category === "jewelery") {
			setValue("액세서리");
		} else if (category === "electronics") {
			setValue("디지털");
		}
	}, [value, category]);

	return (
		<section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
			<div>
				<div className="text-sm breadcrumbs">
					<ul>
						<li>{value}</li>
						<li>{title}</li>
					</ul>
				</div>
				<div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
					<figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
						<img
							src={image}
							alt={title}
							className="object-contain w-full h-72"
						/>
					</figure>
					<div className="card-body px-1 lg:px-12">
						<h2 className="card-title">
							{title}
							<span className="badge badge-accent ml-2">NEW</span>
						</h2>
						<p>{description}</p>
						<div className="flex items-center mt-3">
							<div className="rating rating-half"></div>
							<div className="ml-2">
								{rating.rate} / {rating.count} 참여
							</div>
						</div>
						<p className="mt-2 mb-4 text-3xl">${price}</p>
						<div className="card-actions">
							<button className="btn btn-primary">장바구니에 담기</button>
							<Link to="/cart" className="btn btn-outline ml-1">
								장바구니로 이동
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Product;
