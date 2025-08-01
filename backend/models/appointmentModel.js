import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema({
    userId: {type:String, required: true},
    docId: {type:String, required: true},
    slotDate: {type: String, required: true},
    slotsTime:{type: String, required: true},
    userData:{type: Object, required: true},
    docData:{type: Object, required: true},
    amount:{type: Number, required: true},
    date:{type: Number, required: true},
    cancel:{type: Boolean, default: false},
    payment:{type:Boolean, default:false},
    iscompleted:{type:Boolean, default:false}

     
})

const appointmentModel = mongoose.models.appointment || mongoose.model('appointment', appointmentSchema)

export default appointmentModel