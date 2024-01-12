import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";

export const initialState = {
  data: [],
  bag: JSON.parse(localStorage.getItem("bag")) || [],
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
  isModalOpen: false,
  delivery: {
    user: { name: "", lastName: "", age: "", number: "", adress: "" },
    bag: [],
  },
};

const updateLocalStorageBag = (bag) => {
  localStorage.setItem("bag", JSON.stringify(bag));
};

const updateLocalStorageFavorite = (favorite) => {
  localStorage.setItem("favorite", JSON.stringify(favorite));
};

export default createReducer(initialState, (builder) => {
  builder
    // Data
    .addCase(actions.actionData, (state, { payload }) => {
      state.data = payload;
    })
    // Modal
    .addCase(actions.actionCloseModal, (state) => {
      state.isModalOpen = false;
    })

    .addCase(actions.actionHandleModal, (state) => {
      state.isModalOpen = true;
    })
    // Favorites
    .addCase(actions.actionFavoriteUpdate, (state, { payload }) => {
      state.favorite = payload;
    })

    .addCase(actions.actionAddToFavorite, (state, { payload }) => {
      state.favorite = [...state.favorite, payload];
    })

    .addCase(actions.actionRemoveFavorite, (state, { payload }) => {
      const updateFavorite = state.favorite.filter(
        (item) => item.id !== payload.id
      );
      state.favorite = updateFavorite;
    })
    .addCase(actions.actionAddToBagFavList, (state, { payload }) => {
      state.bag = [...state.bag, payload];
      updateLocalStorageBag(state.bag);

      const updatedFavorite = state.favorite.filter(
        (item) => item.id !== payload.id
      );
      state.favorite = updatedFavorite;
      updateLocalStorageFavorite(state.favorite);
    })

    // Bag
    .addCase(actions.actionBagUpdate, (state, { payload }) => {
      const updateBag = state.bag.filter((item) => item.id !== payload.id);
      state.bag = updateBag;
    })

    .addCase(actions.actionAddBag, (state, { payload }) => {
      state.bag = [...state.bag, payload];
    })

    .addCase(actions.actionDeleteBag, (state, { payload }) => {
      const updatedBag = state.bag.filter((item) => item.id !== payload.id);
      state.bag = updatedBag;
      updateLocalStorageBag(state.bag);
    })
    .addCase(actions.actionClearBag, (state, { payload }) => {
      state.bag = payload;
      localStorage.setItem("bag", JSON.stringify(payload));
    })
    // Form
    .addCase(actions.actionDelivery, (state, { payload }) => {
      state.delivery = payload;
    });
});
