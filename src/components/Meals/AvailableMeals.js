import React from "react";
import Mealsdata from "../../fixtures/Meals.json";
import Card from "../../UI/Card";
import MealItem from "./MealItem/MealItem";

import styles from "./Available.module.css";

function AvailableMeals() {
    return (
        <section className={styles.meals}>
            <Card>
                {Mealsdata.map((meals) => (
                    <MealItem
                        id={meals.id}
                        name={meals.name}
                        description={meals.description}
                        price={meals.price}
                        key={meals.id}
                    />
                ))}
            </Card>
        </section>
    );
}

export default AvailableMeals;
