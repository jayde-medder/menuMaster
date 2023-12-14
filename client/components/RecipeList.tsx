import { getAllRecipes } from '../apis/recipes'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import styles from './RecipeList.module.css'
import { useRecipe } from '../hooks/useRecipe'

function RecipeList() {
  const { deleteRecipeMutation } = useRecipe()
  const {
    data: recipes,
    isLoading,
    isError,
  } = useQuery(['recipes'], getAllRecipes)

  if (isError) {
    return (
      <>
        <p>Error retrieving data!</p>
      </>
    )
  }

  if (!recipes || isLoading) {
    return <p>...Loading...</p>
  }

  const handleDelete = (id: number) => {
    deleteRecipeMutation.mutate(id)
    window.location.reload()
  }

  return (
    <>
      <div className={styles['recipe-list-header']}>
        <div className={styles['nav']}>
          <div className={styles['header-wrapper']}>
            <h2>all recipes</h2>
          </div>
          <Link to={`/addRecipe`} className={styles['button-link']}>
            <button>
              <span className={styles['img-wrapper']}>
                <img
                  className={styles['add-icon']}
                  src="/images/svg/add.svg"
                  alt="Add Recipe Icon"
                />
              </span>
              add recipe
            </button>
          </Link>
        </div>
        <hr></hr>
      </div>
      <div className={styles['all-recipes']}>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id} className={styles.recipe}>
              <div className={styles['info']}>
                <Link
                  to={`/recipes/${recipe.id}`}
                  className={styles['recipe-title-link']}
                >
                  <p className={styles['recipe-title']}>{recipe.title}</p>
                </Link>
                <p className={styles['recipe-description']}>
                  Notes: {recipe.description}
                </p>
              </div>
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
                  <button onClick={() => handleDelete(recipe.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default RecipeList
