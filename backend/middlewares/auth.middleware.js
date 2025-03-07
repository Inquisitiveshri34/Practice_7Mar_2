import jwt from "jsonwebtoken"

const authUser = async (req,res,next) => {
    try{
    const token = req.headers.authorization.split(" ")[1] || req.cookies.token;
    if(!token){
        return res.status(401).send({error:"Unauthorised User"})
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user = decoded;
    next()
    } catch(err){
        console.log(err)
        next()
    }
}

export {authUser}