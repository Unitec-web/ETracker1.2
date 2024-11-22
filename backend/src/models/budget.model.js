import mongoose from 'mongoose';
const budgetSchema = new mongoose.Schema({
    userid:{
        required: true,
        typeof: 'string', //foreign key
    },
    totalBudget:{
        required: true,
        type:'currency'
    },
    startDate:{
        required: true,
        type:'date'
    },
    endDate:{
        required: false,
        type:'date'
    }

})
const Budget = mongoose.model('Budget', budgetSchema)
export default Budget