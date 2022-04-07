export interface Recipe {
  id: number;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  sourceUrl: string;
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
