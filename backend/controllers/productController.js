import Product from "../models/Product.js"

const showAllProducts = async (req, res) => {
    try{
        const data = await Product.find();
        if(data){
            res.status(200).send(data)
        }
    }
    catch(error){
        res.status(500).send({message: error.message})
    }
}
const showSingleProduct = async (req, res) => {
    const { id } = req.params;
    try{
        const data = await Product.findById(id);
        if(data){
            res.status(200).send(data)
        }
    }
    catch(error){
        res.status(500).send({message: error.message})
    }
    
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try{
        const data = await Product.findByIdAndDelete(id);
        if(data){
            res.status(200).send(data)
        }
    }
    catch(error){
        res.status(500).send({message: error.message})
    }
    
}

const updateProduct = (req, res) => {
    
}

const addProduct = async (req, res) => {
    const {title, price, description, author, ratings, comments, category, picturePath } = req.body;

    
    try{
        const data = await Product.findById(id);
        if(data){
            res.status(200).send(data)
        }
    }
    catch(error){
        res.status(500).send({message: error.message})
    }
    
    
}

export {showAllProducts, showSingleProduct, updateProduct, deleteProduct, addProduct}