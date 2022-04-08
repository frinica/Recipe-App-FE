export interface Recipe {
  id: number;
  title: string;
  image: string;
  sourceUrl: string;
  extendedIngredients: Ingredients[];
}

export interface Ingredients {
  name: string;
  measures: Measures[];
  image: string;
}

export interface Measures {
  metric: Metric[];
}

export interface Metric {
  amount: number;
  unitShort: string;
}
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
