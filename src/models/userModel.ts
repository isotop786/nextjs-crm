import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "please provide first name"],
        
    },

    lastName: {
        type: String,
        required: [true, "please provide first name"],
       
    },

    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
    }, 

    password: {
        type: String,
        required:[true, "Please provide a password"],
    },
    isVerfied: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;