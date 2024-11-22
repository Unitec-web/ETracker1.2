import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    Name:{
        required: true,
        type: 'string'
    },
    Password:{
        required: true,
        type: 'string'
    },
    Email:{
        required: true,
        type:'email'
    },
    Occupation:{
        required: false,
        type: 'string'
    }

})
const User = mongoose.model('User',userSchema);
export default User