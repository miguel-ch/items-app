import { call, put, takeLatest } from "redux-saga/effects";
import { getProducts } from "../../api";
import { fetchProductsBegin, fetchProductsCompleted, fetchProductsError } from "../reducers/productsSlice";

function* fetchProducts() {
  try {
    yield put(fetchProductsBegin());
    const res = yield call(getProducts);
    yield put(fetchProductsCompleted(res));
  } catch (error) {
    yield put(fetchProductsError(error.message));
  }
}

function* productsSaga() {
  yield takeLatest("products/fetchProducts", fetchProducts);
}
export default productsSaga;
