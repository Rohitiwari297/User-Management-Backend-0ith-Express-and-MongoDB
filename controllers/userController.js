const User = require('../models/userModel.js')
//Defining Home Router
exports.home = (req , res) => {
    res.send('Hellow World')
}

// Create User in Database
exports.createUser = async (req , res) => {
    //extract info
    try {
        const {name , email} = req.body

        if(!name || !email){
            throw new Error("Name and email are require")
        }

        // const userExists = User.findOne({email})
        // if(userExists){
        //     throw new Error("User already exists")
        // }

        const user = await User.create({
            name,
            email
        })

        res.status(201).json({
            success: true,
            message: "User created Successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

// retriving all saved details  of user in database
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        //

        res.status(200).json({
            success: true,
            message: "Receiving Users Detail Successfully",
            users
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}


// Edite/ Update the User of Database
exports.editUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success: true,
            message: "User Updated Successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message: error.message
        })

    }
}



// Detete Record from the Database
exports.deleteUser = async (req, res)=>{
    try {
        //.params.id -> is use for taking Data by URL
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success: true,
            message: "Users Deleted Successfully"
        })
        
    } catch (error) {
        console.log(error),
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


