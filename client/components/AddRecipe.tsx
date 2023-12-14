import { RecipeData } from '../../models/recipes'
import { useRecipe } from '../hooks/useRecipe'
import Header from './Header'
import styles from './Forms.module.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function AddRecipe() {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    preparation_time: 0,
    cooking_time: 0,
    servings: 0,
    ingredients: '',
    method: '',
  })

  const { addRecipeMutation } = useRecipe()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newRecipe: RecipeData = { ...formValues }
    try {
      addRecipeMutation.mutate(newRecipe)
    } catch (error) {
      console.error('Error adding recipe', error)
    }
    navigate('/')
  }

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <div className={styles['form']}>
          <div className={styles['form-header']}>
            <h1>Add New Recipe</h1>
            <Link to={`/`}>
              <button>Back to Recipes</button>
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles['form-group']}>
              <label htmlFor="title">Title</label>
              <input
                className={styles['title-input']}
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
                className={styles['desc-input']}
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
              Submit Recipe
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddRecipe
