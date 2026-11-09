import mongoose from "mongoose";
const schema=new mongoose.Schema({studentId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},seatId:{type:mongoose.Schema.Types.ObjectId,ref:"Seat",required:true},startTime:{type:Date,required:true},endTime:{type:Date,required:true},status:{type:String,enum:["reserved","checked_in","completed","cancelled","no_show"],default:"reserved"},checkedInAt:Date,checkedOutAt:Date},{timestamps:true});
schema.index({seatId:1,startTime:1,endTime:1}); export default mongoose.model("Booking",schema);
