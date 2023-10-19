import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: {
        type: "String",
        required: true,

    },
    price: {
        type: Number,
        required: true,
        default: 0

    },
    description: {
        type: "String",
        required: true,

    },
    author: {
        type: "String",
        required: true,

    },
    ratings: {
        type: Number,
        default: 0,

    },
    comments: {
        type: "String",
        default: []
    },
    picturePath: {
        type: "String",
        required: true,

    },

    category:{
        type: "String",
        required: true,

    }
},{
    timestamps: true
})

const Product = mongoose.model("Product", productSchema);

export default Product