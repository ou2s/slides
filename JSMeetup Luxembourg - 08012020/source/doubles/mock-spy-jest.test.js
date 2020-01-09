import React from "react";
import { mount } from "enzyme";
import TransformList from "./transform-list";


test("transform strings", () => {
  // Create a mock implementation to inject it as a prop
  const mockedTransformer = jest.fn(value => {
    switch (value) {
      case 0:
        return "none";
      case 1:
        return "one";
      default:
        return "some";
    }
  });

  const component = mount(
    <TransformList transform={mockedTransformer} items={[3, 1, 0, 4]} />
  );

  const expected = ["some", "one", "none", "some"];
  const results = component.find("li").map(node => node.text());
  expect(results).toEqual(expected);

  // Spy on function calls
  expect(mockedTransformer).toHaveBeenCalledTimes(4);
});
