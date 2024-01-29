import { useBearStore } from "../store/bear";

export const ZustandComp = () => {
  const { bears, increase, decrease } = useBearStore();

  return (
    <div>
      <p>{bears}</p>
      <button onClick={() => increase(1)}>Increase</button>
      <button onClick={() => decrease(1)}>Decrease</button>
    </div>
  );
};
