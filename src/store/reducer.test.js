import "@testing-library/jest-dom";
import rootReducers, { initialState } from "./reducer";
import * as actions from "./actions";

describe("rootReducers", () => {
  test("return initial state", () => {
    expect(rootReducers(undefined, { type: undefined })).toEqual(initialState);
  });
});

describe("reducer", () => {
  test("return initial state", () => {
    expect(rootReducers(undefined, { type: undefined })).toEqual(initialState);
  });
    
  test("handle actionData", () => {
    const payload = ["data1", "data2"];
    const newState = rootReducers(initialState, actions.actionData(payload));
    expect(newState.data).toEqual(payload);
  });
    
  test("handle close modal", () => {
    const payload = false;
    const newState = rootReducers(
      initialState,
      actions.actionCloseModal(payload)
    );
    expect(newState.isModalOpen).toBe(payload);
  });
    
  test("handle open modal", () => {
    const payload = true;
    const newState = rootReducers(
      initialState,
      actions.actionHandleModal(payload)
    );
    expect(newState.isModalOpen).toBe(payload);
  });
    
  test("handle add to favorite", () => {
    const payload = ["data1", "data2"];
    const newState = rootReducers(
      initialState,
      actions.actionAddToFavorite(payload)
    );
    expect(newState.favorite).toEqual([payload]);
  });
    
  test("handle add to bag ", () => {
    const payload = ["data1", "data2"];
    const newState = rootReducers(initialState, actions.actionAddBag(payload));
    expect(newState.bag).toEqual([payload]);
  });

  test("handle delivery ", () => {
    const payload = {
      user: {
        name: "",
        lastName: "",
        age: "",
        number: "",
        adress: "",
      },
      bag: ["data1", "data2"],
    };
    const newState = rootReducers(
      initialState,
      actions.actionDelivery(payload)
    );
    expect(newState.delivery).toEqual(payload);
  });
});
