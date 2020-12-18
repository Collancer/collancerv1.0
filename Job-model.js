const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({
    title: String,
    description: String,
    skills: [String],
    budget: Number,
    freelancers: [
        {
            userID: Number,
            name: String
        }
    ]
});

module.exports = mongoose.model('Job', jobSchema);