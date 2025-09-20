import User from "../models/userModel.js";
import validator from 'validator';
import bcrypt from 'bcryptjs';
import { genToken } from "../config/token.js";
import { genToken1 } from "../config/token.js";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "user already exist", success: false });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Enter valid email", success: false });
        }
        if (password.length < 5) {
            return res.status(400).json({ message: "password to short Enter strong password", success: false })
        }
        let hashPassword = await bcrypt.hash(password, 10);
        let user = await User.create({
            name,
            email,
            password: hashPassword
        });
        let token = await genToken(user._id);

        // Set cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.status(201).json({
            message: "user created successsfully",
            success: true,
            token,
            user
        })
    }
    catch (error) {
        console.log("registeration error");
        return res.status(500).json({ message: `registration error ${error}` })
    }
}

// login--------------------------------------------------------

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "email and password is required" })
        }
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }
        let isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "incorrect password" })
        }

        let token = await genToken(user._id);

        // Set cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.status(201).json({
            message: "Login successsfully",
            success: true,
            token,
            user
        })

    }
    catch (error) {
        console.log("Login error");
        return res.status(500).json({ message: `Login error ${error}` })
    }

}


// logout----------------------------------------------------------------

export const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({ message: "Logged out successfully", success: true });
    }
    catch (error) {
        console.log("Logout error");
        return res.status(500).json({ message: `Logout error ${error}` })
    }
}


// ---------------- google login------------------------------------

export const googleLogin = async (req, res) => {
    try {
        const { name, email } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
          user =  await User.create({
                name,email
            })
        }
       
        
        let token = await genToken(user._id);

        // Set cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            message: "user create successsfully with googles",
            // success: true,
            // token,
            user
        })
    }
    catch (error) {
        console.log("Google login error");
        return res.status(500).json({ message: `google login error ${error}` })
    }
}




// ========================Admin Controller==============================
export const adminLogin=async(req,res)=>{
    try{
        let {email, password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            let token = await genToken1(email)
            res.cookie("token",token,{
                httpOnly:true,
                secure:false,
                sameSite:"strict",
                maxAge:1*24*60*60*1000
            })
            return res.status(200).json(token)
        }
        return res.status(400).json({message:"Invalid creadentials"})

    }
    catch(error){
        console.log("AdminLogin error")
        return res.status(500).json({message:"AdminLogin error"})
    }
}

