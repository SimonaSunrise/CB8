const mongoose = require('mongoose');

const tutorialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    notes: {
        type: String,
        required: true
    }
});


module.exports=mongoose.model("Tutorial", tutorialSchema)


// const Post = mongoose.model('Post', postSchema);

// module.exports = Post;