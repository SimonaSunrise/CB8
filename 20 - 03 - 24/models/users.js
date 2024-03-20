const mongoose =require("mongoose");

const usersSchema = new mongoose.Schema ({

    username: {
        type: String,
        required: true,
        default: "no-userName"
    },
    name: {
        type: String,
        required: true,
        default: "no-name"
    }, 
    surname: {
        type: String,
        required: false,
        default: "no-surname"
    },
    year: {
        type: Number,
        required: true,
        default: () => new Date().getFullYear(),
        }, 
    favourite: {
            type: Boolean,
            required: true,
            default: false,
            },
    created_at: {
            type: Date,
            required: false,
            default:  () => new Date().getFullYear(),
          },
    updated_at: {
            type: Date,
            required: false,
            default: () => new Date().getFullYear(),
          }
    });


    module.exports = mongoose.model("User", usersSchema);
