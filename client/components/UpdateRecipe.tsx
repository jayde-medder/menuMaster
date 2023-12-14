import Header from './Header'
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Forms.module.css'
import React, { useState } from 'react'
import { useRecipe } from '../hooks/useRecipe'
import { useQuery } from '@tanstack/react-query'
import { getRecipeById } from '../apis/recipes'
import { Recipe } from '../../models/recipes'

function UpdateRecipe() {
  const { id } = useParams()
  const recipeId = Number(id)
  const { updateRecipeMutation } = useRecipe()
  const location = useLocation()
  const { recipeState } = location.state
  const navigate = useNavigate()

  const {
    data: recipe,
    isLoading,
    isError,
  } = useQuery(['recipe', recipeId], () => getRecipeById(recipeId))

  const [formValues, setFormValues] = useState({
    title: recipeState.title,
    description: recipeState.description,
    preparation_time: recipeState.preparation_time,
    cooking_time: recipeState.cooking_time,
    servings: recipeState.servings,
    ingredients: recipeState.ingredients,
    method: recipeState.method,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const updatedRecipe = { id: recipeId, ...formValues }
    try {
      updateRecipeMutation.mutate({
        id: recipeId,
        recipe: updatedRecipe as Recipe,
      })
    } catch (error) {
      console.error('Error updating recipe', error)
    }
    navigate(`/recipes/${recipeId}`)
  }

  if (isError) {
    return (
      <>
        <p>Error retrieving data!</p>
      </>
    )
  }

  if (!recipe || isLoading) {
    return <p>...Loading...</p>
  }

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <div className={styles['form']}>
          <div className={styles['form-header']}>
            <h1>Update Recipe</h1>
            <Link to={`/recipes/${recipe?.id}`}>
              <button>Back to Recipe</button>
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles['form-group']}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formValues.title}
                onChange={(e) =>
                  setFormValues({ ...formValues, title: e.target.value })
                }
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="description">Notes</label>
              <input
                type="text"
                id="description"
                name="description"
                value={formValues.description}
                onChange={(e) =>
                  setFormValues({ ...formValues, description: e.target.value })
                }
              />
            </div>
            <div className={styles['form-group-num']}>
              <label htmlFor="preparation_time">
                Preparation Time (minutes)
              </label>
              <input
                className={styles['number-input']}
                type="number"
                id="preparation_time"
                name="preparation_time"
                value={formValues.preparation_time}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    preparation_time: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div className={styles['form-group-num']}>
              <label htmlFor="cooking_time">Cooking Time (minutes)</label>
              <input
                className={styles['number-input']}
                type="number"
                id="cooking_time"
                name="cooking_time"
                value={formValues.cooking_time}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    cooking_time: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div className={styles['form-group-num']}>
              <label htmlFor="servings">Servings</label>
              <input
                className={styles['number-input']}
                type="number"
                id="servings"
                name="servings"
                value={formValues.servings}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    servings: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="ingredients">Ingredients</label>
              <textarea
                className={styles['long-input']}
                id="ingredients"
                name="ingredients"
                value={formValues.ingredients}
                onChange={(e) =>
                  setFormValues({ ...formValues, ingredients: e.target.value })
                }
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="method">Method</label>
              <textarea
                className={styles['long-input']}
                id="method"
                name="method"
                value={formValues.method}
                onChange={(e) =>
                  setFormValues({ ...formValues, method: e.target.value })
                }
              />
            </div>
            <button type="submit" className={styles['update-button']}>
              Update Recipe
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default UpdateRecipe
