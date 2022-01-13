const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
        type:String, 
        required:[true,`need product name` ]
    },
    price:{
        type:Number, 
        required:[true,`need product price` ]
    },
    featured:{
     type:Boolean,
     default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    createAt:{
        type:Date,
        default: Date.now()
    },
    company:{
        type:String,
        enum:{
        values :['ikea','liddy','caressa','marcos'],
        message: '{VALUE} is not supported'
        }
    }
})

module.exports = mongoose.model('product',productSchema);