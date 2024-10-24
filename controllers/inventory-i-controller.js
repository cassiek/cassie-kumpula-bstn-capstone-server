import initKnex from "knex";
import configuration from "../knexfile.js";
import { body, validationResult } from "express-validator";
import utils from "../utils/utils.js";
const knex = initKnex(configuration);

//GET all inventory from inventory-i

//GET one item from inventoy-i with warehouse name(?)

//Validation middleware

//PUT(edit) single inventory item

//POST(create) a new inventory item

//DELETE single inventory item, associated inventory type (if eliminated)

export {
    
};