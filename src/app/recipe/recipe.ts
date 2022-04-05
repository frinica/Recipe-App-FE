export interface Recipe {
  id: number;
  title: string;
  image: string;
}

export interface RecipeConstructor {
  new (id: number, title: string, image: string): Recipe;
  clone(): Recipe;
}

export let Recipe: RecipeConstructor;
