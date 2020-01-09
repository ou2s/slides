import React from "react";
import { mount } from "enzyme";
import OnMount from "./on-mount";
import ListOfItems from "./list-of-items";

test("renders the list using stubbed getItems", () => {
  // Create a stub to inject it as a prop
  const getItems = jest.fn(() => ["Larry", "Mo", "Curly"]);

  const component = mount(<ListOfItems getItems={getItems} />);

  expect(component.find("li")).toHaveLength(3);
});
