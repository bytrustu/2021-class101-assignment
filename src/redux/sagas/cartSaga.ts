import { all, fork, put } from 'redux-saga/effects'
import * as Eff from 'redux-saga/effects'

const takeLatest: any = Eff.takeLatest
export const call: any = Eff.call

import {
  addCartSuccess,
  addCartError,
  removeCartSuccess,
  removeCartError,
  ADD_CART_REQUEST,
  REMOVE_CART_REQUEST,
  loadPurchaseSuccess,
  loadPurchaseError, LOAD_PURCHASE_REQUEST
} from "../actions";
import { IAction } from '../../types'
import { filterLocalStorageByArray, pushLocalStorageByArray, sleep } from '../../utils'
import { loadProductItemListAPI, loadPurchaseAPI } from "../../api";

export function* addCart(action: IAction<string>) {
  try {
    yield sleep(1)
    yield put(addCartSuccess(action.payload))
    pushLocalStorageByArray('cart', action.payload)
    pushLocalStorageByArray('interestCart', action.payload)
  } catch (e) {
    console.error(e)
    yield put(addCartError(e.message))
  }
}

function* watchAddCart() {
  yield takeLatest(ADD_CART_REQUEST, addCart)
}

export function* removeCart(action: IAction<string>) {
  try {
    yield sleep(1)
    yield put(removeCartSuccess(action.payload))
    filterLocalStorageByArray('cart', action.payload)
  } catch (e) {
    console.error(e)
    yield put(removeCartError(e.message))
  }
}

function* watchRemoveCart() {
  yield takeLatest(REMOVE_CART_REQUEST, removeCart)
}

export function* loadPurchase(action: IAction<string[]>) {
  try {
    yield sleep(1)
    const result = yield call(loadPurchaseAPI, action.payload)
    yield put(loadPurchaseSuccess(result))
  } catch (e) {
    console.error(e)
    yield put(loadPurchaseError(e.message))
  }
}

function* watchLoadPurchase() {
  yield takeLatest(LOAD_PURCHASE_REQUEST, loadPurchase)
}

export default function* cartSaga() {
  yield all([fork(watchAddCart)])
  yield all([fork(watchRemoveCart)])
  yield all([fork(watchLoadPurchase)])
}
