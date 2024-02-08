const mongoose = require("mongoose")



const todoscheme = new mongoose.Schema({

    task: {
        type: String,
        require: true
    }

},
    {
        timestamps: true
    }
)



module.exports = mongoose.model("todo", todoscheme)