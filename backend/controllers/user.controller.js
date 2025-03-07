import {User} from "../models/user.model.js"
import jwt from "jsonwebtoken"

const setupUser = async (req,res)=>{
    try{
        const {email,password} = req.body;
        if (!email || !password) {
            return res.status(400).send("Fields are required")
        }
        let user = await User.findOne({email}).select("+password")
        if (!user){
            const newUser = await User.create({
                email,
                password
            })
            user = await User.findOne({email})
        }
        const isPasswordCorrect = await user.isPasswordCorrect(password)
        if (!isPasswordCorrect){
            return res.status(400).send("Wrong credentials")
        }
        delete user._doc.password;
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        res.cookie('refreshToken', refreshToken, {httpOnly: true,});

        return res.status(200).json({ accessToken });

    } catch(err){
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
}

const checkRefreshToken = async (req,res) => {
    try{
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(403).json({ message: 'No refresh token' });
        }
        const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET)
        const {email} = decoded
        const user = await User.findOne({email})
        const accessToken = user.generateAccessToken();
        res.status(200).json({ accessToken });
    }catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
}

const profileController = async(req,res)=>{
    try{
        const {email} = req.user
        const user = await User.findOne({email})
        if (!user){
            return res.status(400).send("User not found")
        }
        res.status(200).send(user)
    } catch(err){
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
}

export {setupUser,checkRefreshToken,profileController}