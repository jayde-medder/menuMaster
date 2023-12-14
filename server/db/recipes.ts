import connection from './connection'
import { Recipe, RecipeData } from '../../models/recipes'

export async function getAllRecipes(db = connection): Promise<Recipe[]> {
  return db('recipes').select()
}

export async function getRecipeById(
  id: number,
  db = connection
): Promise<Recipe> {
  return db('recipes').where({ id }).select().first()
}

export async function updateRecipe(
  id: number,
  updatedData: RecipeData,
  db = connection
) {
  return db('recipes')
    .where({ id })
    .update({ ...updatedData })
    .returning([
      'id',
      'title',
      'description',
      'preparation_time',
      'cooking_time',
      'servings',
      'ingredients',
      'method',
    ])
}

export async function deleteRecipe(id: number, db = connection): Promise<void> {
  await db('recipes').where({ id }).delete()
}

export async function addRecipe(
  recipe: RecipeData,
  db = connection
): Promise<Recipe> {
  return db('recipes')
    .insert({ ...recipe })
    .returning([
      'id',
      'title',
      'description',
      'preparation_time',
      'cooking_time',
      'servings',
      'ingredients',
      'method',
    ])
}
