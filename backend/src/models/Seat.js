import mongoose from "mongoose";
const schema=new mongoose.Schema({code:{type:String,required:true,unique:true},row:Number,column:Number,zone:{type:String,enum:["quiet","group","individual"],default:"individual"},isWindowSide:{type:Boolean,default:false},isCorner:{type:Boolean,default:false},hasCharging:{type:Boolean,default:false},isActive:{type:Boolean,default:true}},{timestamps:true});
export default mongoose.model("Seat",schema);
