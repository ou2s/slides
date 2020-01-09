import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "./custom-hooks";

test("should increment counter", () => {
  let initialValue = 0;
  const { result, rerender } = renderHook(() => useCounter(initialValue));

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});



test("should reset the counter", () => {
  let initialValue = 0;
  const { result, rerender } = renderHook(() => useCounter(initialValue));

  act(() => {
    result.current.increment();
    result.current.increment();
    result.current.reset();
  });

  expect(result.current.count).toBe(initialValue);
});

test("should set the initial value", () => {
  let initialValue = 99;
  const { result, rerender } = renderHook(() => useCounter(initialValue));

  expect(result.current.count).toBe(initialValue);
});


