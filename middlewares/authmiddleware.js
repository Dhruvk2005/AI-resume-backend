const jwt = require("jsonwebtoken")
const secretkey = process.env.JWT_SECRETKEY || "secret_key"

const authmiddleware = (req, res, next) => {
    const authHeader = req.headers["authorization"]
    if (!authHeader) {
        res.json({

            status: 401,
            mssg: "No token provided"
        })
    }

    const token = authHeader.split("")[1]

    jwt.verify(token,secretkey, (err,decoded)=>{
        if(err){
            res.json({
                status:403,
                mssg:"invalid or expired token"
            })
        }

        req.user  = decoded;
        next();
    })
}

module.export = authmiddleware;