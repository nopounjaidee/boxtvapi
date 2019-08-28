var v2hdb = require('../connect/v2hconnectdb');


exports.test = async (req,res) => 
{   
    var xx = await
    v2hdb.query("SELECT * FROM maintab", (err, data)=> {
        if(!err) {
            res.status(200).json({
                message:"Products listed.",
                productId:data
            });
        }
    });    
    // res.json(data);
};
