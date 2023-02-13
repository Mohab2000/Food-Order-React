import classees from "./MealItem.module.css";
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classees.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classees.description}>{props.description}</div>
        <div className={classees.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};
export default MealItem;
