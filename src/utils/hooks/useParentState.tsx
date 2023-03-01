import { useCallback, useEffect, useState } from "react";

export function useParentState<T>(value: T): [T, (value: T) => void, boolean] {
  const [state, setState] = useState<T>(value);
  const [setedByParent, setSetedByParent] = useState(true);
  const setStateByChild = useCallback(
    (newValue: T) => {
      setState(newValue);
      setSetedByParent(false);
    },
    [setState, setSetedByParent]
  );
  useEffect(() => {
    setState(value);
    setSetedByParent(true);
  }, [setState, value]);

  return [state, setStateByChild, setedByParent];
}

export type ParentState<T> = [T, (value: T) => void, boolean];
