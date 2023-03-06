import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { ProductType } from "types/product"

const create = axios.create()
const API_URL = process.env.REACT_APP_API_URL as string

export const fetchProductAPI = async () => {
	const { data } = await create.get<ProductType>(API_URL)
	return data
}

export const fetchProduct = createAsyncThunk("product", async () => {
	const response = await fetchProductAPI()
	return response
})

interface ProductState {
	products: ProductType
}

const initialState = {
	products: [],
} as ProductState

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			fetchProduct.fulfilled,
			(state, action: PayloadAction<ProductType>) => {
				state.products = action.payload
			}
		)
	},
})

export const productReducer = productSlice.reducer
