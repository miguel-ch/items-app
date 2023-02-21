import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./reducers/productsSlice";
import productsSaga from "./sagas/productsSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(productsSaga);

export default store;
