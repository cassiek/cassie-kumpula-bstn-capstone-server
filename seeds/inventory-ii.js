/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("inventory-ii").del()
  await knex("inventory-ii").insert([
    {
      id: 1, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    },
    {
      id: 2, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    },
    {
      id: 3, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    },
    {
      id: 4, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    },
    {
      id: 5, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    },
    {
      id: 6, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    },
    {
      id: 7, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    },
    {
      id: 8, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    },
    {
      id: 9, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    },
    {
      id: 10, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    },
    {
      id: 11, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    },
    {
      id: 12, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    },
    {
      id: 13, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    },
    {
      id: 14, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    },
    {
      id: 15, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    },
    {
      id: 16, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    },
    {
      id: 17, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    },
    {
      id: 18, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    },
    {
      id: 19, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    },
    {
      id: 20, 
      name: 'rowValue1',
      variants: "",
      description: "",
      category: ""
    }
  ]);
};
