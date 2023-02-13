import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailablMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailablMeals />
    </Fragment>
  );
};
export default Meals;
