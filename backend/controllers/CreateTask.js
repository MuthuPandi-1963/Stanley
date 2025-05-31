import TaskModel from "../models/task.model.js";

const CreateTask = async(req,res)=>{
    try{
        const {name,description} = req.body
        if(!name){
            return res.status(404)
            .json({
                message : "name field required"
            })
        }
        const newTask =await TaskModel.create({
            name,
            description : description  || "Nothing"
        })
        return res.status(201)
        .json({
            message:"task added Successfully",
            data : newTask
        })

    }catch(er){
        console.log(err);
        res.status(500)
        .json({
            message : er.message
        })
        
    }
}
export default CreateTask