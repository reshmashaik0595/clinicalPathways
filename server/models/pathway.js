const mongoose = require('mongoose')

// Pathway schema
const pathwaySchema = mongoose.Schema({
    pathway: {
        type: String,
        required: true,
        unique: true
    },
    visible: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: false
    }
})

// Udpate the updateddate before updating to db
pathwaySchema.pre('updateMany', function (next) {
    const pathway = this.getUpdate()
    // UpdatedAt
    pathway.updatedAt = new Date()
    next()
})

module.exports = mongoose.model('Pathway', pathwaySchema)
