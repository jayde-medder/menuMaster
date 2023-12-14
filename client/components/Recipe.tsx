import { getRecipeById } from '../apis/recipes'
import Header from './Header'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import styles from './Recipe.module.css'
import { Link } from 'react-router-dom'
import { useRecipe } from '../hooks/useRecipe'

function Recipe() {
  const { id } = useParams()
  const recipeId = id ? parseInt(id) : undefined
  const { deleteRecipeMutation } = useRecipe()
  const navigate = useNavigate()

  const {
    data: recipe,
    isLoading,
    isError,
  } = useQuery(['recipe', id], () => getRecipeById(recipeId as number))

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

  const handleDelete = (id: number) => {
    deleteRecipeMutation.mutate(id)
    navigate('/')
    window.location.reload()
  }

  const methodSteps: string[] = recipe.method
    .split('\n')
    .map((step: string) => step.trim())
    .filter((step: string) => step)

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <div className={styles['recipe-view']}>
          <div className={styles['recipe-header']}>
            <h1>{recipe.title}</h1>
            <div className={styles['buttons']}>
              <div className={styles['button-wrapper']}>
                <Link
                  to={`/recipes/${recipe.id}/update`}
                  state={{ recipeState: recipe }}
                >
                  <button>Update</button>
                </Link>
              </div>
              <div className={styles['button-wrapper']}>
                <button onClick={() => handleDelete(recipe.id)}>Delete</button>
              </div>
            </div>
          </div>
          <hr></hr>
          <p>
            <em>{recipe.description}</em>
          </p>
          <hr></hr>
          <p>
            <b>Preparation Time: </b>
            {recipe.preparation_time} minutes
          </p>
          <p>
            <b>Cooking Time: </b>
            {recipe.cooking_time} minutes
          </p>
          <p>
            <b>Servings: </b>
            {recipe.servings}
          </p>
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients
              .split('\n')
              .map((ingredient: string, index: number) => (
                <li key={index}>{ingredient}</li>
              ))}
          </ul>
          <h2>Method</h2>
          <ol>
            {methodSteps.map((step, index) => (
              <li key={index}>{step.replace(/^\d+\.\s/, '')}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  )
}

export default Recipe
