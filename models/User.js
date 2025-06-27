import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    password: {
      type: String,
  required: function () {
    return this.provider === 'credentials'; // or implement custom logic
  },
   
  minlength: [6, 'Password must be at least 6 characters'],
  select: false,        
    },
  
    profilepic: { 
        type: String,
        // default: ""
    },
    coverpic: {
        type: String,
        // default: ""
    },
    razorpayid: { type: String },
    razorpaysecret: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, {timestamps: true});

const User = mongoose.models.User || model('User', userSchema);

export default User;