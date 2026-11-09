import crypto from "node:crypto";
import mongoose from "mongoose";
const schema = new mongoose.Schema({name:{type:String,required:true},email:{type:String,required:true,unique:true,lowercase:true},passwordHash:{type:String,required:true},salt:{type:String,required:true},role:{type:String,enum:["student","admin"],default:"student"}},{timestamps:true});
schema.statics.passwordFields=function(password){const salt=crypto.randomBytes(16).toString("hex");return {salt,passwordHash:crypto.pbkdf2Sync(password,salt,120000,64,"sha512").toString("hex")}};
schema.methods.matchPassword=function(password){const h=crypto.pbkdf2Sync(password,this.salt,120000,64,"sha512").toString("hex");return crypto.timingSafeEqual(Buffer.from(h,"hex"),Buffer.from(this.passwordHash,"hex"))};
export default mongoose.model("User",schema);
