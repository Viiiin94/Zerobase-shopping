import { Link } from "react-router-dom";

const Cart = () => {
	// const arr = JSON.parse(localStorage.getItem("cart"));
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
					<h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
					<Link to="../" className="btn btn-primary mt-10">
						담으러 가기
					</Link>
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
