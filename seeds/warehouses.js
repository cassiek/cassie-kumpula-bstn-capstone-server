/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("warehouses").del()
  await knex("warehouses").insert([
    {
      id: 1, 
      address: 'rowValue1',
      city: "",
      country: "",
      contact_name: "",
      contact_position: "",
      contact_phone: "",
      contact_email: ""
    },
    {
      id: 2, 
      address: 'rowValue1',
      city: "",
      country: "",
      contact_name: "",
      contact_position: "",
      contact_phone: "",
      contact_email: ""
    },
    {
      id: 3, 
      address: 'rowValue1',
      city: "",
      country: "",
      contact_name: "",
      contact_position: "",
      contact_phone: "",
      contact_email: ""
    },
    {
      id: 4, 
      address: 'rowValue1',
      city: "",
      country: "",
      contact_name: "",
      contact_position: "",
      contact_phone: "",
      contact_email: ""
    },
    {
      id: 5, 
      address: 'rowValue1',
      city: "",
      country: "",
      contact_name: "",
      contact_position: "",
      contact_phone: "",
      contact_email: ""
    },
    {
      id: 6, 
      address: 'rowValue1',
      city: "",
      country: "",
      contact_name: "",
      contact_position: "",
      contact_phone: "",
      contact_email: ""
    },
    {
      id: 7, 
      address: 'rowValue1',
      city: "",
      country: "",
      contact_name: "",
      contact_position: "",
      contact_phone: "",
      contact_email: ""
    },
    {
      id: 8, 
      address: 'rowValue1',
      city: "",
      country: "",
      contact_name: "",
      contact_position: "",
      contact_phone: "",
      contact_email: ""
    },
    {
      id: 9, 
      address: 'rowValue1',
      city: "",
      country: "",
      contact_name: "",
      contact_position: "",
      contact_phone: "",
      contact_email: ""
    },
    {
      id: 10, 
      address: 'rowValue1',
      city: "",
      country: "",
      contact_name: "",
      contact_position: "",
      contact_phone: "",
      contact_email: ""
    }
  ]);
};
