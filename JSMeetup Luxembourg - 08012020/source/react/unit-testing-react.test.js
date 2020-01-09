/*
 *
 * REACT TESTING LIBRARY
 * 
 */
import { fireEvent, render } from "@testing-library/react";

it("CheckboxWithLabel changes the text after click", () => {
  // GIVEN I have a Checkbox with "Off" label
  const { queryByLabelText, getByLabelText } = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  // WHEN I click on the Checkbox
  fireEvent.click(getByLabelText(/off/i));

  // THEN I expect the Checkbox with "On" label
  expect(queryByLabelText(/on/i)).toBeTruthy();
});



/*
 *
 * ENZYME
 * 
 */
import { shallow } from "enzyme";

test("CheckboxWithLabel changes the text after click", () => {
  // GIVEN I have a Checkbox rendred and setted to "Off"
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toMatch(/off/i);

  // WHEN I click on the Checkbox to turn it On
  checkbox.find("input").simulate("change");

  // THEN I expect the Checkbox with "On" label
  expect(checkbox.text()).toMatch(/on/i));
});
