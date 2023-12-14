import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addRecipe, updateRecipe } from '../apis/recipes'
import { deleteRecipe } from '../apis/recipes'

export function useRecipe() {
  const queryClient = useQueryClient()

  const updateRecipeMutation = useMutation(updateRecipe, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['recipe'])
    },
  })

  const deleteRecipeMutation = useMutation(deleteRecipe, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['recipe'])
    },
  })

  const addRecipeMutation = useMutation(addRecipe, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['recipe'])
    },
  })

  return {
    updateRecipeMutation,
    deleteRecipeMutation,
    addRecipeMutation,
  }
}
