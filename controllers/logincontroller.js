const express = require('express')
const userlogin = require("../models/login")
const userSignup = require("../models/singup")


const SignupController = async () => {
    try {
        const { name, email, password } = req.body
        const user = await userSignup.findone({ email })
        if (!user) {
            return res.json({
                status: 400,
                mssg: "user already exists"
            })
        }

        const hashedpassword = await bcrypt.hash(password, 10)
        const createnewUser = new userSignup({ name, email, password: hashedpassword })
        await createnewUser.save()

        res.json({
            status: 200,
            mssg: "new user successfully created"
        })

    } catch (error) {
        res.json({
            status: 500,
            mssg: "Getting this error:", error
        })

    }
}


const loginController = async () => {
    try {
        const { email, password } = req.body
        const findUser = await userSignup.findone({ email })
        if (!findUser) ({
            status: 400,
            mssg: "user found"
        })

        const ismatch = await bcrypt.compare(password, findUser.password)
        if (!ismatch) {
            res.json({
                status: 400,
                mssg: 'password does not match'

            })
        }

    } catch (err) {
        res.json({
            status: 500,
            mssg: `Getting this error during login ${err}`
        })
    }
}

module.exports = {SignupController,loginController}