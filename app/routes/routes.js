module.exports = function(app)
{
    var service = require('../contrllers/service');
    var register = require('../contrllers/register');
    var content = require('../contrllers/content');

    // app.get('/maintenance', ma_starus);
    // app.post('/addkeycode', gen_keycode);
    // app.post('/version', checkversion);
    // app.post('/register', register);
    // app.post('/checkuser', checkuser);
    // //Connect
    // app.post('/menu_mainpage', menu_mainpage);
    // app.post('/liverecommen', get_content_liverecommen);
    // app.post('/recommen', get_content_recommen);
    // app.post('/content_data', get_content_data);
    // app.post('/content', content_data);






    app.get('/test',service.test);
    // default route
    app.get('/',(req,res,next)=>{
        res.send("Wellcom to API v2hbox");
    })
    app.use('/*',(req,res,next)=>{
        res.json({message:"No Link"});
    })
};