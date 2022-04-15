import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "스시",
    description: "Finest fish and veggies",
    price: 25000,
  },
  {
    id: "m2",
    name: "슈니첼",
    description: "A german specialty!",
    price: 16000,
  },
  {
    id: "m3",
    name: "바베큐 버거",
    description: "American, raw, meaty",
    price: 12900,
  },
  {
    id: "m4",
    name: "샐러드",
    description: "Healthy...and green...",
    price: 18900,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
