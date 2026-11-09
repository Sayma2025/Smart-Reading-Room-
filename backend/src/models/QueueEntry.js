import mongoose from "mongoose";
const schema=new mongoose.Schema({studentId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},status:{type:String,enum:["waiting","offered","cancelled","fulfilled"],default:"waiting"}},{timestamps:true}); export default mongoose.model("QueueEntry",schema);
