const joi = require('joi');

const expenseValSchema = {
    createExpense: joi.object({
        expenseName: joi
            .string()
            .max(20)
            .min(3)
            .message({
                "string-min": "{#label} should be at least {#limit} characters",
                "string-max": "{#label} should be at most {#limit} characters",
            })
            .required(),
        expenseDescription: joi
            .string()
            .min(5)
            .max(150)
            .message({
                "string-min": "{#label} should be at least {#limit} characters",
                "string-max": "{#label} should be at most {#limit} characters",
            })
            .required(),
    }).unknown(true),
};

module.exports = expenseValSchema;
