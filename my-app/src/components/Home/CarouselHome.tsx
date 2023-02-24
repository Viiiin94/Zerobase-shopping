import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const CarouselHome = () => {
	return (
		<Carousel className="carousel-container">
			<div>
				<div className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10 dark:text-gray-700">
					<h2 className="text-2xl lg:text-4xl font-bold text-white">
						세련된 23SS 패션!
					</h2>
					<p className="my-2 text-white">새롭게 단장된 패션을 구경해봅시다.</p>
					<Link to="/fashion" className="btn btn-sm lg:btn-md mt-3">
						바로가기
					</Link>
				</div>
				<img
					src="http://ourselvesstore.com/web/upload/NNEditor/20230130/look-20.jpg"
					alt="fashion"
				/>
			</div>
			<div>
				<div className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10">
					<h2 className="text-2xl lg:text-4xl font-bold text-white">
						당신의 소중함을 알려줄 악세서리
					</h2>
					<p className="my-2 text-white">빛나는 당신을 위하여.</p>
					<Link to="/accessory" className="btn btn-sm lg:btn-md mt-3">
						바로가기
					</Link>
				</div>
				<img
					src="https://media.debeers.com/i/debeers/feb-homepage-mfdb-banner/Classics%20Diamond%20Jewellery%20at%20De%20Beers%20Jewellers?fmt=auto&fmt.webp.qlt=52&fmt.jp2.qlt=34&fmt.jpeg.qlt=60&$rect-7-to-4-aspect-ratio-1920-poi$&layer0=[src=/i//feb-homepage-mfdb-banner]"
					alt="accessory"
				/>
			</div>
			<div>
				<div className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10">
					<h2 className="text-2xl lg:text-4xl font-bold text-black">
						카메라 어떠세요?
					</h2>
					<p className="my-2 text-black">다양한 디지털 상품을 봅시다.</p>
					<Link to="/digital" className="btn btn-sm lg:btn-md mt-3">
						바로가기
					</Link>
				</div>
				<img
					src="https://www.leica-store.co.kr/data/SmartEditContent/20200520153501_4067.jpg"
					alt="digital"
				/>
			</div>
			<div>
				<div className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10">
					<h2 className="text-2xl lg:text-4xl font-bold text-white">
						신선한 과일보고 갈래?
					</h2>
					<p className="my-2 text-white">과일, 채소, 재료, 해산물 등등..</p>
					<Link to="/grocery" className="btn btn-sm lg:btn-md mt-3">
						바로가기
					</Link>
				</div>
				<img
					src="https://foodtank.com/wp-content/uploads/2021/09/gemma-stpjHJGqZyw-unsplash.jpg"
					alt="digital"
				/>
			</div>
		</Carousel>
	);
};

export default CarouselHome;
