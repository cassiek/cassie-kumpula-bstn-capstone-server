/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("inventory-i").del()
  await knex("inventory-i").insert([
    {
      id: 1, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 2, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 3, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 4, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 5, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 6, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 7, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 8, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 9, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 10, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 11, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 12, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 13, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 14, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 15, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 16, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 17, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 18, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 19, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 20, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 21, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 22, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 23, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 24, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 25, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 26, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 27, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 28, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 29, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 30, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 31, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 32, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 33, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 34, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 35, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 36, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 37, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 38, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 39, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    },
    {
      id: 40, 
      warehouse_id: 'rowValue1',
      name: "",
      variant: "",
      status: "",
      quantity: ""
    }
  ]);
};
