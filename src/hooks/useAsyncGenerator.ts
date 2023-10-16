import { useState, useEffect } from "react";

interface AsyncGenerator<T> {
  data?: T;
  loading: boolean;
  error?: any;
  refetch: () => void;
}

export const useAsyncGenerator = <T>(
  generatorFunction: () => IterableIterator<Promise<T>>
): AsyncGenerator<T> => {
  const [state, setState] = useState<AsyncGenerator<T>>({
    loading: true,
    refetch: () => {},
  });

  useEffect(() => {
    const executeRequest = async (gen: IterableIterator<Promise<T>>) => {
      try {
        const { value, done } = await gen.next();

        if (!done) {
          setState((prevState: AsyncGenerator<T>) => ({
            ...prevState,
            loading: false,
            data: value as T,
          }));
          executeRequest(gen);
        } else {
          setState((prevState: AsyncGenerator<T>) => ({
            ...prevState,
            loading: false,
            data: value,
          }));
        }
      } catch (error) {
        setState((prevState: AsyncGenerator<T>) => ({
          ...prevState,
          loading: false,
          error,
        }));
      }
    };

    function refetch() {
      setState((prevState: AsyncGenerator<T>) => ({
        ...prevState,
        loading: true,
      }));
      executeRequest(generatorFunction());
    }

    executeRequest(generatorFunction());
    setState((prevState: AsyncGenerator<T>) => ({ ...prevState, refetch }));
  }, []);

  return state;
};
