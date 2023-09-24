import { useState, useCallback, useEffect } from "react";

type Nullable<T> = T | null | undefined;

export const useFetch = <Params, FetchResult>(
  fetch: (param: Params) => Promise<FetchResult>,
  params: Params
) => {
  const [_promise, _setPromise] = useState<Promise<void>>();
  const [_status, _setStatus] = useState<"pending" | "fulfilled" | "error">(
    "pending"
  );
  const [_result, _setResult] = useState<Nullable<FetchResult>>(null);

  const resolve = useCallback((result: FetchResult) => {
    _setStatus("fulfilled");
    _setResult(result);
  }, []);

  useEffect(() => {
    _setStatus("pending");
    _setPromise(fetch(params).then(resolve));
  }, [params, fetch, resolve]);

  if (_status === "pending" && _promise) {
    throw _promise;
  }

  return _result;
};
