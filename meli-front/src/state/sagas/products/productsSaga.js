import { takeLatest, put, call } from "redux-saga/effects";

import { putProductList } from "../../actions";
import { FETCH_PRODUCT_LIST } from "../../actions/types";
import { readProducts } from "../../../services/api/productsService";
import { handleHttpError } from "../../../services/httpUtils";

export function* fetchProducts({search}) {
  const context = "fetchProducts saga";
  try {
    // Waits for the call to finish and puts the result in products.
    const response = yield call(readProducts, search);
    // Dispatches an action to add the products to the state tree.
    yield put(putProductList(response));
  } catch (error) {
    handleHttpError(error, context, error.description);
  }
}
/** * Watcher saga that waits for an action and forks the fetch saga. */
export default function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCT_LIST, fetchProducts);
}
