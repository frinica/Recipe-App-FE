export interface Recipe {
  id: number;
  title: string;
  image: string;
  extendedIngredients: Ingredients[];
  instructions: string;
}

export interface Ingredients {
  original: string | number;
}

/* export interface Measures {
  metric: Metric[];
}

export interface Metric {
  amount: number;
  unitShort: string;
} */
/* export interface RecipeConstructor {
  new (
    id: number,
    title: string,
    image: string,
    servings: number,
    readyInMinutes: number,
    sourceUrl: string
  ): Recipe;
  clone(): Recipe;
}

export let Recipe: RecipeConstructor; */
