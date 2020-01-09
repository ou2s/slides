import { useState, useCallback } from 'react'

export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)
  const increment = useCallback(() => setCount((x) => x + 1), [])
  const reset = useCallback(() => setCount(initialValue), [initialValue])
  return { count, increment, reset }
}

function Example(props) {
  const {count, increment, reset } = useCounter(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => increment(count + 1)}>
        Increment
      </button>
      <br />
      <button onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
}


// Error when you try to test a custom hooks from outside a component
// Invariant Violation: Hooks can only be called inside the body of a function component.
// react-hooks-testing-library to the rescue
