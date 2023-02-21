import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductType } from "../types/product";

const create = axios.create();

export const fetchProductAPI = async () => {
	const BASE_URL = "https://fakestoreapi.com/products";
	const { data } = await create.get<ProductType>(BASE_URL);
	return data;
};

export const fetchProduct = createAsyncThunk("product", async () => {
	const response = await fetchProductAPI();
	return response;
});

interface ProductState {
	products: ProductType;
}

const initialState = {
	products: {
		id: 0,
		title: "",
		price: 0,
		description: "",
		category: "",
		image: "",
		rating: {
			rate: 0,
			count: 0,
		},
	},
} as ProductState;

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchProduct.fulfilled, (state, action) => {
			state.products = action.payload;
		});
	},
});

export const productReducer = productSlice.reducer;
