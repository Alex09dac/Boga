import mongoose from 'mongoose';
//que va a guardar 
const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        trin: true
    },
    email: {
        type:String,
        required: true,
        trin: true,
        unique:true
    },
    password: {
        type: String,
        required:true,
    }
}, {
    timestamps: true
})

//para interactuar con la bd 
export default mongoose.model('User', userSchema)