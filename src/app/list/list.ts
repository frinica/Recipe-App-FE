export interface List {
  id: number;
  list_name: string;
  user_id: number;
}

export interface ListEntry {
  id: number;
  customlis_id: number;
  recipe_id: number;
}
