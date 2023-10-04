export const useObserver = (
  cb: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit
) => {
  const observer: IntersectionObserver = new IntersectionObserver(cb, options);

  return {
    observer,
  };
};
