var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connecting To DataBase
mongoose.connect('mongodb://localhost/todo',{ useNewUrlParser: true });

mongoose.connection.once('open',function () {
    console.log('Connection To Database Established ...');
}).on('error',function (error) {
    console.log('Oops... An error Encountered ... ');
});

//Schema
var todoSchema = new mongoose.Schema({
   item:String
});

var todo  = mongoose.model('todo',todoSchema);

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {

    app.get('/index',function (req,res) {
      todo.find({},function (err,data) {
          if(err) throw err;
          res.render('index',{todo:data});
      });
    });

    app.post('/index',urlencodedParser,function (req,res) {
        console.log(req.body);
        todo.findOne({ item: req.body }, function (err, data) {
            if(data)
            {
            }
            else
            {
                var newtodo = todo(req.body).save(function (err,data) {
                    if(err)
                        throw err;
                });
            }
            return res.redirect('/index');
    });
   });

    app.delete('/index/:data',function(req,res)
    {
      todo.find({item:req.params.data}).deleteOne(function (err,data) {
        if(err) throw err;
        res.json(data);
      });
    }
    );

}
