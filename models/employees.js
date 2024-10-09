import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    sales: [{
        date: {
            type: Date,
            required: true
        },
        products: [{
            name: {
                type: String,
                required: true
            },
            typeProduct: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }]
    }]
},
{
    timestamps: true
});

module.exports = mongoose.model('Employee', employeeSchema);