/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.text('description')
    table.integer('preparation_time')
    table.integer('cooking_time')
    table.integer('servings')
    table.text('ingredients')
    table.text('method')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('recipes')
}
