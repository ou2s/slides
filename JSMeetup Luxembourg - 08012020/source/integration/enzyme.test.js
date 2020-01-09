import { shallow } from "enzyme";

test("entering a todo in form adds a todo", async () => {
  const wrapper = shallow(<MyComponent />);

  // enter todo text in textbox
  wrapper.find(".TodoForm-input").instance().value = "My new todo";

  // click Add
  wrapper.find(".TodoForm-button").simulate("click");

  // wait for Todo to show up
  await wait(wrapper, w =>
    w
      .find(".TodoItem")
      .at(3)
      .exists()
  );

  // make sure form is cleared
  expect(wrapper.find(".TodoForm-input").instance().value).toEqual("");

  // make sure todo was added
  const newText = wrapper
    .find(".TodoItem")
    .at(3)
    .find(".TodoItem-text")
    .text();
  expect(newText).toEqual("My new todo");
});
