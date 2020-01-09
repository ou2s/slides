import * as actions from "../../actions/TodoActions";
import * as types from "../../constants/ActionTypes";

describe("actions", () => {
  it("should create an action to add a todo", () => {
    const expectedAction = {
      type: types.ADD_TODO,
      text: "Finish docs"
    };

    expect(actions.addTodo(text)).toEqual(expectedAction);
  });
});
