import { useCartStore } from "../store/cart";
import { Each } from "./Each";

export const ZustandCart = () => {
  const { items, addItem, removeItem, totalPrice } = useCartStore();

  return (
    <div>
      <div>
        <h2>Add Item</h2>
        <button
          onClick={() => {
            const newItem = {
              id: Date.now(),
              name: "Item",
              price: Math.floor(Math.random() * 10000) + 1,
            };
            addItem(newItem);
          }}
        >
          Add Item
        </button>
      </div>
      <div>
        <h2>Cart</h2>
        <ul>
          <Each
            of={items}
            render={(item) => {
              return (
                <li key={item.id}>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <button onClick={() => removeItem(item.id)}>remove</button>
                </li>
              );
            }}
          />
        </ul>
        <h3>Total Price: {totalPrice()}</h3>
      </div>
    </div>
  );
};
