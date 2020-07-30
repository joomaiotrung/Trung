const sql = require('./db.js');

//constructor 
const Account= (account)=>{
    this.id=account.id;
    this.username=account.username;
    this.password=account.password;
    this.fullname=account.fullname;
};
// Get all members
Account.getAll= (result)=>{
    let query="SELECT * FROM accounts";
    sql.query(query,(err,res)=>{
        if(err){
            console.log("error: ",err);
            result(err,null);
            return;
        }
        console.log("accounts:",res);
        result(null,res);
    });
};
module.exports = Account;