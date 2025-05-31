import mongoose from 'mongoose'
const dbConfig =async ()=>{
    try{
        console.log("hii");
        
        const connectDB =await  mongoose.connect(process.env.DB_URL)
        console.log("Data connected Successfully");
        

    }catch(e){
        console.log(e);
        process.exit(0)
        
    }
}
export default dbConfig;