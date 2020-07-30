const AvailableTime=require('../models/available-time.model');


//get by user_id and weekday
module.exports.GetByUserID=(req,res) =>{
    const user_id=req.params.user_id;
    const weekdayid=req.params.weekday;
    AvailableTime.FindByID(user_id, weekdayid,(err,data)=>{
        if (err) {
            if(err.kind==="Not Found"){
                res.status(404).send({
                    message:"Not Found"
                });
            }
            else {
                res.status(500).send({
                    message:"Error while retrieving"
                });
            }
        }
        else res.json(data);
    });
};


//get by weekday
module.exports.GetByWeekDayID=(req,res) => {
    let weekdayid=req.params.weekday;
    AvailableTime.GetAllByIdWeekDay(weekdayid,(err,data) => {
        if(err) {
            res.status(500).send({
                message:"Error while retrieving"
            });
        }
        else res.json(data);
    });
};

///////// create
module.exports.CreateNew = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
    });
    }
    // Create a Customer
    const available = new AvailableTime({
        user_id: req.body.user_id,
        weekday: req.body.weekday,
        start_morning_time: req.body.start_morning_time,
        end_morning_time: req.body.end_morning_time,
        start_afternoon_time: req.body.start_afternoon_time,
        end_afternoon_time: req.body.end_afternoon_time,
        start_night_time: req.body.start_night_time,
        end_night_time: req.body.end_night_time
    });

    // Save Customer in the database
    AvailableTime.Create(available, (err, data) => {
        if (err)
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Customer."
        });
        else res.json(data);
    });
};

// update available
module.exports.Update=(req,res) => {
    if(!req.body)
    {
        res.status(400).send({
            message:"Content can not be empty"
        });
    }
    req.body.user_id=req.params.user_id;
    req.body.weekday=req.params.day;
    let id = req.body.id;

    AvailableTime.UpdateByID(id,new AvailableTime(req.body),(err,data)=>{
        if(err){
            if(err.kind==="not_found"){
                res.status(404).send({
                    message: "Not Found availableTime"
                });
            }
            else{
                res.status(500).send({
                    message: "Error while Updating"
                });
            }
        }
        else res.json(data);
    });
};

