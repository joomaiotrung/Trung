const Account = require('../models/account.model');

// Get all members
module.exports.findAll = (req,res) => {
    Account.getAll((err,data)=>{
        if(err)
            res.status(500).send({
                message: err.message || "Some error occurred."
            });
        else res.json(data);
    });
};