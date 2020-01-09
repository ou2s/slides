import React from "react";

export default function CheckboxWithLabel(props) {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => setIsChecked(!isChecked);

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      {isChecked ? props.labelOn : props.labelOff}
    </label>
  );
}



// TEST the state logic

// IT should check that the Checkbox's label changes after a click

// GIVEN I have a Checkbox with "Off" label

// WHEN I click on the Checkbox (or the label)

// THEN I expect the Checkbox with "On" label
