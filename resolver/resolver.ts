import Product from '../db/models/index';


const resolvers = {
    Query:{
        getProducts:async ()=>{
            try {
                const products = await Product.find({});
                return products;
            } catch (error) {
                console.log(error)
            }
        },
        getProduct:async (_:any,{ id }:any)=>{
            console.log(_,id)
            const product = await Product.findById(id)
            if(!product){
                throw new Error('Product not found!')
            }
            return product;
        }
    },
    Mutation:{
        newProduct:async(_:any,{input}:any)=>{
            console.log(_,input)
            try {
                const product = new Product(input)
                const result =await product.save();
                return result
            } catch (error) {
                console.log(error)
            }
        },

        updateProduct:async(_:any,{id,input}:any)=>{
            let product = await Product.findById(id)
            if(!product){
                throw new Error('Product not found!')
            }
            product = await Product.findByIdAndUpdate({_id:id},input,{new:true});
            return product;
        },

        deleteProduct:async (_:any,{id}:any)=>{
            let product =await Product.findById(id);
            if(!product){
                throw new Error('Product not found!')
            }
            product = await Product.findByIdAndDelete({_id:id});
            return `Product eliminado ${product}`;
        }
    }
}


export default resolvers;