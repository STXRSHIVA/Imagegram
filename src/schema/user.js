import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true,
        unique: true,
        minLength: 3
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        validate :{ 
            validator : function(value){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
                message = "Invalid email format";
            }
        }
    },
    password:{
        type: String,
        required: true,
        minLength: 8
    }
}, {timestamps: true});

const user = mongoose.model("User", userSchema);

export default user;