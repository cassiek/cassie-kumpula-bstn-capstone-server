/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("warehouses", (table) => {
        table.increments("id").primary();
        table.string("address").notNullable();
        table.string("city").notNullable();
        table.string("country").notNullable();
        table.string("contact_name").notNullable();
        table.string("contact_position").notNullable();
        table.integer("contact_phone")
             .unsigned()
             .notNullable();
        table.string("contact_email").notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("warehouses");
};
