import { useState } from "react";

interface AsyncError {
  throwAsyncError: (e: Error) => void;
}

export const useAsyncError = (): AsyncError => {
  const [_, _setError] = useState<Error | null>(null);

  const throwAsyncError = (error: Error) => {
    _setError(() => {
      throw error;
    });
  };

  return {
    throwAsyncError,
  };
};
