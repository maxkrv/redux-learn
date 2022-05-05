import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducers/todoSlice";

export default configureStore({
	reducer: {
		todos: todoSlice,
	},
})