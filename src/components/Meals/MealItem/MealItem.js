import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classees from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classees.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classees.description}>{props.description}</div>
        <div className={classees.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
