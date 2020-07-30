module.exports = app => {
    const accounts= require('../controllers/account.controller');
    app.get('/accounts',accounts.findAll);
    
    const availableTime=require('../controllers/available-time.controller');
    app.get('/available-time/user_id=:user_id&weekday=:weekday',availableTime.GetByUserID);
    app.get('/available-time/weekday=:weekday',availableTime.GetByWeekDayID);
    app.post('/available-time/0',availableTime.CreateNew);
    app.post('/available-time/user_id=:user_id&day=:day',availableTime.Update);
};