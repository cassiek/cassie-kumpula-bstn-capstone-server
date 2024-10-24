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
      name: "Long Tie Belt Coat",
      variants: '["charcoal", "black", "silver", "grey plaid"]',
      description: "",
      category: "Outerwear"
    },
    {
      id: 2, 
      name: "Crochet Knit Sweater",
      variants: '["gold", "burgundy", "plum", "indigo"]',
      description: "",
      category: "Sweaters"
    },
    {
      id: 3, 
      name: "Long Puffer Jacket",
      variants: '["black", "graphite", "white", "pink", "plum"]',
      description: "",
      category: "Outerwear"
    },
    {
      id: 4, 
      name: "Mock Turtleneck Dress",
      variants: '["black", "sage", "olive", "charcoal"]',
      description: "",
      category: "Dresses"
    },
    {
      id: 5, 
      name: "Sweatshirt",
      variants: '["tan", "navy", "warm white", "sage", "beige"]',
      description: "",
      category: "Sweatshirts"
    },
    {
      id: 6, 
      name: "Straight Leg Pants",
      variants: '["black", "graphite", "khaki", "grey plaid"]',
      description: "",
      category: "Pants"
    },
    {
      id: 7, 
      name: "High Waisted Jeans",
      variants: '["dark", "medium", "light"]',
      description: "",
      category: "Jeans"
    },
    {
      id: 8, 
      name: "Wide Leg Pants",
      variants: '["charcoal", "black", "white"]',
      description: "",
      category: "Pants"
    },
    {
      id: 9, 
      name: "Fine Knit Sweater",
      variants: '["brown", "burgundy", "light grey"]',
      description: "",
      category: "Sweaters"
    },
    {
      id: 10, 
      name: "Lightweight Cotton Shirt",
      variants: '["white", "warm white", "silver", "light grey"]',
      description: "",
      category: "Shirts"
    },
    {
      id: 11, 
      name: "Chiffon Blouse",
      variants: '["white", "lilac", "light gold"]',
      description: "",
      category: "Blouses"
    },
    {
      id: 12, 
      name: "Oxford Shirt",
      variants: '["white", "light blue", "light grey"]',
      description: "",
      category: "Shirts"
    },
    {
      id: 13, 
      name: "Feathersoft Blouse",
      variants: '["black", "warm white", "grey"]',
      description: "",
      category: "Blouses"
    },
    {
      id: 14, 
      name: "Long Sleeve Top",
      variants: '["white", "warm white", "sage", "light gold"]',
      description: "",
      category: "Tops"
    },
    {
      id: 15, 
      name: "Crew Neck Long Top",
      variants: '["charcoal", "navy", "plum", "light blue"]',
      description: "",
      category: "Tops"
    },
    {
      id: 16, 
      name: "High Waisted Soft Jeans",
      variants: '["black", "graphite", "dark", "light"]',
      description: "",
      category: "Jeans"
    },
    {
      id: 17, 
      name: "Slacks",
      variants: '["charcoal", "black", "khaki"]',
      description: "",
      category: "Pants"
    },
    {
      id: 18, 
      name: "Cable Knit Sweater",
      variants: '["charcoal", "warm white", "white", "light gold", "light blue"]',
      description: "",
      category: "Sweaters"
    },
    {
      id: 19, 
      name: "Wide Leg Joggers",
      variants: '["black", "graphite", "navy", "grey"]',
      description: "",
      category: "Pants"
    },
    {
      id: 20, 
      name: "Loafers",
      variants: '["charcoal", "black", "brown"]',
      description: "",
      category: "Shoes"
    }
  ]);
};
