import { configureStore } from "@reduxjs/toolkit";
import { menuItemReducer } from "./MenuItemSlice";
import { menuItemApi } from "../../Apis";


const store = configureStore({
    reducer: {
        menuItemStore: menuItemReducer,
        [menuItemApi.reducerPath]: menuItemApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(menuItemApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;

export default store;