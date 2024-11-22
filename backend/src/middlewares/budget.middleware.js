import Budget from "../models/budget.model";


export const createBudget = async(req,res)=>{
    const {userid,totalBudget,startDate,endDate } = req.body
    try{
        const newBudget = new Budget({
            userid: userid,
            totalBudget: totalBudget,
            startDate: startDate,
            endDate: endDate
        })
        newBudget.save()
    }
    catch(err){
        console.error("error creating budget :> " + err);
    }
}