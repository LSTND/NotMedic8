import { createAction} from "@reduxjs/toolkit";
import sendRequest from "../helpers/API";

export const actionData = createAction('ACTION_DATA')


export const actionCloseModal = createAction('ACTION_CLOSE_MODAL')
export const actionHandleModal = createAction('ACTION_HANDLE_MODAL')


export const actionAddToFavorite = createAction('ACTION_ADD_FAVORITE')
export const actionFavoriteUpdate = createAction('ACTION_FAVORITE_UPDATE')
export const actionRemoveFavorite = createAction('ACTION_REMOVE_FAVORITE')
export const actionFavListProduct = createAction('ACTION_FAV_LIST_PRODUCT')


export const actionAddBag = createAction('ACTION_ADD_BAG')
export const actionBagUpdate = createAction('ACTION_BAG_UPDATE')
export const actionAddToBagFavList = createAction('ACTION_ADD_TO_BAG_FAV_LIST')
export const actionDeleteBag = createAction('ACTION_DELETE_BAG')
export const actionClearBag = createAction('ACTION_CLEAR_BAG')


export const actionDelivery = createAction('ACTION_DELIVERY')

export const actionFetchData = () => (dispatch) => {
	sendRequest("/productShop.json").then((data) => {
		dispatch(actionData(data))
	})
}
