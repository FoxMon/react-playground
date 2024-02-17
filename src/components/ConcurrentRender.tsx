import { startTransition, useState } from "react";
import { dispatch, useStore } from "../hooks/useStore";

const Counter = ({ index }: { index: number }) => {
  const store = useStore();

  const now = performance.now();

  while (performance.now() - now < 500) {
    //
  }

  return (
    <div>
      {index}: {store.count}
    </div>
  );
};

setInterval(() => {
  dispatch({
    type: "increment",
  });
}, 1000);

export const ConcurrentRender = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /**
   * isOpen의 State 변화는 startTransition()에 의해서 Concurrent하게 렌더링 ( 전환 업데이트 ).
   * 값이 변화하면 <Counter /> 렌더링. 하지만 무거운 연산으로 인해 느리게 렌더링.
   * 이 때 1초가 지나서 dispatch. 렌더링 멈추고 store 값 업데이트.
   * 다시 렌더링 하고 <Counter /> 다시 렌더링.
   * 렌더링 중간에 store 값이 변화하고 변화된 값 렌더링. ( Tearing 발생. )
   *
   * 원래 렌더링은 아무도 못막음. 계속 가야함. 근데 React의 Concurrent 부터는
   * 렌더링은 중단될 수 있음.
   *
   * [긴급 렌더링]과 [전환 업데이트]가 있는데, 긴급 업데이트는 타이핑 같이 빠르게 응답해야 하는 것.
   * 근데 전환 업데이트는 느리게 보여도 노상관. 여기서 전환 업데이트를 지원하기 위해서 startTransition() 사용.
   */

  return (
    <div>
      {isOpen &&
        Array.from({ length: 10 })
          .fill(0)
          .map((_, idx: number) => <Counter key={idx} index={idx} />)}
      <button
        onClick={() =>
          startTransition(() => {
            setIsOpen((prev: boolean) => !prev);
          })
        }
      >
        {isOpen ? "RESET" : "TEARING"}
      </button>
    </div>
  );
};
