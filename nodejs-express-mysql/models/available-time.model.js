const sql=require('./db.js');

const AvailableTime =function(availableTime){
    this.id=availableTime.id,
    this.user_id=availableTime.user_id,
    this.weekday=availableTime.weekday,
    this.start_morning_time=availableTime.start_morning_time,
    this.end_morning_time=availableTime.end_morning_time,
    this.start_afternoon_time=availableTime.start_afternoon_time,
    this.end_afternoon_time=availableTime.end_afternoon_time,
    this.start_night_time=availableTime.start_afternoon_time,
    this.end_night_time=availableTime.end_night_time
};
AvailableTime.FindByID=(UserID,WeekDayID,result)=>{
    let query=`SELECT * FROM available_time WHERE weekday = ${WeekDayID} AND user_id= ${UserID}`;
    sql.query(query,(err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        if(res.length){
            console.log("Found availableTime:",res[0]);
            result(null,res[0]);
            return;
        }
        // not found a availableTime with the id specified
        result({kind:"Not Found"},null);
    });
};
AvailableTime.GetAllByIdWeekDay=(ID,result)=>{
    let query=`SELECT * FROM available_time WHERE weekday = ${ID} `;
    sql.query(query,(err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        console.log("AvailableTime:",res);
        result(null,res);
    });
};
AvailableTime.Create=(newAvailableTime,result)=>{
    let query='INSERT INTO available_time SET ?';
    sql.query(query,newAvailableTime,(err,res)=>{
        if(err){
            console.log("error: ",err);
            result(err,null);
            return;
        }
        console.log("AvailableTime:",res);
        result(null,res);
    });
};
AvailableTime.UpdateByID=(id,availableTime,result)=>{
    
    let query=`UPDATE available_time SET ? WHERE id= ?`;
    sql.query(query,[availableTime,id],(err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        if(res.affectedRows==0)
        {
            //not found availableTime with the user_id and the weekday specified
            result({kind:"not_found"},null);
            return;
        }
        console.log(res);
        result(null,res);
    });
};
module.exports=AvailableTime;
