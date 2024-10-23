import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        minLength: 5
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        validate: {
            validator: function(emailValue) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(emailValue);
            },
            message: props => `${props.value} is not a valid email address!`

        }
    },
    password:{
        type: String,
        required: true,
        minLength: 5
    },
},{ timestamps: true }/* every entry will have created_at and updated_at by mongoose*/);

const  user = mongoose.model("User",userSchema); // user collection

export default user;



