import { Link } from "react-router-dom";
import { ProductCartType } from "types/product";

const Cart = () => {
	const arr = JSON.parse(localStorage.getItem("cart") as string);

	console.log(arr);

	const onClick = () => {
		localStorage.removeItem(`${arr.map((item: ProductCartType) => item.id)}`);
		window.location.reload();
	};

	return (
		<section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto dark:text-gray-300 dark:bg-gray-700">
			<div className="text-sm breadcrumbs">
				<ul>
					<li>홈</li>
					<li>장바구니</li>
				</ul>
			</div>
			<div className="mt-6 md:mt-14 px-2 lg:px-0">
				<div>
					<ul>
						<li className="border-black border-b w-full h-10 flex">
							<h2 className="w-20 text-center">상품 ID</h2>
							<h2 className="w-40 text-center">상품 이미지</h2>
							<h2 className="w-1/2 text-center text-ellipsis">상품 이름</h2>
							<h2 className="w-40 text-center">상품 갯수</h2>
							<h2 className="w-28 text-center">총 가격</h2>
							<h2 className="w-48 text-center">삭제</h2>
						</li>
						{arr !== null ? (
							arr.map((item: ProductCartType) => {
								const totalPrice = item.price * item.counting;
								return (
									<li
										key={item.id}
										className="border-black border-b w-full h-20 flex"
									>
										<h2 className="w-20 text-center pt-7">{item.id}</h2>
										<h2 className="w-40 text-center pt-3 px-12">
											<img
												src={item.image}
												alt="상품이미지"
												className="object-contain w-14 h-14"
											/>
										</h2>
										<h2 className="w-1/2 text-center pt-7">{item.title}</h2>
										<h2 className="w-40 text-center pt-7">{item.counting}</h2>
										<h2 className="w-28 text-center pt-7">${totalPrice}</h2>
										<h2 className="w-48 text-center pt-7">
											<button type="button" value="삭제">
												삭제
											</button>
										</h2>
									</li>
								);
							})
						) : (
							<>
								<h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
								<Link to="../" className="btn btn-primary mt-10">
									담으러 가기
								</Link>
							</>
						)}
					</ul>
				</div>
				<div className="lg:flex justify-between mb-20">
					<div></div>
					<div className="self-start shrink-0 flex items-center mt-10 mb-20">
						<span className="text-xl md:text-2xl">총 : $NaN</span>
						<label
							htmlFor="confirm-modal"
							className="modal-button btn btn-primary ml-5"
						>
							구매하기
						</label>
					</div>
				</div>
			</div>
			<input type="checkbox" id="confirm-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box dark:bg-gray-500">
					<h3 className="font-bold text-lg">정말로 구매하시겠습니까?</h3>
					<p className="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
					<div className="modal-action dark:text-gray-200">
						<label
							htmlFor="confirm-modal"
							className="btn btn-primary"
							data-cart="[]"
						>
							네
						</label>
						<label
							htmlFor="confirm-modal"
							className="btn btn-outline dark:text-gray-200"
						>
							아니오
						</label>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cart;
