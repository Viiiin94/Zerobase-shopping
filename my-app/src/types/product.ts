export type ProductType = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
	counting?: number;
}[];

export type ProductCartType = {
	id: number;
	category: string;
	description: string;
	image: string;
	price: number;
	title: string;
	rating: {
		rate: number;
		count: number;
	};
	counting: number;
};
