import { ReactNode } from "react";

interface Props<Item> {
  of: Item[];

  render: (item: Item) => ReactNode;
}

export const Each = <T,>({ of, render }: Props<T>) => {
  return <div>{of.map((item: T) => render(item))}</div>;
};
