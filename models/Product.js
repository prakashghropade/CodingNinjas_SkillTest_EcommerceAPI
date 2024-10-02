import mongoose from "mongoose";

// Products Schema for the crating the Product Model

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    }
})

// Here we have create the product model from the Product schema

export const Product = mongoose.model('Product', productSchema);