import { takeLatest, put, call } from "redux-saga/effects";

import { putProduct } from "../../actions";
import { FETCH_PRODUCT } from "../../actions/types";
import { readProduct } from "../../../services/api/productsService";
import { handleHttpError } from "../../../services/httpUtils";

export function* fetchProduct({id}) {
  const context = "fetchProducts saga";
  try {
    // Waits for the call to finish and puts the result in product.
    const response = yield call(readProduct, id);
    // Dispatches an action to add the product to the state tree.
    yield put(putProduct(response));
  } catch (error) {
    handleHttpError(error, context, error.description);
  }
}
/** * Watcher saga that waits for an action and forks the fetch saga. */
export default function* watchFetchProduct() {
  yield takeLatest(FETCH_PRODUCT, fetchProduct);
}
