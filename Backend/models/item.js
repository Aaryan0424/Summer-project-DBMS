const  mongoose  = require("mongoose");
const itemSchema=new mongoose.Schema({
    itemNo:{
        type:Number,
        required:true,
        unique:true
    },
    itemName:{
        type:String,
        required : true,
    },
    itemImg:{
        type:String,
        required : true,
    },
    description:{
        type:String,
        trim:true,
    },
    price:{
        type:Number,
        required:true,
        validate(value) {
            if (value < 0) {
                throw new Error('Price must be positive')
            }
        }
    },
    stock:{
        type:Number,
        require:true
    },
    brand:{
        type:String,
        trim:true,
        required:true
    },
    colour:{
        type:String
    },
    material:{
        type:String
    },
    rating:{
        type:Number
    },
    weight:{
        type:Number
    }
    
})
itemSchema.statics.findByNo= async(iNo)=>{
    console.log("hello");
    const item=await Item.findOne({itemNo:iNo});
    if(!item)
        throw new error("Item not found!");
    
    return item
}
const Item=mongoose.model('Item',itemSchema);
module.exports=Item