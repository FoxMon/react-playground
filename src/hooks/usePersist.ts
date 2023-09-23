import { useState, useCallback } from "react";

interface PersistProps<T> {
  key: string;
  initialValue: T;
}

export const usePersist = <T>({ key, initialValue }: PersistProps<T>) => {
  const name: string = `persist:${key}`;

  const getFromStorage = <T>(name: string, defaultValue: T): T => {
    try {
      const value = JSON.stringify(`${sessionStorage.getItem(name)}`);

      if (value) {
        return value as T;
      } else {
        sessionStorage.setItem(name, JSON.stringify(defaultValue));

        return defaultValue;
      }
    } catch {
      return defaultValue;
    }
  };

  const [persistValue, setPersistValue] = useState<T>(
    getFromStorage<T>(name, initialValue)
  );

  const setPersist = useCallback(
    (value: T) => {
      sessionStorage.setItem(name, JSON.stringify(value));
      setPersistValue(value);
    },
    [name]
  );

  return [persistValue, setPersist];
};
