import { useState, useEffect } from "react";

const store = {
  state: {
    count: 0,
  },
  listener: new Set<() => void>(),
  subscribe: (cb: () => void) => {
    store.listener.add(cb);

    return () => {
      store.listener.delete(cb);
    };
  },
};

export const dispatch = (action: { type: string }) => {
  if (action.type === "increment") {
    store.state = {
      count: store.state.count + 1,
    };
  }

  store.listener.forEach((listener) => listener());
};

export const useStore = () => {
  const [state, setState] = useState(store.state);

  useEffect(() => {
    const handleChange = () => {
      setState(store.state);
    };

    const unsubscribe = store.subscribe(handleChange);

    return unsubscribe;
  }, []);

  return state;
};
