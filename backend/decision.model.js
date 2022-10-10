const mongoose = require('mongoose');

const DecisionSchema = mongoose.Schema({
    name: String,
    model: String,
    decision: String,
    date: Date,
    data: {
        attributes: {
            input: {
               
            },
            decision: String,
            'meets-confidence': Boolean,
            model: String,
            timestamp: Date,
            reasons: [
                {
                    antecedent: {
                        index: Number,
                        threshold: Number,
                        type: String
                    },
                    consequent: {
                        type: String,
                        value: String
                    },
                    type: String
                }
            ],
            confidence: Number
        },
        id: String,
        type: String
    }
},{ typeKey: '$type' });


module.exports = mongoose.model('Decision', DecisionSchema);