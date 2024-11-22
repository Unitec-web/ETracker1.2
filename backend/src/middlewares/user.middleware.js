import User from "../models/user.model";
export const addUser = async(req,res)=>{
    const {Name,Password,Email,Occupation} = req.body
    try{
        const newUser = new User({
            Name:Name,
            Password:Password,
            Email:Email,
            Occupation:Occupation
        })
        await newUser.save()

    }
    catch(err){
        console.error(err)
    }
}