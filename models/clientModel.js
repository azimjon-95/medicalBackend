const { Schema, model } = require('mongoose');

const clientSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "firstname is required"]
    },
    lastname: {
        type: String,
        required: [true, "lastname is required"]
    },
    phone: {
        type: String,
        required: [true, "phone number is required"],
        maxLength: 12,
        minLength: 8
    },
    choseDoctor: {
        type: String,
        required: [true, "doctor is required"],
    },
    payState: {
        type: Boolean,
        required: [true, "true or false value is required"]
    },
    paySumm: {
        type: Number,
        required: [true, "default: 0 , before other summ"]
    },
    doctorFirstName: {
        type: String,
        required: [true, "firstname is required"]
    },
    doctorLastName: {
        type: String,
        required: [true, "lastname is required"]
    },
})

const ClientModel = model('client', clientSchema)
module.exports = ClientModel