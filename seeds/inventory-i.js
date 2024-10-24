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
      warehouse_id: 1,
      name: "Slacks",
      variant: "",
      status: false,
      quantity: 0
    },
    {
      id: 2, 
      warehouse_id: 2,
      name: "Slacks",
      variant: "",
      status: true,
      quantity: 398
    },
    {
      id: 3, 
      warehouse_id: 3,
      name: "Feathersoft Blouse",
      variant: "",
      status: false,
      quantity: 0
    },
    {
      id: 4, 
      warehouse_id: 4,
      name: "Long Sleeve Top",
      variant: "",
      status: true,
      quantity: 296
    },
    {
      id: 5, 
      warehouse_id: 5,
      name: "High Waisted Soft Jeans",
      variant: "",
      status: true,
      quantity: 402
    },
    {
      id: 6, 
      warehouse_id: 6,
      name: "Long Sleeve Top",
      variant: "",
      status: true,
      quantity: 398
    },
    {
      id: 7, 
      warehouse_id: 7,
      name: "High Waisted Soft Jeans",
      variant: "",
      status: false,
      quantity: 0
    },
    {
      id: 8, 
      warehouse_id: 8,
      name: "Cable Knit Sweater",
      variant: "",
      status: true,
      quantity: 411
    },
    {
      id: 9, 
      warehouse_id: 9,
      name: "Wide Leg Joggers",
      variant: "",
      status: true,
      quantity: 324
    },
    {
      id: 10, 
      warehouse_id: 10,
      name: "Loafers",
      variant: "",
      status: true,
      quantity: 398
    },
    {
      id: 11, 
      warehouse_id: 1,
      name: "Loafers",
      variant: "",
      status: true,
      quantity: 375
    },
    {
      id: 12, 
      warehouse_id: 2,
      name: "Oxford Shirt",
      variant: "",
      status: true,
      quantity: 327
    },
    {
      id: 13, 
      warehouse_id: 3,
      name: "Crew Neck Long Top",
      variant: "",
      status: true,
      quantity: 354
    },
    {
      id: 14, 
      warehouse_id: 4,
      name: "Chiffon Blouse",
      variant: "",
      status: false,
      quantity: 0
    },
    {
      id: 15, 
      warehouse_id: 5,
      name: "Sweatshirt",
      variant: "",
      status: true,
      quantity: 345
    },
    {
      id: 16, 
      warehouse_id: 9,
      name: "Sweatshirt",
      variant: "",
      status: true,
      quantity: 364
    },
    {
      id: 17, 
      warehouse_id: 8,
      name: "Straight Leg Pants",
      variant: "",
      status: true,
      quantity: 264
    },
    {
      id: 18, 
      warehouse_id: 7,
      name: "Mock Turtleneck Dress",
      variant: "",
      status: true,
      quantity: 432
    },
    {
      id: 19, 
      warehouse_id: 6,
      name: "Fine Knit Sweater",
      variant: "",
      status: true,
      quantity: 341
    },
    {
      id: 20, 
      warehouse_id: 2,
      name: "Lightweight Cotton Shirt",
      variant: "",
      status: true,
      quantity: 236
    },
    {
      id: 21, 
      warehouse_id: 4,
      name: "Straight Leg Pants",
      variant: "",
      status: true,
      quantity: 351
    },
    {
      id: 22, 
      warehouse_id: 5,
      name: "Long Tie Belt Coat",
      variant: "",
      status: true,
      quantity: 362
    },
    {
      id: 23, 
      warehouse_id: 3,
      name: "Crochet Knit Sweater",
      variant: "",
      status: true,
      quantity: 317
    },
    {
      id: 24, 
      warehouse_id: 10,
      name: "Long Puffer Jacket",
      variant: "",
      status: true,
      quantity: 274
    },
    {
      id: 25, 
      warehouse_id: 8,
      name: "High Waisted Jeans",
      variant: "",
      status: true,
      quantity: 399
    },
    {
      id: 26, 
      warehouse_id: 7,
      name: "Cable Knit Sweater",
      variant: "",
      status: true,
      quantity: 414
    },
    {
      id: 27, 
      warehouse_id: 9,
      name: "Long Sleeve Top",
      variant: "",
      status: true,
      quantity: 354
    },
    {
      id: 28, 
      warehouse_id: 10,
      name: "Fine Knit Sweater",
      variant: "",
      status: true,
      quantity: 231
    },
    {
      id: 29, 
      warehouse_id: 1,
      name: "Long Puffer Jacket",
      variant: "",
      status: true,
      quantity: 452
    },
    {
      id: 30, 
      warehouse_id: 2,
      name: "Mock Turtleneck Dress",
      variant: "",
      status: true,
      quantity: 276
    },
    {
      id: 31, 
      warehouse_id: 3,
      name: "Sweatshirt",
      variant: "",
      status: false,
      quantity: 0
    },
    {
      id: 32, 
      warehouse_id: 6,
      name: "Feathersoft Blouse",
      variant: "",
      status: false,
      quantity: 0
    },
    {
      id: 33, 
      warehouse_id: 7,
      name: "High Waisted Jeans",
      variant: "",
      status: false,
      quantity: 0
    },
    {
      id: 34, 
      warehouse_id: 9,
      name: "Long Tie Belt Coat",
      variant: "",
      status: true,
      quantity: 543
    },
    {
      id: 35, 
      warehouse_id: 8,
      name: "Slacks",
      variant: "",
      status: true,
      quantity: 321
    },
    {
      id: 36, 
      warehouse_id: 1,
      name: "Oxford Shirt",
      variant: "",
      status: false,
      quantity: 0
    },
    {
      id: 37, 
      warehouse_id: 4,
      name: "Wide Leg Joggers",
      variant: "",
      status: false,
      quantity: 0
    },
    {
      id: 38, 
      warehouse_id: 5,
      name: "Feathersoft Blouse",
      variant: "",
      status: true,
      quantity: 365
    },
    {
      id: 39, 
      warehouse_id: 6,
      name: "Straight Leg Pants",
      variant: "",
      status: true,
      quantity: 213
    },
    {
      id: 40, 
      warehouse_id: 8,
      name: "Loafers",
      variant: "",
      status: true,
      quantity: 340
    }
  ]);
};
