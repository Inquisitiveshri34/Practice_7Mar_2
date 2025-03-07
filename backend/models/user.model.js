import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: false
    }
})

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function() {
    return jwt.sign({   
        id: this._id,
        email:this.email,
    }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });
  };

userSchema.methods.generateRefreshToken = function() {
    return jwt.sign({   
        id: this._id,
        email:this.email,
    }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
  };

const User = mongoose.model("User",userSchema)

export {User}