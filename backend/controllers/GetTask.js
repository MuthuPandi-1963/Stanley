import TaskModel from "../models/task.model.js";

const GetTask = async(req,res)=>{
    try{
        const AllTasks = await TaskModel.find()
    
        
        return res.status(201)
        .json({
            message:"task fetched Successfully",
            data : AllTasks
        })

    }catch(er){
        console.log(err);
        res.status(500)
        .json({
            message : er.message
        })
        
    }
}
export default GetTask;