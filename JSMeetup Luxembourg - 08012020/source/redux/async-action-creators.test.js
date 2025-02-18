import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../../actions/TodoActions";
import * as types from "../../constants/ActionTypes";
import fetchMock from "fetch-mock";
import expect from "expect"; // You can use any testing library

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates FETCH_TODOS_SUCCESS when fetching todos has been done", () => {
    // GIVEN
    fetchMock.getOnce("http://example.com/todos", {
      body: { todos: ["do something"] },
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [
      { type: types.FETCH_TODOS_REQUEST },
      { type: types.FETCH_TODOS_SUCCESS, body: { todos: ["do something"] } }
    ];

    const store = mockStore({ todos: [] });

    // WHEN
    return store.dispatch(actions.fetchTodos()).then(() => {
      // THEN
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
