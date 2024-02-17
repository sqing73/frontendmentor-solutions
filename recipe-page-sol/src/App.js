import styles from "./App.module.css";
import OmeletImage from "./image-omelette.jpeg";

const preparationTime = [
  "Total: Approximately 10 minutes",
  "Preparation: Preparation: 5 minutes",
  "Cooking: 5 minutes",
];

const ingredients = [
  "2-3 large eggs",
  "Salt, to taste",
  "Pepper, to taste",
  "1 tablespoon of butter or oil",
  "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
];

const instructions = [
  "Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  "Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.",
  "Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  "Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  "Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  "Enjoy: Serve hot, with additional salt and pepper if needed.",
];

const nutrition = {
  Calories: "277kcal",
  Carbs: "0g",
  Protein: "20g",
  Fat: "22g",
};

function App() {
  return (
    <div className={styles.app}>
      <img src={OmeletImage} alt="" className={styles.smallScreenOnly} />
      <div className={styles.card}>
        <img src={OmeletImage} alt="" className={styles.largeScreenOnly} />
        <h1>Simple Omelette Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <div className={styles.preparationTimeContainer}>
          <h2>Preparation time</h2>
          <ul className={styles.preparationTimeList}>
            {preparationTime.map((time, idx) => (
              <li key={idx}>{time}</li>
            ))}
          </ul>
        </div>

        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ing, idx) => (
            <li key={`ing${idx}`}>{ing}</li>
          ))}
        </ul>
        <hr />

        <h2>Instructions</h2>
        <ol>
          {instructions.map((ins, idx) => {
            const [name, description] = ins.split(":");
            return (
              <li key={`instruction${idx}`}>
                <b>{name + ": "}</b>
                <span>{description}</span>
              </li>
            );
          })}
        </ol>
        <hr />

        <h2>Nutrition</h2>
        <p>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        {Object.entries(nutrition).map((entry, idx, array) => {
          const [key, value] = entry;
          return (
            <>
              <div key={key} className={styles.nutritionItem}>
                <span>{key}</span>
                <span>
                  <strong>{value}</strong>
                </span>
              </div>
              {idx !== array.length - 1 && <hr />}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
