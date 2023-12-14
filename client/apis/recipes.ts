import request from 'superagent'
import type { Recipe, RecipeData } from '../../models/recipes'

const rootUrl = '/api/v1'

export async function getAllRecipes(): Promise<Recipe[]> {
  const res = await request.get(rootUrl + '/recipes')
  if (res.status !== 200) {
    throw new Error('Failed to fetch recipes')
  }
  return res.body.recipes as Recipe[]
}

export async function getRecipeById(id: number): Promise<Recipe | undefined> {
  const res = await request.get(rootUrl + `/recipes/${id}`)
  if (res.status !== 200) {
    throw new Error(`Failed to fetch recipe with ID ${id}`)
  }
  return res.body.recipe
}

export async function updateRecipe({
  id,
  recipe,
}: {
  id: number
  recipe: Recipe
}): Promise<void> {
  await request.patch(rootUrl + `/recipes/${id}`).send(recipe)
}

export async function deleteRecipe(id: number): Promise<void> {
  await request.delete(rootUrl + `/recipes/${id}`)
}

export async function addRecipe(newRecipe: RecipeData): Promise<void> {
  await request.post(rootUrl + '/recipes').send({ ...newRecipe })
}
