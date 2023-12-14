export async function seed(knex) {
  await knex('recipes').del()
  await knex('recipes').insert([
    {
      title: 'Croissant',
      description: "Tim's recipe, updated 4/10/23",
      preparation_time: 20,
      cooking_time: 15,
      servings: 8,
      ingredients: `2 cups all-purpose flour
    1/4 cup sugar
    1 packet (2 1/4 tsp) active dry yeast
    1/2 cup warm milk
    1/2 cup unsalted butter, cold
    1/2 tsp salt
    1 egg yolk
    1/2 cup cold water
    1 egg for egg wash`,
      method: `
    1. In a bowl, combine warm milk and yeast. Let it sit for 5 minutes.
    2. In a large mixing bowl, combine flour, sugar, and salt.
    3. Cut cold butter into small pieces and add it to the flour mixture. Mix until it resembles coarse crumbs.
    4. Add the yeast mixture, egg yolk, and cold water to the flour mixture. Mix until a dough forms.
    5. Knead the dough and let it rise for 1 hour.
    6. Roll out the dough, fold it, and chill it for 30 minutes.
    7. Roll out the dough again, cut into triangles, and roll into croissants.
    8. Let them rise for 1 hour, brush with egg wash, and bake at 375°F for 15 minutes.
    9. Enjoy your homemade croissants!
              `,
    },
    {
      title: 'Cinnamon Bun',
      description: "Cafe's special, secret recipe",
      preparation_time: 25,
      cooking_time: 20,
      servings: 6,
      ingredients: `2 3/4 cups all-purpose flour
    1/4 cup sugar
    1 packet (2 1/4 tsp) active dry yeast
    1/2 cup warm milk
    1/4 cup unsalted butter, softened
    1/2 tsp salt
    1 egg
    1/2 cup warm water`,
      method: `
    1. In a bowl, combine warm milk and yeast. Let it sit for 5 minutes.
    2. In a large mixing bowl, combine flour, sugar, and salt.
    3. Add softened butter, egg, and yeast mixture to the flour mixture. Mix until a dough forms.
    4. Knead the dough and let it rise for 1 hour.
    5. Roll out the dough into a rectangle and spread cinnamon sugar mixture.
    6. Roll up the dough, slice into buns, and let them rise for 30 minutes.
    7. Bake at 375°F for 20 minutes.
    8. Enjoy your freshly baked cinnamon buns!
              `,
    },
    {
      title: 'Pepper Steak Pie',
      description: 'Classic pie with a savory peppered steak filling.',
      preparation_time: 20,
      cooking_time: 45,
      servings: 4,
      ingredients: `1 lb beef steak, diced
    1 onion, chopped
    2 cloves garlic, minced
    1 bell pepper, sliced
    1 cup beef broth
    2 tbsp flour
    1 tsp black pepper
    1 tsp salt
    1 sheet pie pastry`,
      method: `
    1. In a skillet, brown beef steak with onions and garlic.
    2. Add bell pepper, flour, salt, and black pepper. Stir well.
    3. Pour in beef broth and simmer until the filling thickens.
    4. Line a pie dish with pastry, add the filling, and cover with another pastry sheet.
    5. Bake at 375°F for 30-35 minutes.
    6. Serve your delicious pepper steak pie!
              `,
    },
    {
      title: 'Pistachio Gelato',
      description: 'Secret family recipe, guarded with love.',
      preparation_time: 15,
      cooking_time: 30,
      servings: 4,
      ingredients: `2 cups milk
    1 cup heavy cream
    3/4 cup sugar
    1/2 cup shelled pistachios
    1 tsp almond extract
    Green food coloring (optional)`,
      method: `
    1. In a blender, combine milk, heavy cream, sugar, pistachios, and almond extract.
    2. Blend until smooth. Add green food coloring for color.
    3. Pour the mixture into an ice cream maker and churn according to the manufacturer's instructions.
    4. Transfer to an airtight container and freeze for a few hours.
    5. Enjoy your homemade pistachio gelato!
              `,
    },
    {
      title: 'Brownies',
      description: 'Classic brownies, the best in town.',
      preparation_time: 15,
      cooking_time: 25,
      servings: 9,
      ingredients: `1/2 cup unsalted butter
    1 cup sugar
    2 large eggs
    1 tsp vanilla extract
    1/3 cup cocoa powder
    1/2 cup all-purpose flour
    1/4 tsp salt
    1/4 tsp baking powder`,
      method: `
    1. Preheat the oven to 350°F and grease a baking pan.
    2. In a saucepan, melt the butter and remove from heat.
    3. Stir in sugar, eggs, and vanilla extract.
    4. In a separate bowl, whisk together cocoa powder, flour, salt, and baking powder.
    5. Add the dry ingredients to the wet ingredients and mix until well combined.
    6. Pour the batter into the prepared pan and bake for 25 minutes.
    7. Let the brownies cool before cutting into squares.
    8. Enjoy your homemade brownies!
              `,
    },
    {
      title: '5 Spice Fried Chicken',
      description: "Cafe's signature fried chicken recipe.",
      preparation_time: 20,
      cooking_time: 20,
      servings: 4,
      ingredients: `4 chicken drumsticks
    2 cups buttermilk
    1 cup all-purpose flour
    2 tsp Chinese five-spice powder
    1/2 tsp salt
    1/4 tsp black pepper
    Vegetable oil for frying`,
      method: `
    1. Place chicken drumsticks in a bowl and cover with buttermilk. Let it marinate for 2 hours or overnight.
    2. In a separate bowl, combine flour, Chinese five-spice powder, salt, and black pepper.
    3. Remove chicken from buttermilk, allowing excess to drip off, and coat with the flour mixture.
    4. Heat vegetable oil in a deep skillet or fryer to 350°F.
    5. Fry the chicken until golden brown and cooked through, about 20 minutes.
    6. Drain on paper towels and serve your delicious 5 Spice Fried Chicken!
              `,
    },
  ])
}
