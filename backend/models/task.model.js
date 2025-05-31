import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description :{
        type :String,
        default : "nothing"
    }
})
const TaskModel = mongoose.model("task",TaskSchema)
export default TaskModel;
