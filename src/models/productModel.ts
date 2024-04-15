import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "please provide title"],
    },

    description: {
        type: String,
        required: [true, "please provide description"],
    },

    price: {
        type: Number,
        required: [true, "Please price"],
    }, 

    imageURL: {
        type: String,
        required:[true, "Please an imageURL"],
    }
},{timestamps:true})

const Product = mongoose.models.products || mongoose.model("products", productSchema);

export default Product;