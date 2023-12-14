export interface Recipe {
  id: number
  title: string
  description: string
  preparation_time: number
  cooking_time: number
  servings: number
  ingredients: string
  method: string
}

export interface RecipeData {
  title: string
  description: string
  preparation_time: number
  cooking_time: number
  servings: number
  ingredients: string
  method: string
}
