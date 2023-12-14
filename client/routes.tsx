import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import Recipe from './components/Recipe.tsx'
import UpdateRecipe from './components/UpdateRecipe.tsx'
import AddRecipe from './components/AddRecipe.tsx'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />} />
    <Route path="/recipes/:id" element={<Recipe />} />
    <Route path="/recipes/:id/update" element={<UpdateRecipe />} />
    <Route path="/addRecipe" element={<AddRecipe />} />
  </>
)
